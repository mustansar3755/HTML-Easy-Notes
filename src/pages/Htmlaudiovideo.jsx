/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Volume2, Video, Layers, MessageSquareText, ClipboardCheck } from "lucide-react";

// Components
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

import { content } from "../data/HtmlAudioVideoData.js";

export default function HtmlAudioVideo() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  const tocItems = {
    en: [
      { id: "audio-element", label: "1. Audio Element (<audio>)" },
      { id: "video-element", label: "2. Video Element (<video>)" },
      { id: "source-tag", label: "3. The <source> Tag" },
      { id: "track-captions", label: "4. Captions (<track>)" },
      { id: "best-practices", label: "5. Golden Rules" },
    ],
    ur: [
      { id: "audio-element", label: "1. Audio Element (<audio>)" },
      { id: "video-element", label: "2. Video Element (<video>)" },
      { id: "source-tag", label: "3. <source> Tag" },
      { id: "track-captions", label: "4. Captions (<track>)" },
      { id: "best-practices", label: "5. Sunehray Asool" },
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

      {/* SECTION 1: Audio Element */}
      <section className="mb-12" id="audio-element">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Volume2 size={24} className="text-primary-500" />
          {t.audioTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.audioIntro }} />

        {/* Real life analogy */}
        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.audioAnalogy }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.audioAttributesTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.audioAttrControls }} />
          <li dangerouslySetInnerHTML={{ __html: t.audioAttrAutoplay }} />
          <li dangerouslySetInnerHTML={{ __html: t.audioAttrLoop }} />
          <li dangerouslySetInnerHTML={{ __html: t.audioAttrMuted }} />
          <li dangerouslySetInnerHTML={{ __html: t.audioAttrPreload }} />
        </ul>

        <CodeBlock code={`<!-- Basic Audio Player -->\n<audio controls>\n  <source src="podcast-episode.mp3" type="audio/mpeg">\n  Your browser does not support the audio element.\n</audio>\n\n<!-- Muted Autoplay Background Audio -->\n<audio autoplay muted loop>\n  <source src="background-music.mp3" type="audio/mpeg">\n</audio>`} />
      </section>

      {/* SECTION 2: Video Element */}
      <section className="mb-12" id="video-element">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Video size={24} className="text-primary-500" />
          {t.videoTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.videoIntro }} />

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.videoAnalogy }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.videoAttributesTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.videoAttrPoster }} />
          <li dangerouslySetInnerHTML={{ __html: t.videoAttrWidthHeight }} />
          <li dangerouslySetInnerHTML={{ __html: t.videoAttrPlaysinline }} />
        </ul>

        <div className="bg-info-500/10 border border-info-500/30 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.videoAttrBgNote }} />
        </div>

        <CodeBlock code={`<!-- Standard Video Player -->\n<video controls width="640" height="360" poster="thumbnail.jpg">\n  <source src="tutorial.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>\n\n<!-- Background Hero Video -->\n<video autoplay muted loop playsinline>\n  <source src="hero-bg.mp4" type="video/mp4">\n</video>`} />
      </section>

      {/* SECTION 3: Source Tag */}
      <section className="mb-12" id="source-tag">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Layers size={24} className="text-primary-500" />
          {t.sourceTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.sourceIntro }} />

        <div className="bg-warning-500/10 border border-warning-500/30 p-4 rounded-lg mb-4">
          <p className="text-sm text-text-primary font-medium" dangerouslySetInnerHTML={{ __html: t.sourceRule }} />
        </div>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.sourceFallbackText }} />

        <CodeBlock code={`<!-- Browser picks the FIRST supported format -->\n<video controls>\n  <source src="movie.webm" type="video/webm">\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.ogg" type="video/ogg">\n  Sorry, your browser doesn't support embedded videos.\n</video>`} />
      </section>

      {/* SECTION 4: Track Element */}
      <section className="mb-12" id="track-captions">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <MessageSquareText size={24} className="text-primary-500" />
          {t.trackTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.trackIntro }} />

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.trackAnalogy }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.trackKindTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.trackKindSubtitles }} />
          <li dangerouslySetInnerHTML={{ __html: t.trackKindCaptions }} />
          <li dangerouslySetInnerHTML={{ __html: t.trackKindDescriptions }} />
          <li dangerouslySetInnerHTML={{ __html: t.trackKindChapters }} />
        </ul>

        <CodeBlock code={`<video controls>\n  <source src="movie.mp4" type="video/mp4">\n  <track \n    src="subtitles-en.vtt" \n    kind="subtitles" \n    srclang="en" \n    label="English">\n  <track \n    src="subtitles-ur.vtt" \n    kind="subtitles" \n    srclang="ur" \n    label="Urdu">\n</video>`} />
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
        prevPath="/notes/hyperlinks-and-anchor-tag"
        prevLabel="HTML Links & Anchors"
        nextPath="/notes/html-iframes"
        nextLabel="HTML iFrames"
      />
    </article>
  );
}