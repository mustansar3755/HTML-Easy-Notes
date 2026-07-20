/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Box, Tag, LayoutGrid, Table, ClipboardCheck } from "lucide-react";

// Components Imports
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

import { content } from "../data/HtmlBlockVsInlineData.js";

export default function HtmlBlockVsInline() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const isUr = language === "ur";
  const t = content[language];

  // Master Tag List Mapping
  const masterTagList = [
    { tag: "<div>", category: "Block-Level", behavior: isUr ? "Full line gheralta hai, nayi line se shuru hota hai" : "Takes 100% width, starts on a new line" },
    { tag: "<p>", category: "Block-Level", behavior: isUr ? "Paragraph block with margins" : "Block text element with top/bottom margins" },
    { tag: "<h1> to <h6>", category: "Block-Level", behavior: isUr ? "Heading blocks with bold sizing" : "Block heading tags with bold sizing" },
    { tag: "<ul> / <ol> / <li>", category: "Block-Level", behavior: isUr ? "List containers and items" : "Block list structures" },
    { tag: "<header> / <footer>", category: "Block-Level", behavior: isUr ? "Semantic layout sections" : "Semantic layout block sections" },
    { tag: "<span>", category: "Inline", behavior: isUr ? "Sirf text jitni width, barabar mein baithta hai" : "Only takes content width, sits side-by-side" },
    { tag: "<a>", category: "Inline", behavior: isUr ? "Hyperlink anchor tag" : "Inline hyperlink anchor" },
    { tag: "<img>", category: "Inline-Block", behavior: isUr ? "Inline element lekin custom width/height support karta hai" : "Inline element that supports width/height" },
    { tag: "<strong> / <b>", category: "Inline", behavior: isUr ? "Text bold highlighting" : "Inline text weight styling" },
    { tag: "<em> / <i>", category: "Inline", behavior: isUr ? "Text italic highlighting" : "Inline text style emphasis" },
  ];

  const tocItems = {
    en: [
      { id: "block-elements", label: "1. Block-Level Elements" },
      { id: "inline-elements", label: "2. Inline Elements" },
      { id: "div-vs-span", label: "3. <div> vs <span>" },
      { id: "master-list", label: "4. Tag Reference List" },
      { id: "nesting-rules", label: "5. Golden Nesting Rules" },
    ],
    ur: [
      { id: "block-elements", label: "1. Block-Level Elements" },
      { id: "inline-elements", label: "2. Inline Elements" },
      { id: "div-vs-span", label: "3. <div> vs <span>" },
      { id: "master-list", label: "4. Tag Reference List" },
      { id: "nesting-rules", label: "5. Nesting Rules" },
    ],
  };

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none text-justify">
      {/* Header */}
      <h1 className="text-4xl font-bold text-text-primary mb-3">{t.title}</h1>
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">{t.intro}</p>

      <hr className="border-border mb-8" />

      {/* SECTION 1: Block Level Elements */}
      <section className="mb-12" id="block-elements">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Box size={24} className="text-primary-500" />
          {t.blockTitle}
        </h2>

        {/* Real life analogy banner */}
        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary font-medium">📦 <strong>Real Life Example:</strong> {t.blockAnalogy}</p>
        </div>

        <p className="text-text-secondary leading-relaxed mb-3 font-semibold">{t.blockRules}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.blockRule1 }} />
          <li dangerouslySetInnerHTML={{ __html: t.blockRule2 }} />
          <li dangerouslySetInnerHTML={{ __html: t.blockRule3 }} />
        </ul>

        {/* Interactive Visual Simulation for Block */}
        <div className="bg-bg-card border border-border p-4 rounded-lg mb-4">
          <p className="text-xs text-text-secondary font-mono mb-3">⚡ Visualizing Block behavior (100% width boxes stacking vertically):</p>
          <div className="space-y-2">
            <div className="bg-red-500/20 border-2 border-red-500 text-red-600 dark:text-red-300 p-2 text-xs font-mono rounded text-center">
              &lt;div&gt; Box 1 — Takes 100% width &lt;/div&gt;
            </div>
            <div className="bg-red-500/20 border-2 border-red-500 text-red-600 dark:text-red-300 p-2 text-xs font-mono rounded text-center">
              &lt;p&gt; Box 2 — Forced to start on a new line &lt;/p&gt;
            </div>
          </div>
        </div>

        <CodeBlock code={`<div>I am a Block element (div). I take the full width.</div>\n<p>I am another Block element (p). I start on a new line!</p>`} />
      </section>

      {/* SECTION 2: Inline Elements */}
      <section className="mb-12" id="inline-elements">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Tag size={22} className="text-primary-500" />
          {t.inlineTitle}
        </h2>

        <div className="bg-success-500/10 border border-success-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary font-medium">🏷️ <strong>Real Life Example:</strong> {t.inlineAnalogy}</p>
        </div>

        <p className="text-text-secondary leading-relaxed mb-3 font-semibold">{t.inlineRules}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.inlineRule1 }} />
          <li dangerouslySetInnerHTML={{ __html: t.inlineRule2 }} />
          <li dangerouslySetInnerHTML={{ __html: t.inlineRule3 }} />
        </ul>

        {/* Interactive Visual Simulation for Inline */}
        <div className="bg-bg-card border border-border p-4 rounded-lg mb-4">
          <p className="text-xs text-text-secondary font-mono mb-3">⚡ Visualizing Inline behavior (Sitting side-by-side on the same line):</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-emerald-500/20 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-300 p-2 text-xs font-mono rounded">
              &lt;span&gt; Item 1 &lt;/span&gt;
            </span>
            <span className="bg-emerald-500/20 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-300 p-2 text-xs font-mono rounded">
              &lt;a&gt; Link Item 2 &lt;/a&gt;
            </span>
            <span className="bg-emerald-500/20 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-300 p-2 text-xs font-mono rounded">
              &lt;strong&gt; Item 3 &lt;/strong&gt;
            </span>
          </div>
        </div>

        <CodeBlock code={`<span>Inline 1</span>\n<a href="#">Inline 2 (Link)</a>\n<strong>Inline 3</strong>`} />
      </section>

      {/* SECTION 3: Div vs Span Containers */}
      <section className="mb-12" id="div-vs-span">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <LayoutGrid size={22} className="text-primary-500" />
          {t.containersTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">{t.containersIntro}</p>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div className="bg-bg-card border border-border p-5 rounded-lg">
            <h3 className="font-mono text-lg font-bold text-primary-500 mb-2">&lt;div&gt; Container</h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.divDesc }} />
            <CodeBlock code={`<div className="card">\n  <h2>Title</h2>\n  <p>Card text inside a div.</p>\n</div>`} />
          </div>

          <div className="bg-bg-card border border-border p-5 rounded-lg">
            <h3 className="font-mono text-lg font-bold text-primary-500 mb-2">&lt;span&gt; Target</h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.spanDesc }} />
            <CodeBlock code={`<p>\n  Welcome to <span style="color:red">HTML</span> World!\n</p>`} />
          </div>
        </div>
      </section>

      {/* SECTION 4: Master Reference List Table */}
      <section className="mb-12" id="master-list">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Table size={22} className="text-primary-500" />
          {t.listTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-5">{t.listIntro}</p>

        <div className="overflow-x-auto border border-border rounded-lg shadow-sm mb-6">
          <table className="w-full text-left border-collapse bg-bg-card text-sm">
            <thead>
              <tr className="bg-bg-sidebar border-b border-border">
                <th className="p-3.5 font-semibold text-text-primary">{t.colTag}</th>
                <th className="p-3.5 font-semibold text-text-primary">{t.colCategory}</th>
                <th className="p-3.5 font-semibold text-text-primary">{t.colBehavior}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-secondary">
              {masterTagList.map((row, idx) => (
                <tr key={idx} className="hover:bg-bg-sidebar/30 transition-colors">
                  <td className="p-3.5 font-mono font-bold text-primary-600 dark:text-primary-400">{row.tag}</td>
                  <td className="p-3.5">
                    <span className={`text-xs px-2.5 py-1 rounded-md font-medium ${row.category === 'Block-Level' ? 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'}`}>
                      {row.category}
                    </span>
                  </td>
                  <td className="p-3.5">{row.behavior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: Golden Nesting Rules */}
      <section className="mb-12" id="nesting-rules">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ClipboardCheck size={22} className="text-primary-500" />
          {t.bestTitle}
        </h2>
        <ul className="space-y-4 text-text-secondary leading-relaxed bg-bg-sidebar/30 p-5 rounded-xl border border-border">
          {[t.best1, t.best2, t.best3].map((ruleItem, idx) => (
            <li key={idx} className="flex gap-2 text-sm">
              <span className="text-primary-500 font-bold">•</span>
              <span dangerouslySetInnerHTML={{ __html: ruleItem }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Next Chapter Hook */}
      <section className="mb-10 bg-bg-card border-2 border-dashed border-border p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-text-primary mb-2">{t.nextTitle}</h3>
        <p className="text-text-secondary leading-relaxed text-sm">{t.nextText}</p>
      </section>

      <hr className="border-border mb-8" />

      {/* Router Links */}
      <NavigationButtons 
        prevPath="/notes/paragraph-and-other-formattings" 
        prevLabel="Paragraphs & Formatting" 
        nextPath="/notes/html-lists" 
        nextLabel="Lists In HTML (UL & OL)" 
      />
    </article>
  );
}