/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  FormInput,
  Table,
  ListPlus,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";

// Components
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

import { content } from "../data/HtmlFormsData.js";

export default function HtmlForms() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  const tocItems = {
    en: [
      { id: "form-basics", label: "1. The <form> Container" },
      { id: "input-table", label: "2. Input Types Table" },
      { id: "advanced-controls", label: "3. Textarea, Dropdowns & Labels" },
      { id: "form-validation", label: "4. Native Form Validation" },
      { id: "best-practices", label: "5. Golden Rules" },
    ],
    ur: [
      { id: "form-basics", label: "1. <form> Container" },
      { id: "input-table", label: "2. Inputs List (Table)" },
      { id: "advanced-controls", label: "3. Textarea, Select Aur Labels" },
      { id: "form-validation", label: "4. Form Validation" },
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
      <p className="text-text-secondary text-lg mb-8 leading-relaxed">
        {t.intro}
      </p>

      <hr className="border-border mb-8" />

      {/* SECTION 1: Form Basics */}
      <section className="mb-12" id="form-basics">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <FormInput size={24} className="text-primary-500" />
          {t.formTitle}
        </h2>

        <p
          className="text-text-secondary leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: t.formIntro }}
        />

        {/* Real life analogy */}
        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p
            className="text-sm text-text-primary"
            dangerouslySetInnerHTML={{ __html: t.formAnalogy }}
          />
        </div>

        <p className="text-text-secondary font-semibold mb-3">
          {t.formAttributesTitle}
        </p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.formAttrAction }} />
          <li dangerouslySetInnerHTML={{ __html: t.formAttrMethod }} />
          <li dangerouslySetInnerHTML={{ __html: t.formAttrTarget }} />
        </ul>

        <CodeBlock
          code={`<!-- Standard Form Structure -->\n<form action="/submit-form" method="POST">\n  <!-- Form Controls & Inputs Go Here -->\n</form>`}
        />
      </section>

      {/* SECTION 2: Complete Input Types Table */}
      <section className="mb-12" id="input-table">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Table size={24} className="text-primary-500" />
          {t.tableTitle}
        </h2>

        <p
          className="text-text-secondary leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: t.tableIntro }}
        />

        {/* Input Types Responsive Table */}
        <div className="overflow-x-auto rounded-lg border border-border mb-6">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-700 border-b border-border text-text-primary font-semibold">
                <th className="p-3 w-1/5">{t.tableHeaders.type}</th>
                <th className="p-3 w-2/5">{t.tableHeaders.purpose}</th>
                <th className="p-3 w-2/5">{t.tableHeaders.example}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-secondary">
              {t.inputTypesList.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-bg-card/50 transition-colors"
                >
                  <td className="p-3 font-mono text-primary-500 font-medium">
                    <code>type="{item.type}"</code>
                  </td>
                  <td className="p-3 leading-relaxed">{item.purpose}</td>
                  <td className="p-3 font-mono text-xs text-text-primary">
                    <span className="bg-bg-sidebar px-2 py-1 rounded border border-border inline-block max-w-full overflow-x-auto">
                      {item.example}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: Other Controls */}
      <section className="mb-12" id="advanced-controls">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ListPlus size={24} className="text-primary-500" />
          {t.controlsTitle}
        </h2>

        <p
          className="text-text-secondary leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: t.controlsIntro }}
        />

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p
            className="text-sm text-text-primary"
            dangerouslySetInnerHTML={{ __html: t.controlsAnalogy }}
          />
        </div>

        <p className="text-text-secondary font-semibold mb-3">
          {t.controlsTypesTitle}
        </p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.controlTextarea }} />
          <li dangerouslySetInnerHTML={{ __html: t.controlSelect }} />
          <li dangerouslySetInnerHTML={{ __html: t.controlButton }} />
        </ul>

        <CodeBlock
          code={`<!-- Linked Label and Input -->\n<label for="user-email">Email Address:</label>\n<input type="email" id="user-email" name="email" required />\n\n<!-- Selection Dropdown -->\n<label for="country">Country:</label>\n<select id="country" name="country">\n  <option value="pk">Pakistan</option>\n  <option value="us">United States</option>\n</select>\n\n<!-- Multi-line Text Area -->\n<label for="message">Message:</label>\n<textarea id="message" name="message" rows="4"></textarea>\n\n<!-- Button -->\n<button type="submit">Submit Form</button>`}
        />
      </section>

      {/* SECTION 4: Native Validation */}
      <section className="mb-12" id="form-validation">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <ShieldAlert size={24} className="text-primary-500" />
          {t.validationTitle}
        </h2>

        <p
          className="text-text-secondary leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: t.validationIntro }}
        />

        <div className="bg-warning-500/10 border border-warning-500/30 p-4 rounded-lg mb-4">
          <p
            className="text-sm text-text-primary font-medium"
            dangerouslySetInnerHTML={{ __html: t.validationRule }}
          />
        </div>

        <p className="text-text-secondary font-semibold mb-3">
          {t.validationFlagsTitle}
        </p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.valRequired }} />
          <li dangerouslySetInnerHTML={{ __html: t.valMinMax }} />
          <li dangerouslySetInnerHTML={{ __html: t.valPattern }} />
        </ul>

        <CodeBlock
          code={`<!-- Form with Built-in Validation Attributes -->\n<form action="/register" method="POST">\n  <label for="username">Username (Required, 3-12 characters):</label>\n  <input \n    type="text" \n    id="username" \n    name="username" \n    required \n    minlength="3" \n    maxlength="12" \n  />\n\n  <label for="cnic">CNIC Pattern (e.g. 35201-1234567-1):</label>\n  <input \n    type="text" \n    id="cnic" \n    name="cnic" \n    pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}" \n    placeholder="35201-1234567-1" \n  />\n\n  <button type="submit">Submit</button>\n</form>`}
        />
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
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {t.nextTitle}
        </h3>
        <p className="text-text-secondary leading-relaxed text-sm">
          {t.nextText}
        </p>
      </section>

      <hr className="border-border mb-8" />

      {/* Router Navigation Links */}
      <NavigationButtons
        prevPath="/notes/iframe-in-html"
        prevLabel="HTML iFrames"
        nextPath="/notes/html-table"
        nextLabel="HTML Tables"
      />
    </article>
  );
}
