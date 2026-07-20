import {
  FileCode2,
  Box,
  ListTree,
  LayoutTemplate,
  MessageSquareText,
  Rows3,
  ClipboardCheck,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// Components Imports
import Callout from "../components/common/Callout";
import CodeBlock from "../components/common/CodeBlock";
import HeadMetaCards from "../components/HtmlStructure/HeadMetaCards";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

import { content } from "../data/Htmlstructure.js";

const tocItems = {
  en: [
    { id: "what-is-structure", label: "What is Document Structure?" },
    { id: "html-boilerplate", label: "HTML Boilerplate" },
    { id: "doctype", label: "The DOCTYPE Declaration" },
    { id: "html-element", label: "The <html> Element" },
    { id: "head-section", label: "The <head> Section" },
    { id: "body-section", label: "The <body> Section" },
    { id: "comments", label: "HTML Comments" },
    { id: "semantic-layout", label: "Basic Semantic Layout" },
    { id: "full-example", label: "Full Example" },
    { id: "best-practices", label: "Best Practices" },
    { id: "whats-next", label: "What's Next" },
  ],
  ur: [
    { id: "what-is-structure", label: "Document Structure Kya Hai?" },
    { id: "html-boilerplate", label: "HTML Boilerplate" },
    { id: "doctype", label: "DOCTYPE Declaration" },
    { id: "html-element", label: "<html> Element" },
    { id: "head-section", label: "<head> Section" },
    { id: "body-section", label: "<body> Section" },
    { id: "comments", label: "HTML Comments" },
    { id: "semantic-layout", label: "Semantic Layout" },
    { id: "full-example", label: "Poora Example" },
    { id: "best-practices", label: "Best Practices" },
    { id: "whats-next", label: "Aage Kya Hai" },
  ],
};

const boilerplateCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>`;

export default function HtmlDocumentStructure() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-text-primary mb-3">{t.title}</h1>
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">
        {t.intro}
      </p>

      <hr className="border-border mb-8" />

      {/* Section 1: What is Document Structure */}
      <section className="mb-10" id="what-is-structure">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Box size={22} className="text-primary-500" />
          {t.whatIsTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.whatIs1 }} />
        <p className="text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t.whatIs2 }} />
      </section>

      {/* Callout Box */}
      <div className="mb-10">
        <Callout type="info" title={t.calloutTitle}>
          <span dangerouslySetInnerHTML={{ __html: t.calloutText }} />
        </Callout>
      </div>

      {/* NEW UPDATE: HTML Boilerplate Section right after Callout */}
      <section className="mb-10" id="html-boilerplate">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <FileCode2 size={22} className="text-primary-500" />
          {language === "ur" ? "HTML Boilerplate Code" : "Standard HTML Boilerplate"}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          {language === "ur" 
            ? "Kishi bhi HTML document ko shuru karne ke liye yeh bunyadi boilerplate code istemaal hota hai:" 
            : "Every HTML document starts with this standard layout boilerplate structure:"}
        </p>
        <CodeBlock code={boilerplateCode} className="text-text-secondary" />
      </section>

      {/* Section 2: DOCTYPE */}
      <section className="mb-10" id="doctype">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <FileCode2 size={22} className="text-primary-500" />
          {t.doctypeTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.doctypeText1 }} />
        <CodeBlock code="<!DOCTYPE html>" className="text-primary-600 dark:text-primary-400" />
        <p className="text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t.doctypeText2 }} />
      </section>

      {/* Section 3: <html> Element */}
      <section className="mb-10" id="html-element">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ListTree size={22} className="text-primary-500" />
          {t.htmlElTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.htmlElText1 }} />
        <CodeBlock code={`<html lang="en">\n  ...\n</html>`} className="text-text-secondary" />
        <p className="text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t.htmlElText2 }} />
      </section>

      {/* Section 4: <head> Section */}
      <section className="mb-10" id="head-section">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <LayoutTemplate size={22} className="text-primary-500" />
          {t.headTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: t.headIntro }} />
        
        {/* Extracted Card Grid Component */}
        <HeadMetaCards t={t} />

        <p className="text-text-secondary leading-relaxed text-sm italic">{t.headNote}</p>
      </section>

      {/* Section 5: <body> Section */}
      <section className="mb-10" id="body-section">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Rows3 size={22} className="text-primary-500" />
          {t.bodyTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.bodyText1 }} />
        <CodeBlock code={`<body>\n  <h1>Welcome</h1>\n  <p>This is visible content.</p>\n</body>`} className="text-text-secondary" />
        <p className="text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t.bodyText2 }} />
      </section>

      {/* Section 6: Comments */}
      <section className="mb-10" id="comments">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <MessageSquareText size={22} className="text-primary-500" />
          {t.commentsTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">{t.commentsText}</p>
        <CodeBlock code="<!-- This is a comment and will not be shown on the page -->" className="text-text-secondary" />
      </section>

      {/* Section 7: Semantic Layout */}
      <section className="mb-10" id="semantic-layout">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <LayoutTemplate size={22} className="text-primary-500" />
          {t.semanticTitle}
        </h2>
        <CodeBlock code={`<body>\n  <header>Site logo and navigation</header>\n  <nav>Main menu links</nav>\n  <main>\n    <section>Primary content</section>\n  </main>\n  <footer>Copyright and links</footer>\n</body>`} className="text-text-secondary" />
        <p className="text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t.semanticText }} />
      </section>

      {/* Section 8: Full Example */}
      <section className="mb-10" id="full-example">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <FileCode2 size={22} className="text-primary-500" />
          {t.exampleTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">{t.exampleText}</p>
        <CodeBlock code={`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My First Page</title>\n</head>\n<body>\n  <header>\n    <h1>My Website</h1>\n  </header>\n  <main>\n    <p>This is the main content of the page.</p>\n  </main>\n  <footer>\n    <p>&copy; 2026 My Website</p>\n  </footer>\n</body>\n</html>`} className="text-text-secondary" />
      </section>

      {/* Section 9: Best Practices */}
      <section className="mb-10" id="best-practices">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ClipboardCheck size={22} className="text-primary-500" />
          {t.bestTitle}
        </h2>
        <ul className="space-y-3 text-text-secondary leading-relaxed">
          {[t.best1, t.best2, t.best3, t.best4, t.best5].map((bestText, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-primary-500 shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: bestText }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Section 10: What's Next */}
      <section className="mb-10" id="whats-next">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">{t.nextTitle}</h2>
        <p className="text-text-secondary leading-relaxed">{t.nextText}</p>
      </section>

      <hr className="border-border mb-8" />

      {/* Reusable Navigation Buttons with correct hooks */}
      <NavigationButtons 
        prevPath="/notes/introduction" 
        prevLabel="Introduction" 
        nextPath="/notes/tags-and-elements" 
        nextLabel="Tags &amp; Elements" 
      />
    </article>
  );
}