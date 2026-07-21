/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Table, LayoutGrid, Columns, ClipboardCheck } from "lucide-react";

// Components
import CodeBlock from "../components/common/CodeBlock";
import NavigationButtons from "../components/HtmlStructure/NavigationButtons";

import { content } from "../data/HtmlTablesData.js";

export default function HtmlTables() {
  const { language } = useLanguage();
  const { setToc } = useOutletContext();
  const t = content[language];

  const tocItems = {
    en: [
      { id: "table-basics", label: "1. Basic Table Structure" },
      { id: "semantic-tables", label: "2. Semantic Structural Tags" },
      { id: "spanning-cells", label: "3. Colspan & Rowspan" },
      { id: "best-practices", label: "4. Golden Rules & Responsiveness" },
    ],
    ur: [
      { id: "table-basics", label: "1. Table Ka Structure" },
      { id: "semantic-tables", label: "2. Semantic Tags" },
      { id: "spanning-cells", label: "3. Merge Cells (Colspan/Rowspan)" },
      { id: "best-practices", label: "4. Sunehray Asool" },
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

      {/* SECTION 1: Table Basics */}
      <section className="mb-12" id="table-basics">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Table size={24} className="text-primary-500" />
          {t.basicsTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4">{t.basicsIntro}</p>

        <div className="bg-primary-500/10 border border-primary-500/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-text-primary" dangerouslySetInnerHTML={{ __html: t.basicsAnalogy }} />
        </div>

        <p className="text-text-secondary font-semibold mb-3">{t.basicsElementsTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.elemTable }} />
          <li dangerouslySetInnerHTML={{ __html: t.elemTr }} />
          <li dangerouslySetInnerHTML={{ __html: t.elemTh }} />
          <li dangerouslySetInnerHTML={{ __html: t.elemTd }} />
        </ul>

        {/* Live Preview Demo Table */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wider text-text-secondary font-bold mb-2">Visual Output Preview:</p>
          <div className="overflow-x-auto rounded-xl border border-border p-4 bg-bg-card">
            <table className="w-full text-left border-collapse text-sm">
              <caption><strong>Student Marks Summary</strong></caption>
              <thead>
                <tr className="border-b border-border bg-bg-sidebar">
                  <th className="p-2 border border-border">Name</th>
                  <th className="p-2 border border-border">Course</th>
                  <th className="p-2 border border-border">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-border">Ali Khan</td>
                  <td className="p-2 border border-border">HTML & CSS</td>
                  <td className="p-2 border border-border">92%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-border">Sara Ahmed</td>
                  <td className="p-2 border border-border">JavaScript</td>
                  <td className="p-2 border border-border">88%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <CodeBlock code={`<!-- Basic HTML Table -->\n<table>\n  <caption>Student Marks Summary</caption>\n  <tr>\n    <th>Name</th>\n    <th>Course</th>\n    <th>Score</th>\n  </tr>\n  <tr>\n    <td>Ali Khan</td>\n    <td>HTML & CSS</td>\n    <td>92%</td>\n  </tr>\n  <tr>\n    <td>Sara Ahmed</td>\n    <td>JavaScript</td>\n    <td>88%</td>\n  </tr>\n</table>`} />
      </section>

      {/* SECTION 2: Semantic Tables */}
      <section className="mb-12" id="semantic-tables">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <LayoutGrid size={24} className="text-primary-500" />
          {t.semanticTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4">{t.semanticIntro}</p>

        <p className="text-text-secondary font-semibold mb-3">{t.semanticListTitle}</p>
        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.semThead }} />
          <li dangerouslySetInnerHTML={{ __html: t.semTbody }} />
          <li dangerouslySetInnerHTML={{ __html: t.semTfoot }} />
        </ul>

        <CodeBlock code={`<!-- Full Semantic Table Structure -->\n<table>\n  <caption>Monthly Expenditure</caption>\n  <thead>\n    <tr>\n      <th scope="col">Item</th>\n      <th scope="col">Category</th>\n      <th scope="col">Cost ($)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Domain Renewal</td>\n      <td>Hosting</td>\n      <td>15.00</td>\n    </tr>\n    <tr>\n      <td>VPS Server</td>\n      <td>Infrastructure</td>\n      <td>40.00</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="2"><strong>Total Expense</strong></td>\n      <td><strong>55.00</strong></td>\n    </tr>\n  </tfoot>\n</table>`} />
      </section>

      {/* SECTION 3: Spanning Cells */}
      <section className="mb-12" id="spanning-cells">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Columns size={24} className="text-primary-500" />
          {t.spanningTitle}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.spanningIntro }} />

        <ul className="space-y-2 text-text-secondary text-sm mb-6 list-disc pl-5">
          <li dangerouslySetInnerHTML={{ __html: t.colspanDesc }} />
          <li dangerouslySetInnerHTML={{ __html: t.rowspanDesc }} />
        </ul>

        <CodeBlock code={`<!-- Merging Cells Example -->\n<table>\n  <tr>\n    <th>Name</th>\n    <th colspan="2">Contact Numbers</th> <!-- Spans across 2 columns -->\n  </tr>\n  <tr>\n    <td>Usman</td>\n    <td>0300-1234567</td>\n    <td>0321-7654321</td>\n  </tr>\n  <tr>\n    <td rowspan="2">Office Location</td> <!-- Spans across 2 rows -->\n    <td colspan="2">Building 4, Floor 2</td>\n  </tr>\n  <tr>\n    <td colspan="2">Main Boulevard, Lahore</td>\n  </tr>\n</table>`} />
      </section>

      {/* SECTION 4: Best Practices */}
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
        prevPath="/notes/html-forms-and-inputs"
        prevLabel="HTML Forms & Inputs"
        nextPath="/notes/html-semantic-elements"
        nextLabel="HTML Semantic Elements"
      />
    </article>
  );
}