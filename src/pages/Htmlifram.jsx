/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Layout,  MapPin, ShieldCheck, ClipboardCheck } from "lucide-react";

// Components
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

import { content } from "../data/Htmlifram.js";
import { FaYoutube } from "react-icons/fa6";

export default function HtmlIframes() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  const tocItems = {
    en: [
      { id: "iframe-basics", label: "1. iFrame Basics" },
      { id: "youtube-embed", label: "2. YouTube Video Embed" },
      { id: "map-embed", label: "3. Google Maps Embed" },
      { id: "security-sandbox", label: "4. Security & Sandbox" },
      { id: "best-practices", label: "5. Golden Rules" },
    ],
    ur: [
      { id: "iframe-basics", label: "1. iFrame Bunyadi Baatein" },
      { id: "youtube-embed", label: "2. YouTube Embed" },
      { id: "map-embed", label: "3. Google Maps Embed" },
      { id: "security-sandbox", label: "4. Security & Sandbox" },
      { id: "best-practices", label: "5. Sunehray Asool" },
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

      {/* SECTION 1: iFrame Basics */}
      <section className="mb-12" id="iframe-basics">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Layout size={24} className="text-primary-500" />
          {t.iframeTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.iframeIntro }} />

        {/* Real life analogy */}
        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.iframeAnalogy }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.iframeAttributesTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.iframeAttrSrc }} />
          <li dangerouslySetInnerHTML={{ __html: t.iframeAttrWidthHeight }} />
          <li dangerouslySetInnerHTML={{ __html: t.iframeAttrTitle }} />
          <li dangerouslySetInnerHTML={{ __html: t.iframeAttrBorder }} />
        </ul>

        <CodeBlock code={`<!-- Basic Webpage iFrame Embed -->\n<iframe \n  src="https://example.com" \n  width="100%" \n  height="400" \n  title="Example Website Preview"\n  style="border: none;">\n</iframe>`} />
      </section>

      {/* SECTION 2: YouTube Video Embed */}
      <section className="mb-12" id="youtube-embed">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <FaYoutube size={24} className="text-primary-500" />
          {t.youtubeTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.youtubeIntro }} />

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.youtubeAnalogy }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.youtubeAttributesTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.youtubeAttrAllow }} />
          <li dangerouslySetInnerHTML={{ __html: t.youtubeAttrAllowFullscreen }} />
        </ul>

        <CodeBlock code={`<!-- Embedded YouTube Video -->\n<iframe \n  width="560" \n  height="315" \n  src="https://www.youtube.com/embed/dQw4w9WgXcQ" \n  title="YouTube video player" \n  style="border: none;" \n  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \n  allowfullscreen>\n</iframe>`} />
      </section>

      {/* SECTION 3: Google Maps Embed */}
      <section className="mb-12" id="map-embed">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <MapPin size={24} className="text-primary-500" />
          {t.mapTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.mapIntro }} />

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.mapAnalogy }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.mapAttributesTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.mapAttrLoading }} />
          <li dangerouslySetInnerHTML={{ __html: t.mapAttrReferrerpolicy }} />
        </ul>

        <CodeBlock code={`<!-- Embedded Google Map -->\n<iframe \n  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.3088280287123!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzAzLjgiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2spk!4v1600000000000!5m2!1sen!2spk" \n  width="100%" \n  height="450" \n  style="border:0;" \n  allowfullscreen="" \n  loading="lazy" \n  title="Google Map Location"\n  referrerpolicy="no-referrer-when-downgrade">\n</iframe>`} />
      </section>

      {/* SECTION 4: Security & Sandbox */}
      <section className="mb-12" id="security-sandbox">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ShieldCheck size={24} className="text-primary-500" />
          {t.securityTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.securityIntro }} />

        <div className="bg-warning-500/10 border border-warning-500/30 p-4 rounded-lg mb-4">
          <p className="text-sm text-text-primary font-medium" dangerouslySetInnerHTML={{ __html: t.securityRule }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.securityFlagsTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.securityAllowScripts }} />
          <li dangerouslySetInnerHTML={{ __html: t.securityAllowForms }} />
          <li dangerouslySetInnerHTML={{ __html: t.securityAllowSameOrigin }} />
        </ul>

        <CodeBlock code={`<!-- Strict Security (No scripts/forms allowed) -->\n<iframe src="untrusted-page.html" sandbox title="Secured Untrusted Page"></iframe>\n\n<!-- Restricted Permissions (Scripts enabled, but no popups or top navigation) -->\n<iframe \n  src="external-widget.html" \n  sandbox="allow-scripts allow-forms" \n  title="Restricted Widget">\n</iframe>`} />
      </section>

      {/* SECTION 5: Best Practices */}
      <section className="mb-12" id="best-practices">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ClipboardCheck size={22} className="text-primary-500" />
          {t.bestTitle}
        </h2>
        <ul className="space-y-4 text-text-secondary leading-relaxed bg-bg-sidebar/30 p-5 rounded-xl border border-border">
          {[t.best1, t.best2, t.best3, t.best4].map((ruleItem, idx) => (
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
        prevPath="/notes/html-audio-video"
        prevLabel="HTML Audio & Video"
        nextPath="/notes/html-forms"
        nextLabel="HTML Forms & Inputs"
      />
    </article>
  );
}