/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Layout, Boxes, Code, Sparkles, CheckCircle2 } from "lucide-react";

// Components
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

import { content } from "../data/HtmlSemanticData.js";

export default function HtmlSemanticElements() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  const tocItems = {
    en: [
      { id: "non-semantic-vs-semantic", label: "1. Non-Semantic vs Semantic" },
      { id: "semantic-tags-list", label: "2. Key Semantic Tags" },
      { id: "semantic-architecture", label: "3. Layout Architecture Code" },
      { id: "benefits", label: "4. SEO & Accessibility Benefits" },
    ],
    ur: [
      { id: "non-semantic-vs-semantic", label: "1. Non-Semantic vs Semantic" },
      { id: "semantic-tags-list", label: "2. Semantic Tags List" },
      { id: "semantic-architecture", label: "3. Layout Architecture" },
      { id: "benefits", label: "4. SEO Aur Faidey" },
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

      {/* SECTION 1: Non-Semantic vs Semantic */}
      <section className="mb-12" id="non-semantic-vs-semantic">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Boxes size={24} className="text-primary-500" />
          {t.vsTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.vsIntro }} />

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.divAnalogy }} />
        </div>

        {/* Visual Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-red-500/30 bg-red-500/5 p-4 rounded-xl">
            <h4 className="text-red-500 font-bold mb-2 text-sm uppercase">❌ Old Non-Semantic Approach</h4>
            <pre className="text-xs font-mono text-text-secondary leading-normal">
{`<div id="header">
  <div id="nav">...</div>
</div>
<div id="main-content">
  <div class="post">...</div>
</div>
<div id="footer">...</div>`}
            </pre>
          </div>

          <div className="border border-emerald-500/30 bg-emerald-500/5 p-4 rounded-xl">
            <h4 className="text-emerald-500 font-bold mb-2 text-sm uppercase">✅ Modern Semantic Approach</h4>
            <pre className="text-xs font-mono text-text-secondary leading-normal">
{`<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
</main>
<footer>...</footer>`}
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 2: Key Semantic Tags */}
      <section className="mb-12" id="semantic-tags-list">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Layout size={24} className="text-primary-500" />
          {t.tagsTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-6">{t.tagsIntro}</p>

        <ul className="space-y-3 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.tagHeader }} />
          <li dangerouslySetInnerHTML={{ __html: t.tagNav }} />
          <li dangerouslySetInnerHTML={{ __html: t.tagMain }} />
          <li dangerouslySetInnerHTML={{ __html: t.tagSection }} />
          <li dangerouslySetInnerHTML={{ __html: t.tagArticle }} />
          <li dangerouslySetInnerHTML={{ __html: t.tagAside }} />
          <li dangerouslySetInnerHTML={{ __html: t.tagFooter }} />
          <li dangerouslySetInnerHTML={{ __html: t.tagFigure }} />
        </ul>
      </section>

      {/* SECTION 3: Semantic Architecture Code */}
      <section className="mb-12" id="semantic-architecture">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Code size={24} className="text-primary-500" />
          {t.archTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4">{t.archIntro}</p>

        <CodeBlock code={`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Semantic Web Page</title>\n</head>\n<body>\n\n  <!-- Top Header & Menu -->\n  <header>\n    <h1>Smart Learning Portal</h1>\n    <nav>\n      <ul>\n        <li><a href="#home">Home</a></li>\n        <li><a href="#courses">Courses</a></li>\n        <li><a href="#contact">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <!-- Main Unique Content Wrapper -->\n  <main>\n    <!-- Section 1: Hero Banner -->\n    <section id="home">\n      <h2>Master Modern Web Development</h2>\n      <p>Learn HTML, CSS, JavaScript, and React with hands-on guides.</p>\n    </section>\n\n    <!-- Section 2: Blog Articles -->\n    <section id="courses">\n      <h2>Latest Articles</h2>\n      \n      <article>\n        <h3>Understanding HTML Forms</h3>\n        <p>Forms allow users to submit inputs and data to backend services...</p>\n      </article>\n\n      <article>\n        <h3>Why Semantic Tags Matter</h3>\n        <p>Semantic tags boost SEO rankings and improve accessibility...</p>\n      </article>\n    </section>\n\n    <!-- Secondary Sidebar -->\n    <aside>\n      <h3>Related Resources</h3>\n      <ul>\n        <li><a href="#">MDN Web Docs</a></li>\n        <li><a href="#">W3C Standards</a></li>\n      </ul>\n    </aside>\n  </main>\n\n  <!-- Page Footer -->\n  <footer>\n    <p>&copy; 2026 Smart Learning Studio. All rights reserved.</p>\n  </footer>\n\n</body>\n</html>`} />
      </section>

      {/* SECTION 4: Benefits */}
      <section className="mb-12" id="benefits">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Sparkles size={24} className="text-primary-500" />
          {t.benefitsTitle}
        </h2>

        <ul className="space-y-4 text-text-secondary leading-relaxed bg-bg-sidebar/30 p-5 rounded-xl border border-border">
          {[t.benefit1, t.benefit2, t.benefit3].map((benefit, idx) => (
            <li key={idx} className="flex gap-2 text-sm">
              <span className="text-primary-500 font-bold">•</span>
              <span dangerouslySetInnerHTML={{ __html: benefit }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Completion Banner */}
      <section className="mb-10 bg-emerald-500/10 border-2 border-emerald-500/30 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle2 size={26} className="text-emerald-500" />
          <h3 className="text-xl font-bold text-text-primary">{t.finishTitle}</h3>
        </div>
        <p className="text-text-secondary leading-relaxed text-sm">{t.finishText}</p>
      </section>

      <hr className="border-border mb-8" />

      {/* Router Navigation Links */}
      <NavigationButtons
        prevPath="/notes/html-tables"
        prevLabel="HTML Tables"
        nextPath="/notes/css-intro"
        nextLabel="CSS Introduction"
      />
    </article>
  );
}