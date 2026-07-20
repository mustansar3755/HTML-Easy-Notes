/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { AlignLeft, Layers, CornerDownLeft, Sparkles, Binary, ClipboardCheck, Eye } from "lucide-react";

// Components
// import Callout from "../components/common/Callout";
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";
import BrowserPreview from "../components/HtmlHeadings/BrowserPreview";

import { content } from "../data/HtmlParagraphsAndFormattingData.js";

export default function HtmlParagraphsAndFormatting() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const isUr = language === "ur";
  const t = content[language];

  // Comprehensive Inline Formatting Dataset
  const formattingTagsData = [
    { tag: "<b>", category: "Physical", meaning: isUr ? "Text ko sirf mota (bold) karna" : "Purely visual bold weight", visual: <b>Bold Text</b> },
    { tag: "<strong>", category: "Semantic", meaning: isUr ? "Ahem text (Important + Bold)" : "Important content with bold weight", visual: <strong>Strong Text</strong> },
    { tag: "<i>", category: "Physical", meaning: isUr ? "Text ko tircha (italic) karna" : "Purely visual italic style", visual: <i>Italic Text</i> },
    { tag: "<em>", category: "Semantic", meaning: isUr ? "Tawajah talab text (Emphasized)" : "Emphasized stress text", visual: <em>Emphasized Text</em> },
    { tag: "<u>", category: "Physical", meaning: isUr ? "Niche line lagana (Underline)" : "Underlined text", visual: <u>Underlined Text</u> },
    { tag: "<mark>", category: "Semantic", meaning: isUr ? "Yellow highlight karna" : "Highlighted / Marked text", visual: <mark className="bg-yellow-300 text-black px-1 rounded">Marked Text</mark> },
    { tag: "<del>", category: "Semantic", meaning: isUr ? "Kati hui line (Deleted text)" : "Strikethrough / Deleted text", visual: <del>Deleted Text</del> },
    { tag: "<ins>", category: "Semantic", meaning: isUr ? "Naya shamil hua text" : "Inserted / Added text", visual: <ins>Inserted Text</ins> },
    { tag: "<small>", category: "Semantic", meaning: isUr ? "Chota text (Side comments/Copyright)" : "Smaller text for fine print", visual: <small>Small Fine Print</small> },
  ];

  const tocItems = {
    en: [
      { id: "paragraph-concept", label: "1. The <p> Tag Mechanics" },
      { id: "whitespace-rule", label: "2. Whitespace Collapsing" },
      { id: "line-controls", label: "3. <br>, <hr>, and <pre>" },
      { id: "formatting-tags", label: "4. Text Formatting Tags" },
      { id: "sub-and-sup", label: "5. Subscript & Superscript" },
      { id: "best-practices", label: "6. Golden Rules" },
    ],
    ur: [
      { id: "paragraph-concept", label: "1. Paragraph <p> Tag" },
      { id: "whitespace-rule", label: "2. Whitespace Collapsing" },
      { id: "line-controls", label: "3. <br>, <hr>, aur <pre>" },
      { id: "formatting-tags", label: "4. Text Formatting Tags" },
      { id: "sub-and-sup", label: "5. Subscript aur Superscript" },
      { id: "best-practices", label: "6. Golden Rules" },
    ],
  };

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none text-justify">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-text-primary mb-3">{t.title}</h1>
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">{t.intro}</p>

      <hr className="border-border mb-8" />

      {/* SECTION 1: Deep Explanation of Paragraph Tag */}
      <section className="mb-12" id="paragraph-concept">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <AlignLeft size={24} className="text-primary-500" />
          {t.paragraphSectionTitle}
        </h2>
        
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.paragraphConcept }} />
        <p className="text-text-secondary leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.paragraphBlockDetail }} />

        <CodeBlock 
          code={`<!-- Two distinct paragraphs -->\n<p>This is the first paragraph. Browsers automatically add vertical spacing above and below this text block.</p>\n\n<p>This is the second paragraph. It automatically starts on a brand-new line with proper separation.</p>`} 
        />
      </section>

      {/* SECTION 2: Whitespace Collapsing Rule */}
      <section className="mb-12" id="whitespace-rule">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Layers size={22} className="text-primary-500" />
          {t.whitespaceTitle}
        </h2>
        
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.whitespaceConcept }} />

        <div className="bg-bg-card border border-border p-5 rounded-xl mb-6 shadow-sm">
          <p className="text-xs font-semibold text-primary-500 font-mono mb-2 uppercase tracking-wide">
            {isUr ? "VS Code Mein Aapka Written Code:" : "Your Code Written in VS Code:"}
          </p>
          
          <CodeBlock code={`<p>\n    This is      a text with     lots of \n    extra spaces    and \n    enters.\n</p>`} />

          <p className="text-sm text-text-secondary mt-4 mb-2" dangerouslySetInnerHTML={{ __html: t.whitespaceResultText }} />

          <div className="p-4 bg-white dark:bg-slate-900 border border-border rounded-lg text-slate-900 dark:text-slate-100 font-sans text-sm shadow-inner">
            <span className="text-xs text-slate-400 font-mono block mb-1">⚡ Browser Visual Output:</span>
            This is a text with lots of extra spaces and enters.
          </div>
        </div>
      </section>

      {/* SECTION 3: Line Breaks, HR and Preformatted Text */}
      <section className="mb-12" id="line-controls">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <CornerDownLeft size={22} className="text-primary-500" />
          {t.lineControlTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">{t.lineControlIntro}</p>

        {/* 3 Grid Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          
          {/* BR Tag Card */}
          <div className="bg-bg-card p-5 border border-border rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-base font-bold text-primary-500 mb-2">&lt;br /&gt;</h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.brTagDesc }} />
            </div>
            <CodeBlock code={`<p>Line One<br />Line Two</p>`} />
          </div>

          {/* HR Tag Card */}
          <div className="bg-bg-card p-5 border border-border rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-base font-bold text-primary-500 mb-2">&lt;hr /&gt;</h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.hrTagDesc }} />
            </div>
            <CodeBlock code={`<p>Section 1</p>\n<hr />\n<p>Section 2</p>`} />
          </div>

          {/* PRE Tag Card */}
          <div className="bg-bg-card p-5 border border-border rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-base font-bold text-primary-500 mb-2">&lt;pre&gt;</h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.preTagDesc }} />
            </div>
            <CodeBlock code={`<pre>\n Line 1\n   Line 2\n</pre>`} />
          </div>

        </div>

        {/* Interactive Live Browser Output */}
        <p className="text-xs text-text-secondary font-semibold mt-4 mb-1 flex items-center gap-1.5">
          <Eye size={14} className="text-primary-500" />
          {isUr ? "⚡ Output ka farq browser preview mein dekhein:" : "⚡ Browser Live Render Comparison:"}
        </p>
        <BrowserPreview type="breaks" />
      </section>

      {/* SECTION 4: Complete Formatting Tags Table */}
      <section className="mb-12" id="formatting-tags">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Sparkles size={22} className="text-primary-500" />
          {t.formattingTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">{t.formattingIntro}</p>

        {/* Table View */}
        <div className="overflow-x-auto border border-border rounded-xl shadow-sm mb-6">
          <table className="w-full text-left border-collapse bg-bg-card text-sm">
            <thead>
              <tr className="bg-bg-sidebar border-b border-border">
                <th className="p-3.5 font-semibold text-text-primary">{t.colTag}</th>
                <th className="p-3.5 font-semibold text-text-primary">{t.colCategory}</th>
                <th className="p-3.5 font-semibold text-text-primary">{t.colMeaning}</th>
                <th className="p-3.5 font-semibold text-text-primary">{t.colVisual}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-secondary">
              {formattingTagsData.map((row, idx) => (
                <tr key={idx} className="hover:bg-bg-sidebar/30 transition-colors">
                  <td className="p-3.5 font-mono font-bold text-primary-600 dark:text-primary-400">{row.tag}</td>
                  <td className="p-3.5">
                    <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${row.category === 'Semantic' ? 'bg-success-500/10 text-success-600 dark:text-success-400 border border-success-500/20' : 'bg-warning-500/10 text-warning-600 dark:text-warning-400 border border-warning-500/20'}`}>
                      {row.category}
                    </span>
                  </td>
                  <td className="p-3.5">{row.meaning}</td>
                  <td className="p-3.5 bg-white/50 dark:bg-black/20 font-sans">{row.visual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Code Example */}
        <CodeBlock code={`<p>\n  This is <b>bold</b> and this is <strong>important strong</strong> text.\n  Here is <i>italic</i>, <em>emphasized</em>, <mark>highlighted</mark>, <del>deleted</del>, and <small>small print</small>.\n</p>`} />
      </section>

      {/* SECTION 5: Subscript and Superscript */}
      <section className="mb-12" id="sub-and-sup">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Binary size={22} className="text-primary-500" />
          {t.subSupTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">{t.subSupIntro}</p>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <div className="p-5 bg-bg-sidebar/30 border border-border rounded-xl">
            <h3 className="font-semibold text-text-primary text-base mb-2">Subscript (&lt;sub&gt;)</h3>
            <p className="text-sm text-text-secondary mb-3" dangerouslySetInnerHTML={{ __html: t.subDesc }} />
            <div className="p-3 bg-bg-card border border-border rounded-lg text-center font-mono text-lg text-primary-500 font-bold">
              H<sub>2</sub>O &nbsp;|&nbsp; CO<sub>2</sub>
            </div>
          </div>

          <div className="p-5 bg-bg-sidebar/30 border border-border rounded-xl">
            <h3 className="font-semibold text-text-primary text-base mb-2">Superscript (&lt;sup&gt;)</h3>
            <p className="text-sm text-text-secondary mb-3" dangerouslySetInnerHTML={{ __html: t.supDesc }} />
            <div className="p-3 bg-bg-card border border-border rounded-lg text-center font-mono text-lg text-primary-500 font-bold">
              E = mc<sup>2</sup> &nbsp;|&nbsp; 10<sup>th</sup> July
            </div>
          </div>
        </div>

        <CodeBlock code={`<!-- Chemistry Equation -->\n<p>Water formula is H<sub>2</sub>O and Carbon Dioxide is CO<sub>2</sub>.</p>\n\n<!-- Math & Dates -->\n<p>Einstein equation: E = mc<sup>2</sup></p>\n<p>Event Date: 10<sup>th</sup> July 2026</p>`} />
      </section>

      {/* SECTION 6: Golden Rules */}
      <section className="mb-12" id="best-practices">
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

      {/* Next Chapter Banner */}
      <section className="mb-10 bg-bg-card border-2 border-dashed border-border p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-text-primary mb-2">{t.nextTitle}</h3>
        <p className="text-text-secondary leading-relaxed text-sm">{t.nextText}</p>
      </section>

      <hr className="border-border mb-8" />

      {/* Router Links */}
      <NavigationButtons 
        prevPath="/notes/headings-in-html" 
        prevLabel="Headings (h1 - h6)" 
        nextPath="/notes/block-vs-inline" 
        nextLabel="Block Vs Inline" 
      />
    </article>
  );
}