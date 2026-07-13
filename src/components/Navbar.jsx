import { Moon, Sun, BookOpen, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="h-14 flex items-center justify-between px-4 border-b border-border bg-bg sticky top-0 z-30">
      <Link to="/" className="flex items-center gap-2 font-semibold text-text-primary">
        <BookOpen size={20} className="text-primary-500" />
        HTML Easy Notes
      </Link>

      <div className="flex items-center gap-2">
        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex items-center cursor-pointer gap-1.5 px-3 py-1.5 rounded-lg hover:bg-bg-hover text-text-secondary text-sm font-medium transition-colors border border-border"
          aria-label="Switch language"
        >
          <Languages size={16} />
          {language === "en" ? "EN" : "UR"}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg cursor-pointer hover:bg-bg-hover text-text-secondary transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}