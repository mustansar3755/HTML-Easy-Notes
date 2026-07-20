/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Laptop, Puzzle, ListOrdered, Tv, ClipboardCheck } from "lucide-react";

// Components Imports
// import Callout from "../components/common/Callout";
// import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";
import VSCodeSetup from "../components/Create-first-page/VSCodeSetup"; // Found Now
import Sequence, { Step } from "../components/common/Sequence"; // Found Now

import { content } from "../data/CreateFirstPageData.js";

export default function CreateFirstPage() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const isUr = language === "ur";
  const t = content[language];

  // Your actual Youtube Video link goes here
  //   const myYoutubeVideoLink = "https://youtu.be/MEWUVfNFtAk?si=cqGbrVqGwm2mmYHU";

  const extensionsData = [
    {
      name: "Live Server",
      purpose: isUr
        ? "Code save karte hi browser ko auto-refresh karta hai."
        : "Automatically refreshes the browser window whenever you save code.",
      benefit: "No more manually reloading page",
    },
    {
      name: "Auto Rename Tag",
      purpose: isUr
        ? "Opening tag badalne par closing tag ko khud hi badal deta hai."
        : "Automatically renames the matching closing tag when you modify the opening tag.",
      benefit: "Prevents broken tag errors",
    },
    {
      name: "Prettier - Code formatter",
      purpose: isUr
        ? "Sloppy code ko ek click par clean aur structured banata hai."
        : "Formats your code with strict, beautiful structural alignment on save.",
      benefit: "Clean, professional looking code",
    },
  ];

  const tocItems = {
    en: [
      { id: "video-guide", label: "Video Installation Tutorial" },
      { id: "what-is-ide", label: "Why use VS Code?" },
      { id: "vscode-extensions", label: "Mandatory Extensions" },
      { id: "creation-steps", label: "5 Steps to Create Page" },
      { id: "go-live", label: "Running via Live Server" },
    ],
    ur: [
      { id: "video-guide", label: "Video Installation Guide" },
      { id: "what-is-ide", label: "VS Code Kyun Use Karein?" },
      { id: "vscode-extensions", label: "Zaroori Extensions Table" },
      { id: "creation-steps", label: "Pehla Page Banane Ke Steps" },
      { id: "go-live", label: "Page Ko Live Chalana" },
    ],
  };

  useEffect(() => {
    setToc(tocItems[language]);
    return () => setToc([]);
  }, [language, setToc]);

  return (
    <article className="max-w-none text-justify">
      <h1 className="text-4xl font-bold text-text-primary mb-3">{t.title}</h1>
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">
        {t.intro}
      </p>

      <hr className="border-border mb-8" />

      {/* Section 1: Custom Video Setup Module */}
      <section className="mb-12" id="video-guide">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Tv size={24} className="text-danger-500" />
          {t.videoSectionTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          {t.videoSectionIntro}
        </p>

        {/* Calling Modular VSCodeSetup Component */}
        {/* https://www.youtube.com/watch?v=MEWUVfNFtAk */}
        <VSCodeSetup t={t} embedId="MEWUVfNFtAk" />
      </section>

      {/* Section 2: Editor logic */}
      <section className="mb-12" id="what-is-ide">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Laptop size={22} className="text-primary-500" />
          {t.ideTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed">{t.ideText}</p>
      </section>

      {/* Section 3: Extensions list / table */}
      <section className="mb-12" id="vscode-extensions">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Puzzle size={22} className="text-primary-500" />
          {t.extensionsTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          {t.extensionsIntro}
        </p>

        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-left border-collapse bg-bg-card text-sm">
            <thead>
              <tr className="bg-bg-sidebar border-b border-border">
                <th className="p-3.5 font-semibold text-text-primary">
                  {t.extTableColName}
                </th>
                <th className="p-3.5 font-semibold text-text-primary">
                  {t.extTableColPurpose}
                </th>
                <th className="p-3.5 font-semibold text-text-primary">
                  {t.extTableColBenefit}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-secondary">
              {extensionsData.map((ext, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-bg-sidebar/40 transition-colors"
                >
                  <td className="p-3.5 font-mono font-bold text-primary-600 dark:text-primary-400">
                    {ext.name}
                  </td>
                  <td className="p-3.5 leading-relaxed">{ext.purpose}</td>
                  <td className="p-3.5 text-xs font-semibold text-success-600 dark:text-success-400 bg-success-500/5">
                    {ext.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Process Sequences */}
      <section className="mb-12" id="creation-steps">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ListOrdered size={22} className="text-primary-500" />
          {t.createPageTitle}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          {t.createPageIntro}
        </p>

        {/* Procedural Sequence Timeline Rendering */}
        <Sequence>
          <Step title={t.step1Title} subtitle="Step 1">
            <span dangerouslySetInnerHTML={{ __html: t.step1Desc }} />
          </Step>
          <Step title={t.step2Title} subtitle="Step 2">
            <span dangerouslySetInnerHTML={{ __html: t.step2Desc }} />
          </Step>
          <Step title={t.step3Title} subtitle="Step 3">
            <span dangerouslySetInnerHTML={{ __html: t.step3Desc }} />
          </Step>
          <Step title={t.step4Title} subtitle="Step 4">
            <span dangerouslySetInnerHTML={{ __html: t.step4Desc }} />
          </Step>
          <Step title={t.step5Title} subtitle="Step 5">
            <span dangerouslySetInnerHTML={{ __html: t.step5Desc }} />
          </Step>
        </Sequence>
      </section>

      {/* Section 5: Run Page */}
      <section className="mb-12" id="go-live">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Laptop size={22} className="text-primary-500" />
          {t.runPageTitle}
        </h2>
        <p
          className="text-text-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.runPageIntro }}
        />
      </section>

      {/* Best practices */}
      <section className="mb-12" id="best-practices">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ClipboardCheck size={22} className="text-primary-500" />
          {t.bestTitle}
        </h2>
        <ul className="space-y-4 text-text-secondary leading-relaxed bg-bg-sidebar/30 p-5 rounded-xl border border-border">
          {[t.best1, t.best2, t.best3].map((bestItem, idx) => (
            <li key={idx} className="flex gap-2 text-sm">
              <span className="text-primary-500 font-bold">•</span>
              <span dangerouslySetInnerHTML={{ __html: bestItem }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Next Link Footer info */}
      <section className="mb-10 bg-bg-card border-2 border-dashed border-border p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {t.nextTitle}
        </h3>
        <p className="text-text-secondary leading-relaxed text-sm">
          {t.nextText}
        </p>
      </section>

      <hr className="border-border mb-8" />

      {/* Reusable Nav Block */}
      <NavigationButtons
        prevPath="/notes/intro-to-html-tags-and-elements"
        prevLabel="Introduction To HTML Tags & Elements"
        nextPath="/notes/headings-in-html"
        nextLabel="Headings (H1-H6)"
      />
    </article>
  );
}
