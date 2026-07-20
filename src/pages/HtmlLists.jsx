/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { ListFilter, ListOrdered, GitFork, BookOpen, ClipboardCheck } from "lucide-react";

// Components
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

import { content } from "../data/HtmlListsData.js";

export default function HtmlLists() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
//   const isUr = language === "ur";
  const t = content[language];

  const tocItems = {
    en: [
      { id: "unordered-lists", label: "1. Unordered Lists (<ul>)" },
      { id: "ordered-lists", label: "2. Ordered Lists (<ol>)" },
      { id: "nested-lists", label: "3. Nested Lists" },
      { id: "description-lists", label: "4. Description Lists (<dl>)" },
      { id: "best-practices", label: "5. Golden Rules" },
    ],
    ur: [
      { id: "unordered-lists", label: "1. Unordered Lists (<ul>)" },
      { id: "ordered-lists", label: "2. Ordered Lists (<ol>)" },
      { id: "nested-lists", label: "3. Nested Lists" },
      { id: "description-lists", label: "4. Description Lists (<dl>)" },
      { id: "best-practices", label: "5. Sakht Asool" },
    ],
  };

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none text-justify">
      {/* Title */}
      <h1 className="text-4xl font-bold text-text-primary mb-3">{t.title}</h1>
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">{t.intro}</p>

      <hr className="border-border mb-8" />

      {/* SECTION 1: Unordered Lists */}
      <section className="mb-12" id="unordered-lists">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ListFilter size={24} className="text-primary-500" />
          {t.ulTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.ulIntro }} />

        {/* Real life analogy */}
        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.ulAnalogy }} />
        </div>

        {/* Bullet Types list */}
        <p className="text-text-secondary font-medium mb-3" dangerouslySetInnerHTML={{ __html: t.ulTypeAttr }} />
        <div className="grid sm:grid-cols-2 gap-3 mb-6 font-mono text-sm">
          <div className="bg-bg-card p-3 border border-border rounded-lg flex items-center gap-2">
            <span className="text-primary-500">●</span> <span dangerouslySetInnerHTML={{ __html: t.ulTypeDisc }} />
          </div>
          <div className="bg-bg-card p-3 border border-border rounded-lg flex items-center gap-2">
            <span className="text-primary-500">○</span> <span dangerouslySetInnerHTML={{ __html: t.ulTypeCircle }} />
          </div>
          <div className="bg-bg-card p-3 border border-border rounded-lg flex items-center gap-2">
            <span className="text-primary-500">■</span> <span dangerouslySetInnerHTML={{ __html: t.ulTypeSquare }} />
          </div>
          <div className="bg-bg-card p-3 border border-border rounded-lg flex items-center gap-2">
            <span className="text-primary-500">🚫</span> <span dangerouslySetInnerHTML={{ __html: t.ulTypeNone }} />
          </div>
        </div>

        <CodeBlock code={`<!-- Standard Unordered List -->\n<ul>\n  <li>Fresh Milk</li>\n  <li>Organic Eggs</li>\n  <li>Whole Wheat Bread</li>\n</ul>`} />
      </section>

      {/* SECTION 2: Ordered Lists */}
      <section className="mb-12" id="ordered-lists">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ListOrdered size={24} className="text-primary-500" />
          {t.olTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.olIntro }} />

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.olAnalogy }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.olAttributesTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.olAttrType }} />
          <li dangerouslySetInnerHTML={{ __html: t.olAttrStart }} />
          <li dangerouslySetInnerHTML={{ __html: t.olAttrReversed }} />
        </ul>

        {/* Code Example for OL attributes */}
        <CodeBlock code={`<!-- Roman Numerals starting from V (5) -->\n<ol type="I" start="5">\n  <li>Fifth Step: Boil Water</li>\n  <li>Sixth Step: Add Tea Leaves</li>\n</ol>\n\n<!-- Countdown List -->\n<ol reversed>\n  <li>3...</li>\n  <li>2...</li>\n  <li>1... Launch!</li>\n</ol>`} />
      </section>

      {/* SECTION 3: Nested Lists */}
      <section className="mb-12" id="nested-lists">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <GitFork size={24} className="text-primary-500" />
          {t.nestedTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.nestedIntro }} />

        <div className="bg-warning-500/10 border border-warning-500/30 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary font-medium" dangerouslySetInnerHTML={{ __html: t.nestedRule }} />
        </div>

        {/* Nested Code Example */}
        <CodeBlock code={`<ul>\n  <li>Frontend Technologies\n    <!-- Sub-list nested INSIDE parent <li> -->\n    <ul>\n      <li>HTML5</li>\n      <li>CSS3</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n  <li>Backend Technologies\n    <ul>\n      <li>Node.js</li>\n      <li>Python</li>\n    </ul>\n  </li>\n</ul>`} />
      </section>

      {/* SECTION 4: Description Lists */}
      <section className="mb-12" id="description-lists">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <BookOpen size={24} className="text-primary-500" />
          {t.dlTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.dlIntro }} />

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.dlAnalogy }} />
        </div>

        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.dlTagDl }} />
          <li dangerouslySetInnerHTML={{ __html: t.dlTagDt }} />
          <li dangerouslySetInnerHTML={{ __html: t.dlTagDd }} />
        </ul>

        <CodeBlock code={`<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language - The standard structure for web pages.</dd>\n\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets - Language used to style web layouts.</dd>\n</dl>`} />
      </section>

      {/* SECTION 5: Best Practices */}
      <section className="mb-12" id="best-practices">
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

      {/* Router Navigation Links */}
      <NavigationButtons 
        prevPath="/html-block-vs-inline" 
        prevLabel="Block vs Inline" 
        nextPath="/html-links" 
        nextLabel="HTML Links & Anchors" 
      />
    </article>
  );
}