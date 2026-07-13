// src/components/TableOfContents.jsx
import { useEffect, useState } from "react";

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id || null);

  useEffect(() => {
    if (!items.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // navbar offset
      let current = items[0].id;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }

      // Agar user page ke bilkul end tak scroll kar chuka hai,
      // to zabardasti last item ko active kar do
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;

      if (scrolledToBottom) {
        current = items[items.length - 1].id;
      }

      setActiveId(current);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 90;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <aside className="sticky top-14 h-[calc(100vh-56px)] overflow-y-auto px-4 py-8 hidden xl:block">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
        On This Page
      </p>
      <ul className="space-y-1 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left text-sm py-1 pl-3 -ml-px border-l-2 transition-colors cursor-pointer ${
                activeId === item.id
                  ? "border-primary-500 text-primary-600 dark:text-primary-400 font-medium"
                  : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}