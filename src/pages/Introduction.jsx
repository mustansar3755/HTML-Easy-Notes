import { Code2, Layers, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Callout from "../components/common/Callout";

import { content } from "../data/intro.js";

// TOC items updated - ab saare sections table of contents mein show honge
const tocItems = {
  en: [
    { id: "what-is-html", label: "What is HTML?" },
    { id: "three-pillars", label: "The Three Pillars" },
    { id: "tag-vs-element", label: "Tag vs Element" },
    { id: "how-browsers-read", label: "How Browsers Read HTML" },
   
    { id: "whats-next", label: "What's Next" },
  ],
  ur: [
    { id: "what-is-html", label: "HTML Kya Hai?" },
    { id: "three-pillars", label: "Web Development ke Pillars" },
    { id: "tag-vs-element", label: "Tag aur Element mein Farq" },
    { id: "how-browsers-read", label: "Browsers Kaise Read Karte Hain" },
  
    { id: "whats-next", label: "Aage Kya Hai" },
  ],
};

export default function Introduction() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]); // page chorte waqt TOC clear
  }, [language, setToc]);

  return (
    <article className="max-w-none">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-text-primary mb-3">{t.title}</h1>
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">
        {t.intro}
      </p>

      <hr className="border-border mb-8" />

      {/* Section 1: What is HTML */}
      <section className="mb-10" id="what-is-html">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Code2 size={22} className="text-primary-500" />
          {t.whatIsTitle}
        </h2>
        <p 
          className="text-text-secondary leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: t.whatIs1 }}
        />
        <p 
          className="text-text-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.whatIs2 }}
        />
      </section>

      {/* Callout Box */}
      <div className="mb-10">
        <Callout type="info" title={t.calloutTitle}>
          <span dangerouslySetInnerHTML={{ __html: t.calloutText }} />
        </Callout>
      </div>

      {/* Section 2: Three Pillars */}
      <section className="mb-10" id="three-pillars">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Layers size={22} className="text-primary-500" />
          {t.threeTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-5">
          {t.threeIntro}
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1.5 text-sm">
              {t.pillar1Title}
            </p>
            <p 
              className="text-text-secondary text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.pillar1Text }}
            />
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1.5 text-sm">
              {t.pillar2Title}
            </p>
            <p 
              className="text-text-secondary text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.pillar2Text }}
            />
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1.5 text-sm">
              {t.pillar3Title}
            </p>
            <p 
              className="text-text-secondary text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.pillar3Text }}
            />
          </div>
        </div>
      </section>

      {/* New Section: Tag vs Element */}
      <section className="mb-10" id="tag-vs-element">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <HelpCircle size={22} className="text-primary-500" />
          {t.conceptTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">{t.conceptIntro}</p>
        <div className="bg-bg-sidebar border border-border rounded-xl p-4 space-y-3">
          <p 
            className="text-text-secondary text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.conceptTag }}
          />
          <p 
            className="text-text-secondary text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.conceptElement }}
          />
        </div>
      </section>

      {/* New Section: How Browsers Read HTML */}
      <section className="mb-10" id="how-browsers-read">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ArrowRight size={22} className="text-primary-500" />
          {t.howBrowserTitle}
        </h2>
        <p 
          className="text-text-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.howBrowserText }}
        />
      </section>

      {/* Section 3: Why Learn HTML */}
      <section className="mb-10" id="why-learn">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          {t.whyTitle}
        </h2>
        <ul className="space-y-3 text-text-secondary leading-relaxed">
          <li className="flex gap-2">
            <span className="text-primary-500 shrink-0">•</span>
            <span dangerouslySetInnerHTML={{ __html: t.why1 }} />
          </li>
          <li className="flex gap-2">
            <span className="text-primary-500 shrink-0">•</span>
            <span dangerouslySetInnerHTML={{ __html: t.why2 }} />
          </li>
          <li className="flex gap-2">
            <span className="text-primary-500 shrink-0">•</span>
            <span dangerouslySetInnerHTML={{ __html: t.why3 }} />
          </li>
          <li className="flex gap-2">
            <span className="text-primary-500 shrink-0">•</span>
            <span dangerouslySetInnerHTML={{ __html: t.why4 }} />
          </li>
          {t.why5 && (
            <li className="flex gap-2">
              <span className="text-primary-500 shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: t.why5 }} />
            </li>
          )}
        </ul>
      </section>

      {/* Section 4: History */}
      <section className="mb-10" id="history">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Sparkles size={22} className="text-primary-500" />
          {t.historyTitle}
        </h2>
        <p 
          className="text-text-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.historyText }}
        />
      </section>

      {/* Section 5: What's Next */}
      <section className="mb-10" id="whats-next">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          {t.nextTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed">{t.nextText}</p>
      </section>

      <hr className="border-border mb-8" />

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        <button className="bg-danger-600 cursor-pointer hover:bg-danger-700 text-white px-6 py-3 rounded-lg font-medium transition-colors opacity-50 cursor-not-allowed" disabled>
          Previous: Introduction
        </button>
        <button className="bg-primary-600 cursor-pointer hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Next: HTML Document Structure
        </button>
      </div>
    </article>
  );
}