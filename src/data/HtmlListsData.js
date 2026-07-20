export const content = {
  en: {
    title:
      "Mastering HTML Lists: Unordered, Ordered, Nested & Description Lists",
    intro:
      "Lists are foundational structure elements in web development. Beyond just displaying bullet points, lists form the backbone of website navigation menus, dropdowns, e-commerce filters, and structured data layout. In this advanced guide, we will explore all types of HTML lists, their attributes, deep nesting techniques, and real-world implementation.",

    // Section 1: Unordered Lists
    ulTitle: "1. Unordered Lists (<ul>) — Bulleted Structures",
    ulIntro:
      "An **Unordered List** is used when the order of list items does not matter (e.g., a shopping list or feature checklist). It wraps individual list item <code>&lt;li&gt;</code> tags and renders bullet points by default.",
    ulAnalogy:
      "🛒 <strong>Real-World Example:</strong> A grocery shopping list. It doesn't matter if you buy Milk first or Eggs first—the order isn't sequential.",
    ulTypeAttr:
      "<strong>CSS/Attribute Styling (Bullet Styles):</strong> You can control bullet icons using CSS <code>list-style-type</code> (or the legacy <code>type</code> attribute):",
    ulTypeDisc: "<code>disc</code> (Default filled circle)",
    ulTypeCircle: "<code>circle</code> (Hollow outline circle)",
    ulTypeSquare: "<code>square</code> (Solid square box)",
    ulTypeNone:
      "<code>none</code> (Removes bullets — Essential for Navbar menus!)",

    // Section 2: Ordered Lists
    olTitle: "2. Ordered Lists (<ol>) — Numbered & Sequential Structures",
    olIntro:
      "An **Ordered List** is used when the sequence of items is critical (e.g., recipe instructions, top-10 rankings, or step-by-step installation guides). Items are automatically numbered by the browser.",
    olAnalogy:
      "🏆 <strong>Real-World Example:</strong> Cooking recipe or tournament leaderboard. Step 1 MUST happen before Step 2!",
    olAttributesTitle: "Essential <ol> Attributes for Advanced Control:",
    olAttrType:
      "<strong>type:</strong> Changes numbering style (<code>1</code> for numbers, <code>A</code>/<code>a</code> for uppercase/lowercase letters, <code>I</code>/<code>i</code> for Roman numerals).",
    olAttrStart:
      '<strong>start:</strong> Defines the starting number of the list (e.g., <code>start="5"</code> starts numbering from 5).',
    olAttrReversed:
      "<strong>reversed:</strong> Counts down numbers in reverse order (e.g., 5, 4, 3, 2, 1) — perfect for countdowns!",

    // Section 3: Nested Lists
    nestedTitle: "3. Nested Lists (Lists Inside Lists)",
    nestedIntro:
      "A **Nested List** is a list placed inside another list item <code>&lt;li&gt;</code>. This is how multi-level dropdown menus, multi-chapter books, and file folder trees are created on professional websites.",
    nestedRule:
      "⚠️ <strong>CRITICAL NESTING RULE:</strong> The inner <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> MUST be placed <strong>INSIDE</strong> the parent <code>&lt;li&gt;</code> tag, never directly between <code>&lt;li&gt;</code> tags!",

    // Section 4: Description Lists
    dlTitle: "4. Description Lists (<dl>) — Glossary & Key-Value Pairs",
    dlIntro:
      "Unlike bulleted or numbered lists, a **Description List** is designed for key-value pairs, glossaries, metadata displays, or FAQs. It uses three specific tags:",
    dlTagDl: "<code>&lt;dl&gt;</code> (Description List wrapper container)",
    dlTagDt: "<code>&lt;dt&gt;</code> (Description Term — The key or title)",
    dlTagDd:
      "<code>&lt;dd&gt;</code> (Description Details — The value or definition)",
    dlAnalogy:
      "📖 <strong>Real-World Example:</strong> A dictionary, FAQ section, or product specifications sheet (e.g., Color: Red, Storage: 256GB).",

    // Section 5: Best Practices
    bestTitle: "Golden Rules for HTML Lists",
    best1:
      "<strong>Direct Children Rule:</strong> Only <code>&lt;li&gt;</code> tags can be direct children of <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>. Never place <code>&lt;div&gt;</code> or <code>&lt;p&gt;</code> directly inside a list wrapper.",
    best2:
      "<strong>Hide Bullets via CSS for Navigation Bars:</strong> Modern website navigation menus are built using <code>&lt;ul&gt;</code>. To remove the bullet dots, use CSS <code>list-style: none;</code> (not HTML type attribute).",
    best3:
      "<strong>Choose the Right List Type:</strong> Use <code>&lt;ol&gt;</code> whenever sequence matters instead of manually writing numbers inside an <code>&lt;ul&gt;</code>.",
    nextTitle: "What's Next?",
    nextText:
      "Awesome job! You've mastered all types of HTML lists. In the next chapter, we will learn about HTML Links (Hyperlinks `<a>`), connecting pages together, and working with paths!",
  },

  ur: {
    title:
      "HTML Lists Mein Maharat: Unordered, Ordered, Nested Aur Description Lists",
    intro:
      "Lists web development ki buniyadi zaroorat hain. Sirf bullet points dikhane ke ilawa, lists se website ke Navigation Menus, Dropdowns, aur Product Specifications bante hain. Is high-level guide mein hum HTML lists ki tamam kismein, unke advanced attributes, nesting ke asool, aur real-world examples seekhenge.",

    // Section 1: Unordered Lists
    ulTitle: "1. Unordered Lists (<ul>) — Bulleted Structures",
    ulIntro:
      "Jab list ki tarteeb (order) ahem na ho toh **Unordered List** (`<ul>`) ka istemal kiya jata hai. Iske andar har item ko `<li>` (List Item) tag se wrap kiya jata hai aur browser default mein bullet dots dikhata hai.",
    ulAnalogy:
      "🛒 <strong>Real-World Example:</strong> Grocery ki shopping list. Dukan se Doodh pehle lein ya Anday, is se koi farq nahi parta.",
    ulTypeAttr:
      "<strong>Bullets Ki Shapes/Styles Adjust Karna:</strong> CSS `list-style-type` (ya purane `type` attribute) se aap bullets ki shapes badal sakte hain:",
    ulTypeDisc: "<code>disc</code> (Default bhara hua gol daira)",
    ulTypeCircle: "<code>circle</code> (Andar se khali gol daira)",
    ulTypeSquare: "<code>square</code> (Solid murabba box)",
    ulTypeNone:
      "<code>none</code> (Bullets khatam karna — Navbar menus ke liye sab se zaroori!)",

    // Section 2: Ordered Lists
    olTitle: "2. Ordered Lists (<ol>) — Numbered Structures",
    olIntro:
      "Jab list mein tarteeb (1, 2, 3...) bohot zaroori ho (jaise khana banane ka tariqa, top 10 positions, ya installation steps), tab **Ordered List** (`<ol>`) istemal hoti hai. Browser khud items ko numbering deta hai.",
    olAnalogy:
      "🏆 <strong>Real-World Example:</strong> Recipe ya kisi game ki ranking. Step 1 pehle hoga tabhi Step 2 par ja sakein ge!",
    olAttributesTitle: "Advanced Control Ke Liye <ol> Ke Specific Attributes:",
    olAttrType:
      "<strong>type:</strong> Numbering ka style badalne ke liye (<code>1</code> numbers ke liye, <code>A</code>/<code>a</code> alphabets ke liye, <code>I</code>/<code>i</code> Roman numerals ke liye).",
    olAttrStart:
      '<strong>start:</strong> Numbering kahan se shuru ho (jaise <code>start="5"</code> likhne se ginti 5 se shuru hogi).',
    olAttrReversed:
      "<strong>reversed:</strong> Ginti ko ulti tarteeb (reverse countdown 5, 4, 3, 2, 1) mein chalane ke liye.",

    // Section 3: Nested Lists
    nestedTitle: "3. Nested Lists (List Ke Andar Doosri List)",
    nestedIntro:
      "Jab ek list item `<li>` ke andar poori doosri list daal di jaye toh usy **Nested List** kehte hain. Professional websites par Dropdown Menus, Multi-chapter books, aur Folder trees isi se bante hain.",
    nestedRule:
      "⚠️ <strong>NESTING KA SAKHT ASOOL:</strong> Andar wali <code>&lt;ul&gt;</code> ya <code>&lt;ol&gt;</code> hamesha parent <code>&lt;li&gt;</code> ke **ANDAR** honi chahiye, do <code>&lt;li&gt;</code> tags ke beech mein bahar nahi!",

    // Section 4: Description Lists
    dlTitle: "4. Description Lists (<dl>) — Definition Aur Key-Value Pairs",
    dlIntro:
      "Yeh normal bullet list se mukhtalif hoti hai. Yeh Key-Value pairs, dictionary definitions, ya product specifications (jaise Mobile Specs) ke liye use hoti hai. Isme 3 tags hote hain:",
    dlTagDl: "<code>&lt;dl&gt;</code> (Poori Description List ka container)",
    dlTagDt: "<code>&lt;dt&gt;</code> (Description Term — Headings/Key)",
    dlTagDd:
      "<code>&lt;dd&gt;</code> (Description Details — Explanation/Value)",
    dlAnalogy:
      "📖 <strong>Real-World Example:</strong> Lughat (Dictionary), FAQ section, ya Mobile Specs (RAM: 8GB, Storage: 128GB).",

    // Section 5: Best Practices
    bestTitle: "Lists Ke Sakht Aur Sunehri Asool",
    best1:
      "<strong>Direct Child Ka Asool:</strong> <code>&lt;ul&gt;</code> aur <code>&lt;ol&gt;</code> ke bilkul andar sirf <code>&lt;li&gt;</code> tag hi aa sakta hai. Inke andar seedha <code>&lt;div&gt;</code> ya <code>&lt;p&gt;</code> mat daalein.",
    best2:
      "<strong>Navbar Ke Liye CSS Se Bullets Khatam Karein:</strong> Navigation bars hamesha <code>&lt;ul&gt;</code> se bante hain. Inki bullets ko chhupane ke liye CSS mein <code>list-style: none;</code> likha jata hai.",
    best3:
      "<strong>Sahi List Tag Ka Istemal:</strong> Jab ginti ya tarteeb zaroori ho toh <code>&lt;ul&gt;</code> mein khud se 1, 2, 3 likhne ki bajaye hamesha <code>&lt;ol&gt;</code> hi istemal karein.",
    nextTitle: "Aage Kya Hai?",
    nextText:
      "Shabash! Ab aap HTML Lists ke expert ban chuke hain. Agle chapter mein hum HTML Hyperlinks (`<a>`) seekhenge jisse hum aik page ko doosre page se jorna seekhenge!",
  },
};
