/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Link, ExternalLink, ArrowUpRight, ShieldAlert, Layers, PhoneCall, CheckCircle, Sparkles } from "lucide-react";

// Components
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

// Data Import
import { content } from "../data/HtmlLinksData.js";

export default function HtmlLinks() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  const tocItems = {
    en: [
      { id: "anchor-anatomy", label: "1. Anchor Tag Anatomy" },
      { id: "relative-vs-absolute", label: "2. Relative vs Absolute Paths" },
      { id: "target-attribute", label: "3. Target & Security" },
      { id: "page-anchors", label: "4. Internal Page Jump Anchors" },
      { id: "protocols", label: "5. Email, Phone & Download Protocols" },
      { id: "link-states", label: "6. Interactive Link States" },
      { id: "best-practices", label: "7. Golden Rules" },
    ],
    ur: [
      { id: "anchor-anatomy", label: "1. Anchor Tag Ki Anatomy" },
      { id: "relative-vs-absolute", label: "2. Relative vs Absolute Paths" },
      { id: "target-attribute", label: "3. Target Aur Security" },
      { id: "page-anchors", label: "4. Page Anchors Aur Jump Links" },
      { id: "protocols", label: "5. Email, Call Aur Download Links" },
      { id: "link-states", label: "6. Links Ke Interactive States" },
      { id: "best-practices", label: "7. Sakht Asool Aur Guidance" },
    ],
  };

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none text-justify space-y-10">
      {/* Header Container (Indigo Theme) */}
      <div className="p-6 rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-bold  mb-3">{t.title}</h1>
        <p className=" text-lg leading-relaxed">{t.intro}</p>
      </div>

      {/* SECTION 1: Anchor Anatomy (Blue Theme) */}
      <section className="bg-blue-50/30 dark:bg-blue-950/10 border border-blue-200/80 dark:border-blue-900/40 p-6 rounded-lg shadow-sm" id="anchor-anatomy">
        <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2 border-b border-blue-200 dark:border-blue-800/40 pb-3">
          <Link size={24} className="text-blue-600 dark:text-blue-400" />
          {t.anchorTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.anchorIntro }} />
        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.anchorHrefDesc }} />

        {/* Real life analogy */}
        <div className="bg-blue-100/60 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
          <p className="text-sm text-blue-950 dark:text-blue-200 font-medium" dangerouslySetInnerHTML={{ __html: t.anchorAnalogy }} />
        </div>

        <CodeBlock code={`<!-- Basic Hyperlink Example -->\n<a href="https://www.google.com">Visit Google</a>`} />
      </section>

      {/* SECTION 2: Relative vs Absolute Paths (Emerald Theme) */}
      <section className="bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-200/80 dark:border-emerald-900/40 p-6 rounded-lg shadow-sm" id="relative-vs-absolute">
        <h2 className="text-2xl font-semibold text-emerald-900 dark:text-emerald-300 mb-4 flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-800/40 pb-3">
          <ExternalLink size={24} className="text-emerald-600 dark:text-emerald-400" />
          {t.pathsTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.pathsIntro }} />

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="border p-4 rounded-lg shadow-xs">
            <h3 className="font-bold mb-2">{t.absTitle}</h3>
            <p className="text-text-secondary text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.absDesc }} />
          </div>
          <div className="p-4 border  rounded-lg shadow-xs">
            <h3 className="font-bold  mb-2">{t.relTitle}</h3>
            <p className="text-text-secondary text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.relDesc }} />
          </div>
        </div>

        {/* Path Cheat Sheet Table */}
        <p className="text-emerald-950 dark:text-emerald-300 font-semibold mb-3">{t.pathTableTitle}</p>
        <div className="overflow-x-auto mb-6 rounded-lg border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-emerald-100/70 dark:bg-emerald-900/40 border-b border-emerald-200 dark:border-emerald-800">
                <th className="p-3 font-semibold text-emerald-950 dark:text-emerald-200 border-r border-emerald-200 dark:border-emerald-800">{t.colSyntax}</th>
                <th className="p-3 font-semibold text-emerald-950 dark:text-emerald-200">{t.colMeaning}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100 dark:divide-emerald-800/40 text-text-secondary font-mono bg-white dark:bg-slate-900">
              <tr>
                <td className="p-3 border-r border-emerald-100 dark:border-emerald-800/40 bg-emerald-50/20 dark:bg-emerald-950/20" dangerouslySetInnerHTML={{ __html: t.pathSameDir }} />
                <td className="p-3 font-sans" dangerouslySetInnerHTML={{ __html: t.pathSameDirDesc }} />
              </tr>
              <tr>
                <td className="p-3 border-r border-emerald-100 dark:border-emerald-800/40 bg-emerald-50/20 dark:bg-emerald-950/20" dangerouslySetInnerHTML={{ __html: t.pathSubDir }} />
                <td className="p-3 font-sans" dangerouslySetInnerHTML={{ __html: t.pathSubDirDesc }} />
              </tr>
              <tr>
                <td className="p-3 border-r border-emerald-100 dark:border-emerald-800/40 bg-emerald-50/20 dark:bg-emerald-950/20" dangerouslySetInnerHTML={{ __html: t.pathParentDir }} />
                <td className="p-3 font-sans" dangerouslySetInnerHTML={{ __html: t.pathParentDirDesc }} />
              </tr>
              <tr>
                <td className="p-3 border-r border-emerald-100 dark:border-emerald-800/40 bg-emerald-50/20 dark:bg-emerald-950/20" dangerouslySetInnerHTML={{ __html: t.pathRootDir }} />
                <td className="p-3 font-sans" dangerouslySetInnerHTML={{ __html: t.pathRootDirDesc }} />
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock code={`<!-- Absolute Path (External) -->\n<a href="https://github.com">GitHub Profile</a>\n\n<!-- Relative Path (Internal) -->\n<a href="./pages/about.html">About Us Page</a>\n<a href="../contact.html">Contact Us</a>`} />
      </section>

      {/* SECTION 3: Target Attribute & Security (Rose/Red Theme) */}
      <section className="bg-rose-50/30 dark:bg-rose-950/10 border border-rose-200/80 dark:border-rose-900/40 p-6 rounded-lg shadow-sm" id="target-attribute">
        <h2 className="text-2xl font-semibold text-rose-900 dark:text-rose-300 mb-4 flex items-center gap-2 border-b border-rose-200 dark:border-rose-800/40 pb-3">
          <ArrowUpRight size={24} className="text-rose-600 dark:text-rose-400" />
          {t.targetTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.targetIntro }} />

        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.targetSelf }} />
          <li dangerouslySetInnerHTML={{ __html: t.targetBlank }} />
          <li dangerouslySetInnerHTML={{ __html: t.targetParent }} />
          <li dangerouslySetInnerHTML={{ __html: t.targetTop }} />
        </ul>

        {/* Security Alert Warning */}
        <div className="bg-rose-100/70 dark:bg-rose-900/30 border-l-4 border-rose-500 p-4 rounded-r-lg mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert size={20} className="text-rose-600 dark:text-rose-400" />
            <h3 className="font-bold text-rose-950 dark:text-rose-200 text-sm">{t.securityTitle}</h3>
          </div>
          <p className="text-sm text-rose-900/90 dark:text-rose-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.securityDesc }} />
        </div>

        <CodeBlock code={`<!-- Secure External Link (Always use rel="noopener noreferrer") -->\n<a href="https://example.com" target="_blank" rel="noopener noreferrer">\n  Visit External Site Securely\n</a>`} />
      </section>

      {/* SECTION 4: Internal Page Jump Anchors (Purple Theme) */}
      <section className="border border-gray-500 p-6 rounded-lg shadow-sm" id="page-anchors">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 border-b  pb-3">
          <Layers size={24} className="" />
          {t.pageAnchorsTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.pageAnchorsIntro }} />

        <div className="border border-gray-500 p-4 rounded-lg mb-6">
          <p className="text-sm  font-medium" dangerouslySetInnerHTML={{ __html: t.pageAnchorsHow }} />
        </div>

        <CodeBlock code={`<!-- Jump Link Button -->\n<a href="#pricing-section">Jump To Pricing</a>\n\n<!-- Target Section Anywhere on Page -->\n<section id="pricing-section">\n  <h2>Pricing Plans</h2>\n</section>`} />
      </section>

      {/* SECTION 5: Protocols (Cyan Theme) */}
      <section className="bg-cyan-50/30 dark:bg-cyan-950/10 border border-cyan-200/80 dark:border-cyan-900/40 p-6 rounded-lg shadow-sm" id="protocols">
        <h2 className="text-2xl font-semibold text-cyan-900 dark:text-cyan-300 mb-4 flex items-center gap-2 border-b border-cyan-200 dark:border-cyan-800/40 pb-3">
          <PhoneCall size={24} className="text-cyan-600 dark:text-cyan-400" />
          {t.protocolsTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.protocolsIntro }} />

        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-text-secondary mb-6">
          <li className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-cyan-200 dark:border-cyan-800/40 shadow-xs" dangerouslySetInnerHTML={{ __html: t.protoMail }} />
          <li className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-cyan-200 dark:border-cyan-800/40 shadow-xs" dangerouslySetInnerHTML={{ __html: t.protoTel }} />
          <li className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-cyan-200 dark:border-cyan-800/40 shadow-xs" dangerouslySetInnerHTML={{ __html: t.protoSms }} />
          <li className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-cyan-200 dark:border-cyan-800/40 shadow-xs" dangerouslySetInnerHTML={{ __html: t.protoDownload }} />
        </ul>

        <CodeBlock code={`<!-- Email Protocol -->\n<a href="mailto:support@example.com?subject=Help Needed">Email Support</a>\n\n<!-- Phone Protocol -->\n<a href="tel:+1234567890">Call Us Directly</a>\n\n<!-- Force Download Protocol -->\n<a href="/docs/guide.pdf" download="HTML5_Guide.pdf">Download PDF Guide</a>`} />
      </section>

      {/* SECTION 6: Link States (Amber/Orange Theme) */}
      <section className="bg-amber-50/30 dark:bg-amber-950/10 border border-amber-200/80 dark:border-amber-900/40 p-6 rounded-lg shadow-sm" id="link-states">
        <h2 className="text-2xl font-semibold text-amber-900 dark:text-amber-300 mb-4 flex items-center gap-2 border-b border-amber-200 dark:border-amber-800/40 pb-3">
          <Sparkles size={24} className="text-amber-600 dark:text-amber-400" />
          {t.statesTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.statesIntro }} />

        <div className="grid sm:grid-cols-2 gap-3 mb-6 font-mono text-sm">
          <div className="p-3 border border-amber-100 dark:border-amber-800/50 rounded-lg" dangerouslySetInnerHTML={{ __html: t.stateUnvisited }} />
          <div className="p-3 border border-amber-100 dark:border-amber-800/50 rounded-lg" dangerouslySetInnerHTML={{ __html: t.stateVisited }} />
          <div className="p-3 border border-amber-100 dark:border-amber-800/50 rounded-lg" dangerouslySetInnerHTML={{ __html: t.stateHover }} />
          <div className="p-3 border border-amber-100 dark:border-amber-800/50 rounded-lg" dangerouslySetInnerHTML={{ __html: t.stateActive }} />
        </div>

        <CodeBlock code={`/* CSS Pseudo-Classes Styling Links */\na:link { color: #3b82f6; }\na:visited { color: #8b5cf6; }\na:hover { color: #1d4ed8; text-decoration: underline; }\na:active { color: #ef4444; }`} />
      </section>

      {/* SECTION 7: Best Practices (Teal/Emerald Golden Rules Theme) */}
      <section className="bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/50 p-6 rounded-lg shadow-sm" id="best-practices">
        <h2 className="text-2xl font-semibold text-teal-950 dark:text-teal-200 mb-4 flex items-center gap-2 border-b border-teal-200 dark:border-teal-800/50 pb-3">
          <CheckCircle size={22} className="text-teal-600 dark:text-teal-400" />
          {t.bestTitle}
        </h2>
        <ul className="space-y-4 text-teal-950 dark:text-teal-100 leading-relaxed bg-white/60 dark:bg-slate-900/60 p-5 rounded-xl border border-teal-100 dark:border-teal-900/40">
          {[t.best1, t.best2, t.best3, t.best4].map((ruleItem, idx) => (
            <li key={idx} className="flex gap-2 text-sm">
              <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
              <span dangerouslySetInnerHTML={{ __html: ruleItem }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Next Chapter Hook */}
      <section className="bg-slate-900 text-white p-6 rounded-2xl shadow-md border border-slate-800">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{t.nextTitle}</h3>
        <p className="text-slate-300 leading-relaxed text-sm">{t.nextText}</p>
      </section>

      <hr className="border-border my-8" />

      {/* Router Navigation Links */}
      <NavigationButtons 
        prevPath="/notes/html-lists" 
        prevLabel="HTML Lists" 
        nextPath="/notes/html-images" 
        nextLabel="HTML Images Tag" 
      />
    </article>
  );
}