/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FileCode2, Layers, Sliders, AlertTriangle, ClipboardCheck } from "lucide-react";

// Components Imports
import Callout from "../components/common/Callout";
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";
import ElementVisualDiagram from "../components/Intro-to-HtmlTags/ElementVisualDiagram";
import AttributesTable from "../components/Intro-to-HtmlTags/AttributesTable";

// 1st Rule Complete: Data Imported from outside JS file
import { content } from "../data/HtmlTagsAndElementsData.js";

const tocItems = {
  en: [
    { id: "tags-vs-elements", label: "Tags vs Elements Deep Dive" },
    { id: "element-anatomy", label: "Anatomy of an Element" },
    { id: "empty-elements", label: "Void / Empty Elements" },
    { id: "html-attributes", label: "Power of Attributes" },
    { id: "nested-elements", label: "Nesting Code Standards" },
    { id: "best-practices", label: "Pro Best Practices" },
  ],
  ur: [
    { id: "tags-vs-elements", label: "Tags aur Elements mein Farq" },
    { id: "element-anatomy", label: "Element ki Anatomy" },
    { id: "empty-elements", label: "Empty / Void Elements" },
    { id: "html-attributes", label: "Attributes Kya Hain?" },
    { id: "nested-elements", label: "Nesting Ke Rules" },
    { id: "best-practices", label: "Best Practices" },
  ],
};

export default function HtmlTagsAndElements() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const isUr = language === "ur";
  const t = content[language]; // Loading targeted language data

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none text-justify">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-text-primary mb-3">{t.title}</h1>
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">
        {t.intro}
      </p>

      <hr className="border-border mb-8" />

      {/* Section 1: Tags vs Elements (Deep Explanation) */}
      <section className="mb-12" id="tags-vs-elements">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Layers size={22} className="text-primary-500" />
          {t.tagsVsElementsTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          {t.tagsVsElementsIntro}
        </p>
        
        <div className="space-y-6 bg-bg-card p-5 border border-border rounded-xl mb-6">
          <div>
            <h3 className="text-md font-semibold text-text-primary mb-2 font-mono">
              {t.tagDefinitionTitle}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.tagDefinitionText }} />
          </div>
          <hr className="border-border/50" />
          <div>
            <h3 className="text-md font-semibold text-text-primary mb-2 font-mono">
              {t.elementDefinitionTitle}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.elementDefinitionText }} />
          </div>
        </div>
      </section>

      {/* Section 2: Visual Structure Anatomy */}
      <section className="mb-12" id="element-anatomy">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <FileCode2 size={22} className="text-primary-500" />
          {t.anatomyTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: t.anatomyText1 }} />
        
        {/* Visual Graphic Component */}
        <ElementVisualDiagram language={language} />

        <p className="text-text-secondary leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: t.anatomyText2 }} />
      </section>

      {/* Section 3: Void / Empty Elements */}
      <section className="mb-12" id="empty-elements">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <AlertTriangle size={22} className="text-primary-500" />
          {t.emptyTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          {t.emptyText1}
        </p>
        
        <CodeBlock code={`<!-- Line Break Tag (No closing pair) -->\n<br />\n\n<!-- Horizontal Rule Tag (Creates divider line) -->\n<hr />\n\n<!-- Image Tag (Self-contained) -->\n<img src="avatar.jpg" alt="User Profile" />`} className="text-text-secondary" />
        
        <div className="mt-4 bg-bg-sidebar/40 p-4 border-l-4 border-primary-500 rounded-r-lg">
          <h4 className="font-semibold text-text-primary text-sm mb-1 font-mono">{t.emptyDeepDiveTitle}</h4>
          <p className="text-text-secondary text-sm leading-relaxed">{t.emptyDeepDiveText}</p>
        </div>
      </section>

      {/* Section 4: Attributes with Callouts */}
      <section className="mb-12" id="html-attributes">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Sliders size={22} className="text-primary-500" />
          {t.attributesTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.attributesText1 }} />
        
        <CodeBlock code={`<!-- 'href' is attribute name, the URL inside quotes is its value -->\n<a href="https://www.wikipedia.org">Open Wikipedia</a>`} className="text-text-secondary" />

        <p className="text-text-secondary leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: t.attributesText2 }} />

        <div className="my-6">
          <Callout type="danger" title={t.calloutTitle}>
            <span dangerouslySetInnerHTML={{ __html: t.calloutText }} />
          </Callout>
        </div>

        {/* Dynamic Interactive Table Wrapper */}
        <AttributesTable language={language} />
      </section>

      {/* Section 5: Nesting Rules */}
      <section className="mb-12" id="nested-elements">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Layers size={22} className="text-primary-500" />
          {t.nestingTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          {t.nestingText1}
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          {t.nestingText2}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="border border-success-500/20 bg-success-500/5 p-4 rounded-xl">
            <p className="text-success-600 dark:text-success-400 font-semibold text-xs uppercase tracking-wider mb-2 font-sans">
              {t.correctNestingLabel}
            </p>
            <CodeBlock code={`<div>\n  <p>Text is <strong>bold</strong>.</p>\n</div>`} />
          </div>
          <div className="border border-danger-500/20 bg-danger-500/5 p-4 rounded-xl">
            <p className="text-danger-600 dark:text-danger-400 font-semibold text-xs uppercase tracking-wider mb-2 font-sans">
              {t.incorrectNestingLabel}
            </p>
            <CodeBlock code={`<div>\n  <p>Text is <strong>bold.</p></strong>\n</div>`} />
          </div>
        </div>
      </section>

      {/* Section 6: Best Practices Summary */}
      <section className="mb-12" id="best-practices">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ClipboardCheck size={22} className="text-primary-500" />
          {t.bestTitle}
        </h2>
        <ul className="space-y-4 text-text-secondary leading-relaxed bg-bg-sidebar/30 p-6 rounded-2xl border border-border">
          {[t.best1, t.best2, t.best3, t.best4].map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="bg-primary-500/10 text-primary-500 text-xs w-5 h-5 rounded-full flex items-center justify-center font-mono shrink-0 mt-0.5">
                {index + 1}
              </span>
              <span className="text-sm" dangerouslySetInnerHTML={{ __html: item }} />
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

      {/* Reusable Core Navigation Module with dynamic states */}
      <NavigationButtons 
        prevPath="/notes/html-basic-structure" 
        prevLabel="Doc Structure" 
        nextPath="/notes/create-first-page" 
        nextLabel="Create First Page" 
      />
    </article>
  );
}