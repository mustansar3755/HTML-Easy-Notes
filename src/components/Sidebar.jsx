import { NavLink } from "react-router-dom";

const sections = [
  {
    title: "Getting Started",
    links: [
      { to: "/notes/introduction", label: "Introduction to HTML" },
      { to: "/notes/html-basic-structure", label: "HTML Document Structure" },
      {
        to: "/notes/intro-to-html-tags-and-elements",
        label: "Introduction To HTML Tags & Elements",
      },
      { to: "/notes/create-first-page", label: "Creating Your First Page" },
    ],
  },
  {
    title: "Text & Structure",
    links: [
      { to: "/notes/headings-in-html", label: "Headings (h1 - h6)" },
      {
        to: "/notes/paragraph-and-other-formattings",
        label: "Paragraphs & Formatting",
      },
      { to: "/notes/block-vs-inline", label: "Block Vs Inline" },
      { to: "/notes/html-lists", label: "List In HTML (UL & OL)" },
    ],
  },
  {
    title: "Links & Media",
    links: [
      { to: "/notes/hyperlinks-and-anchor-tag", label: "Hyperlinks & Anchors" },
      { to: "/notes/images-in-html", label: "Images In HTML" },
      { to: "/notes/html-audio-video", label: "Audio & Video Elements" },
    ],
  },
  {
    title: "Data & Layout",
    links: [
      { to: "/notes/tables", label: "HTML Tables" },
      { to: "/notes/forms-inputs", label: "Forms & Input Types" },
      { to: "/notes/semantic-html", label: "Semantic Elements (Layout)" },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="shrink-0 border-r border-border bg-bg-sidebar h-[calc(100vh-56px)] sticky top-14 overflow-y-auto px-4 py-6 hidden lg:block">
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          {/* Section Title with a bottom border instead of hr/br tags */}
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted pb-2 mb-3 px-2 border-b border-mauve-400/20">
            {section.title}
          </p>

          <div className="flex flex-col gap-1">
            {section.links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-2 py-1.5 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium"
                      : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
