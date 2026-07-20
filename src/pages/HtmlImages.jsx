/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Image, Eye, Maximize2, FileType, Zap, Smartphone, CheckCircle } from "lucide-react";

// Components
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

// Data Import
import { content } from "../data/HtmlImagesData.js";

export default function HtmlImages() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  const tocItems = {
    en: [
      { id: "img-anatomy", label: "1. <img> Tag Anatomy" },
      { id: "alt-text", label: "2. Alt Text & Accessibility" },
      { id: "dimensions", label: "3. Width, Height & CLS" },
      { id: "image-formats", label: "4. Image Formats" },
      { id: "lazy-loading", label: "5. Performance & Lazy Loading" },
      { id: "responsive-images", label: "6. Responsive Images" },
      { id: "best-practices", label: "7. Golden Rules" },
    ],
    ur: [
      { id: "img-anatomy", label: "1. <img> Tag Ki Anatomy" },
      { id: "alt-text", label: "2. Alt Text Aur Accessibility" },
      { id: "dimensions", label: "3. Size, Dimensions Aur CLS" },
      { id: "image-formats", label: "4. Sahi Format Ka Intikhab" },
      { id: "lazy-loading", label: "5. Lazy Loading Aur Speed" },
      { id: "responsive-images", label: "6. Responsive Images" },
      { id: "best-practices", label: "7. Sakht Asool Aur Guidance" },
    ],
  };

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none text-justify space-y-10">
      {/* Header Container (Cyan Theme) */}
      <div className="bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/40 p-6 rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-950 dark:text-cyan-200 mb-3">{t.title}</h1>
        <p className="text-cyan-900/80 dark:text-cyan-300/80 text-lg leading-relaxed">{t.intro}</p>
      </div>

      {/* SECTION 1: img Anatomy (Blue Theme) */}
      <section className="bg-blue-50/30 dark:bg-blue-950/10 border border-blue-200/80 dark:border-blue-900/40 p-6 rounded-lg shadow-sm" id="img-anatomy">
        <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2 border-b border-blue-200 dark:border-blue-800/40 pb-3">
          <Image size={24} className="text-blue-600 dark:text-blue-400" />
          {t.imgTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.imgIntro }} />
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.imgSrcDesc }} />

        {/* Real life analogy */}
        <div className="bg-blue-100/60 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
          <p className="text-sm text-blue-950 dark:text-blue-200 font-medium" dangerouslySetInnerHTML={{ __html: t.imgAnalogy }} />
        </div>

        <CodeBlock code={`<!-- Basic HTML Image Tag -->\n<img src="landscape.jpg" alt="A beautiful mountain landscape at sunset">`} />
      </section>

      {/* SECTION 2: Alt Text & Accessibility (Rose/Amber Security & Accessibility Theme) */}
      <section className="bg-rose-50/30 dark:bg-rose-950/10 border border-rose-200/80 dark:border-rose-900/40 p-6 rounded-lg shadow-sm" id="alt-text">
        <h2 className="text-2xl font-semibold text-rose-900 dark:text-rose-300 mb-4 flex items-center gap-2 border-b border-rose-200 dark:border-rose-800/40 pb-3">
          <Eye size={24} className="text-rose-600 dark:text-rose-400" />
          {t.altTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.altIntro }} />

        <ul className="space-y-3 text-text-secondary text-sm mb-6">
          <li className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-rose-200 dark:border-rose-800/40" dangerouslySetInnerHTML={{ __html: t.altReason1 }} />
          <li className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-rose-200 dark:border-rose-800/40" dangerouslySetInnerHTML={{ __html: t.altReason2 }} />
          <li className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-rose-200 dark:border-rose-800/40" dangerouslySetInnerHTML={{ __html: t.altReason3 }} />
        </ul>

        <CodeBlock code={`<!-- Good vs Bad Alt Text -->\n<!-- BAD: Vague or missing -->\n<img src="dog.jpg" alt="photo">\n\n<!-- GOOD: Descriptive -->\n<img src="dog.jpg" alt="Golden Retriever puppy playing with a red ball on green grass">`} />
      </section>

      {/* SECTION 3: Dimensions & Aspect Ratio (Purple Theme) */}
      <section className="bg-purple-50/30 dark:bg-purple-950/10 border border-purple-200/80 dark:border-purple-900/40 p-6 rounded-lg shadow-sm" id="dimensions">
        <h2 className="text-2xl font-semibold text-purple-900 dark:text-purple-300 mb-4 flex items-center gap-2 border-b border-purple-200 dark:border-purple-800/40 pb-3">
          <Maximize2 size={24} className="text-purple-600 dark:text-purple-400" />
          {t.sizeTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.sizeIntro }} />

        <div className="bg-purple-100/60 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/50 p-4 rounded-lg mb-6">
          <p className="text-sm text-purple-950 dark:text-purple-200 font-medium" dangerouslySetInnerHTML={{ __html: t.sizeRule }} />
        </div>

        <CodeBlock code={`<!-- Specifying HTML Dimensions to Prevent Layout Shift -->\n<img \n  src="banner.jpg" \n  alt="Company Banner" \n  width="800" \n  height="400"\n>`} />
      </section>

      {/* SECTION 4: Image Formats (Emerald Theme) */}
      <section className="bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-200/80 dark:border-emerald-900/40 p-6 rounded-lg shadow-sm" id="image-formats">
        <h2 className="text-2xl font-semibold text-emerald-900 dark:text-emerald-300 mb-4 flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-800/40 pb-3">
          <FileType size={24} className="text-emerald-600 dark:text-emerald-400" />
          {t.formatsTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.formatsIntro }} />

        <div className="grid sm:grid-cols-2 gap-3 text-sm text-text-secondary mb-6">
          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/40 shadow-xs" dangerouslySetInnerHTML={{ __html: t.fmtJpeg }} />
          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/40 shadow-xs" dangerouslySetInnerHTML={{ __html: t.fmtPng }} />
          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/40 shadow-xs" dangerouslySetInnerHTML={{ __html: t.fmtSvg }} />
          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/40 shadow-xs" dangerouslySetInnerHTML={{ __html: t.fmtWebp }} />
        </div>
      </section>

      {/* SECTION 5: Lazy Loading (Amber Theme) */}
      <section className="bg-amber-50/30 dark:bg-amber-950/10 border border-amber-200/80 dark:border-amber-900/40 p-6 rounded-lg shadow-sm" id="lazy-loading">
        <h2 className="text-2xl font-semibold text-amber-900 dark:text-amber-300 mb-4 flex items-center gap-2 border-b border-amber-200 dark:border-amber-800/40 pb-3">
          <Zap size={24} className="text-amber-600 dark:text-amber-400" />
          {t.loadingTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.loadingIntro }} />

        <CodeBlock code={`<!-- Native Browser Lazy Loading -->\n<img \n  src="large-photo.jpg" \n  alt="Historical place" \n  loading="lazy"\n>`} />
      </section>

      {/* SECTION 6: Responsive Images (Indigo Theme) */}
      <section className="bg-indigo-50/30 dark:bg-indigo-950/10 border border-indigo-200/80 dark:border-indigo-900/40 p-6 rounded-lg shadow-sm" id="responsive-images">
        <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center gap-2 border-b border-indigo-200 dark:border-indigo-800/40 pb-3">
          <Smartphone size={24} className="text-indigo-600 dark:text-indigo-400" />
          {t.responsiveTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.responsiveIntro }} />

        <CodeBlock code={`<!-- Using <picture> tag for different screen sizes -->\n<picture>\n  <source media="(min-width: 1024px)" srcset="hero-desktop.webp">\n  <source media="(min-width: 640px)" srcset="hero-tablet.webp">\n  <img src="hero-mobile.webp" alt="Hero Banner">\n</picture>`} />
      </section>

      {/* SECTION 7: Best Practices (Teal Golden Rules Theme) */}
      <section className="bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/50 p-6 rounded-lg shadow-sm" id="best-practices">
        <h2 className="text-2xl font-semibold text-teal-950 dark:text-teal-200 mb-4 flex items-center gap-2 border-b border-teal-200 dark:border-teal-800/50 pb-3">
          <CheckCircle size={22} className="text-teal-600 dark:text-teal-400" />
          {t.bestTitle}
        </h2>
        <ul className="space-y-4 text-teal-950 dark:text-teal-100 leading-relaxed bg-white/60 dark:bg-slate-900/60 p-5 rounded-lg border border-teal-100 dark:border-teal-900/40">
          {[t.best1, t.best2, t.best3, t.best4].map((ruleItem, idx) => (
            <li key={idx} className="flex gap-2 text-sm">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span dangerouslySetInnerHTML={{ __html: ruleItem }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Next Chapter Hook */}
      <section className="bg-slate-900 text-white p-6 rounded-lg shadow-md border border-slate-800">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{t.nextTitle}</h3>
        <p className="text-slate-300 leading-relaxed text-sm">{t.nextText}</p>
      </section>

      <hr className="border-border my-8" />

      {/* Router Navigation Links */}
      <NavigationButtons 
        prevPath="/notes/hyperlinks-and-anchor-tag" 
        prevLabel="HTML Links & Anchors" 
        nextPath="/notes/html-audio-video" 
        nextLabel="HTML Audio & Video" 
      />
    </article>
  );
}