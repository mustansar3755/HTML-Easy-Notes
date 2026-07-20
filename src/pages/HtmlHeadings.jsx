/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Heading, ShieldAlert, Table,  ClipboardCheck } from "lucide-react";

// Components Imports
// import Callout from "../components/common/Callout";
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";
import BrowserPreview from "../components/HtmlHeadings/BrowserPreview"; // Reusing your preview component

import { content } from "../data/HtmlHeadingsData.js";

export default function HtmlHeadings() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const isUr = language === "ur";
  const t = content[language];

  // Raw default sizing data mapping based on standards
  const sizingTableData = [
    { tag: "<h1>", rem: "2.00rem", px: "32px", weight: "Bold" },
    { tag: "<h2>", rem: "1.50rem", px: "24px", weight: "Bold" },
    { tag: "<h3>", rem: "1.17rem", px: "18.72px", weight: "Bold" },
    { tag: "<h4>", rem: "1.00rem", px: "16px", weight: "Bold" },
    { tag: "<h5>", rem: "0.83rem", px: "13.28px", weight: "Bold" },
    { tag: "<h6>", rem: "0.67rem", px: "10.72px", weight: "Bold" }
  ];

  const tocItems = {
    en: [
      { id: "heading-hierarchy", label: "Heading Levels (h1 - h6)" },
      { id: "usage-limits", label: "How many times to use?" },
      { id: "default-sizes", label: "Default Browser Sizes" },
      { id: "golden-rules", label: "Golden Structural Rules" },
    ],
    ur: [
      { id: "heading-hierarchy", label: "Heading Levels (h1 - h6)" },
      { id: "usage-limits", label: "Kitni baar use karein?" },
      { id: "default-sizes", label: "Default Sizes Table" },
      { id: "golden-rules", label: "Golden Structural Rules" },
    ],
  };

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none text-justify">
      {/* Main Page Title Header */}
      <h1 className="text-4xl font-bold text-text-primary mb-3">{t.title}</h1>
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">{t.intro}</p>

      <hr className="border-border mb-8" />

      {/* Section 1: The Core 6 Levels */}
      <section className="mb-12" id="heading-hierarchy">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Heading size={24} className="text-primary-500" />
          {t.hierarchyTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.hierarchyIntro }} />
        
        <CodeBlock code={`<h1>This is Heading 1</h1>\n<h2>This is Heading 2</h2>\n<h3>This is Heading 3</h3>\n<h4>This is Heading 4</h4>\n<h5>This is Heading 5</h5>\n<h6>This is Heading 6</h6>`} />

        {/* Browser Output Simulation box */}
        <p className="text-xs text-text-secondary font-semibold mt-4 mb-1">
          {isUr ? "⚡ Browser default visualization preview:" : "⚡ Browser Default Visualization Preview:"}
        </p>
        <BrowserPreview type="headings" />
      </section>

      {/* Section 2: Precise frequency limits logic */}
      <section className="mb-12" id="usage-limits">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ShieldAlert size={22} className="text-primary-500" />
          {t.rulesTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">{t.rulesIntro}</p>

        {/* Split UI layout for h1 vs other limits */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div className="bg-danger-500/5 border border-danger-500/20 p-5 rounded-xl">
            <h3 className="font-bold text-danger-600 dark:text-danger-400 text-base mb-2 flex items-center gap-1.5">
              <span>🚨</span> {t.h1RuleTitle}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t.h1RuleDesc }} />
          </div>

          <div className="bg-success-500/5 border border-success-500/20 p-5 rounded-xl">
            <h3 className="font-bold text-success-600 dark:text-success-400 text-base mb-2 flex items-center gap-1.5">
              <span>✅</span> {t.h2h6RuleTitle}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t.h2h6RuleDesc }} />
          </div>
        </div>
      </section>

      {/* Section 3: Professional Browser Default Sizes Layout */}
      <section className="mb-12" id="default-sizes">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Table size={22} className="text-primary-500" />
          {t.sizesTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-5">{t.sizesIntro}</p>

        {/* Responsive Table UI structure */}
        <div className="overflow-x-auto border border-border rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse bg-bg-card text-sm">
            <thead>
              <tr className="bg-bg-sidebar border-b border-border">
                <th className="p-3.5 font-semibold text-text-primary">{t.colTag}</th>
                <th className="p-3.5 font-semibold text-text-primary">{t.colRem}</th>
                <th className="p-3.5 font-semibold text-text-primary">{t.colPx}</th>
                <th className="p-3.5 font-semibold text-text-primary">{t.colWeight}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-secondary">
              {sizingTableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-bg-sidebar/30 transition-colors">
                  <td className="p-3.5 font-mono font-bold text-primary-600 dark:text-primary-400">{row.tag}</td>
                  <td className="p-3.5 font-mono">{row.rem}</td>
                  <td className="p-3.5 font-mono text-text-primary font-medium">{row.px}</td>
                  <td className="p-3.5"><span className="px-2 py-0.5 rounded-md bg-border text-xs font-medium text-text-primary">{row.weight}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Structural Best Practices Rules */}
      <section className="mb-12" id="golden-rules">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ClipboardCheck size={22} className="text-primary-500" />
          {t.bestTitle}
        </h2>
        <ul className="space-y-4 text-text-secondary leading-relaxed bg-bg-sidebar/30 p-5 rounded-xl border border-border">
          {[t.best1, t.best2, t.best3].map((bestItem, idx) => (
            <li key={idx} className="flex gap-2 text-sm">
              <span className="text-primary-500 font-bold">•</span>
              <span dangerouslySetInnerHTML={{ __html: bestItem }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Next Chapter Hook banner */}
      <section className="mb-10 bg-bg-card border-2 border-dashed border-border p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-text-primary mb-2">{t.nextTitle}</h3>
        <p className="text-text-secondary leading-relaxed text-sm">{t.nextText}</p>
      </section>

      <hr className="border-border mb-8" />

      {/* Chapter Router Links */}
      <NavigationButtons 
        prevPath="/notes/create-first-page" 
        prevLabel="Setup &amp; First Page" 
        nextPath="/notes/html-paragraphs" 
        nextLabel="Paragraph Mechanics" 
      />
    </article>
  );
}