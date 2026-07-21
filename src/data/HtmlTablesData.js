export const content = {
  en: {
    title: "HTML Tables: Organizing Structured Data",
    intro:
      "Tables are essential for displaying structured, multi-dimensional data such as pricing plans, schedules, financial reports, and comparison lists.",

    // Section 1: Table Basics
    basicsTitle: "1. Basic Table Anatomy",
    basicsIntro:
      "An HTML table is constructed using a combination of parent and child tags that define rows, headers, and data cells.",
    basicsAnalogy:
      "📊 <strong>Grid Structure:</strong> Think of a table as a spreadsheet. <code>&lt;tr&gt;</code> creates horizontal rows, while <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> define the vertical grid cells inside those rows.",
    basicsElementsTitle: "Core Table Elements:",
    elemTable:
      "<strong><table>:</strong> The main wrapper element that encapsulates all table content.",
    elemTr:
      "<strong><tr> (Table Row):</strong> Defines a horizontal container for data or header cells.",
    elemTh:
      "<strong><th> (Table Header):</strong> Represents header cells. Text is centered and bold by default with built-in accessibility context.",
    elemTd:
      "<strong><td> (Table Data):</strong> Represents standard data cells containing text, images, or links.",

    // Section 2: Semantic Tables
    semanticTitle: "2. Semantic Table Structure (thead, tbody, tfoot)",
    semanticIntro:
      "Grouping table rows using semantic elements improves accessibility for screen readers and allows CSS/browsers to handle scrolling and printing efficiently.",
    semanticListTitle: "Semantic Wrappers:",
    semThead:
      "<strong><thead>:</strong> Groups header content at the top of the table.",
    semTbody:
      "<strong><tbody>:</strong> Encloses the main body of data rows.",
    semTfoot:
      "<strong><tfoot>:</strong> Contains summary or calculation rows (e.g., Totals, Averages) at the bottom.",

    // Section 3: Spanning Rows & Columns
    spanningTitle: "3. Merging Cells (colspan & rowspan)",
    spanningIntro:
      "Attributes <code>colspan</code> and <code>rowspan</code> allow a single cell to stretch across multiple columns or rows.",
    colspanDesc:
      "<strong>colspan:</strong> Expands a cell horizontally across multiple columns.",
    rowspanDesc:
      "<strong>rowspan:</strong> Expands a cell vertically across multiple rows.",

    // Section 4: Best Practices & Responsive Tables
    bestTitle: "Golden Rules for HTML Tables",
    best1:
      "<strong>Use Tables Only for Data:</strong> Never use tables for overall web page layout or positioning. Use CSS Flexbox/Grid instead.",
    best2:
      "<strong>Always Add a <caption>:</strong> The <code>&lt;caption&gt;</code> element provides a clear title for screen reader users and search engines.",
    best3:
      "<strong>Use scope Attribute on <th>:</strong> Specify <code>scope=\"col\"</code> or <code>scope=\"row\"</code> to help assistive technologies associate headers with data.",
    best4:
      "<strong>Make Tables Responsive:</strong> Wrap tables in a container with <code>overflow-x: auto</code> so they scroll horizontally on small mobile screens without breaking the layout.",

    nextTitle: "What's Next?",
    nextText:
      "Great progress! You now master HTML Tables. Next, we will cover HTML Semantic Elements — building structured, SEO-friendly web page layouts!",
  },

  ur: {
    title: "HTML Tables: Data Ko Structure Karna",
    intro:
      "Tables structured aur multi-dimensional data ko dikhane ke liye zaroori hain — jese pricing plans, timetables, financial reports, aur comparison lists.",

    // Section 1: Table Basics
    basicsTitle: "1. Table Ka Bunyadi Structure",
    basicsIntro:
      "HTML table parent aur child tags ke combination se banta hai jo rows, headers, aur data cells define karte hain.",
    basicsAnalogy:
      "📊 <strong>Excel Sheet Ki Tarah:</strong> Table ko aik spreadsheet samjhein. <code>&lt;tr&gt;</code> horizontal row banata hai, jabke <code>&lt;th&gt;</code> aur <code>&lt;td&gt;</code> us row ke andar cells banate hain.",
    basicsElementsTitle: "Ahem Table Tags:",
    elemTable:
      "<strong><table>:</strong> Main parent tag jo pure table ko contain karta hai.",
    elemTr:
      "<strong><tr> (Table Row):</strong> Ek horizontal line/row banata hai.",
    elemTh:
      "<strong><th> (Table Header):</strong> Headings ke liye istemal hota hai (text bold aur center hota hai).",
    elemTd:
      "<strong><td> (Table Data):</strong> Aam data content (text, numbers, links) ke liye use hota hai.",

    // Section 2: Semantic Tables
    semanticTitle: "2. Semantic Table Structure (thead, tbody, tfoot)",
    semanticIntro:
      "Rows ko semantic tags mein group karne se screen readers aur SEO ke liye table ko samajhna aasan ho jata hai.",
    semanticListTitle: "Semantic Groups:",
    semThead:
      "<strong><thead>:</strong> Top headings ko group karta hai.",
    semTbody:
      "<strong><tbody>:</strong> Main data rows ko aik jagah rakhta hai.",
    semTfoot:
      "<strong><tfoot>:</strong> Table ke aakhir mein summary ya total dikhane ke liye istemal hota hai.",

    // Section 3: Spanning Rows & Columns
    spanningTitle: "3. Cells Ko Merge Karna (colspan & rowspan)",
    spanningIntro:
      "<code>colspan</code> aur <code>rowspan</code> attributes ke zariye aik cell ko multiple columns ya rows par phailaya (merge kiya) ja sakta hai.",
    colspanDesc:
      "<strong>colspan:</strong> Cell ko horizontally (right side par) multiple columns tak stretch karta hai.",
    rowspanDesc:
      "<strong>rowspan:</strong> Cell ko vertically (niche ki taraf) multiple rows tak merge karta hai.",

    // Section 4: Best Practices
    bestTitle: "Tables Ke Sunehray Asool",
    best1:
      "<strong>Layout Ke Liye Use Na Karein:</strong> Tables ko sirf data dikhane ke liye use karein, poori website ka layout banane ke liye nahi.",
    best2:
      "<strong>Caption Zaroor Lagayein:</strong> <code>&lt;caption&gt;</code> tag se table ka clear title dein taake accessibility behtar ho.",
    best3:
      "<strong>scope Attribute Istemal Karein:</strong> Headings par <code>scope=\"col\"</code> ya <code>scope=\"row\"</code> lagayein taake screen readers ko pata chale heading kiske liye hai.",
    best4:
      "<strong>Responsive Banayein:</strong> Table ko wrapper <code>&lt;div style=\"overflow-x: auto\"&gt;</code> mein rakhein taake mobile screens par layout kharab hone ke bajaye horizontal scroll ho.",

    nextTitle: "Aage Kya Hai?",
    nextText:
      "Zabardast! Ab aap HTML tables banana aur unhe properly structure karna seekh chuke hain. Agle chapter mein hum HTML Semantic Elements seekhenge!",
  },
};