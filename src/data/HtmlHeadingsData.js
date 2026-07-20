export const content = {
  en: {
    title: "Mastering HTML Headings (h1 to h6)",
    intro: "Headings are the backbone of your webpage structure. They don't just change font sizes; they tell search engines like Google and screen readers how your content is organized. Let's learn the strict rules of heading hierarchy, usage limits, and default browser styling.",
    
    // Section 1: Core Hierarchy
    hierarchyTitle: "The Six Levels of Hierarchy",
    hierarchyIntro: "HTML provides six heading tags: <code>&lt;h1&gt;</code> down to <code>&lt;h6&gt;</code>. <code>&lt;h1&gt;</code> represents the most important main topic, while <code>&lt;h6&gt;</code> is the least important sub-sub-section.",

    // Section 2: Frequency Rules
    rulesTitle: "Usage Limits: How Many Times Can You Use Them?",
    rulesIntro: "This is where most beginners make massive mistakes. Headings are structural, not decorative!",
    
    h1RuleTitle: "The <h1> Limit (Rule of One)",
    h1RuleDesc: "You should <strong>only use ONE <code>&lt;h1&gt;</code> per page</strong>. Think of it like a book title—a book only has one title. Google uses this single tag to understand what your entire webpage is about. Multiple h1 tags confuse search engine crawlers.",
    
    h2h6RuleTitle: "The <h2> to <h6> Unlimited Rule",
    h2h6RuleDesc: "You can use <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc., <strong>as many times as you need</strong>, provided they follow a logical nested structure. For example, a major section (h2) can have multiple sub-sections (h3).",

    // Section 3: Browser Default Sizes Table
    sizesTitle: "Default Browser Styling & Sizes",
    sizesIntro: "Every browser has a built-in stylesheet (User Agent Stylesheet) that automatically applies bold font-weight and specific sizes to headings. Here is the exact breakdown based on standard 16px root font size:",
    colTag: "Heading Tag",
    colRem: "Size in REM",
    colPx: "Equivalent Pixels",
    colWeight: "Font Weight",

    // Section 4: Golden Rules / Best Practices
    bestTitle: "Golden Rules of Semantic Headings",
    best1: "<strong>Never Skip Levels:</strong> Always go from <code>&lt;h2&gt;</code> to <code>&lt;h3&gt;</code>. Never jump straight from <code>&lt;h1&gt;</code> to <code>&lt;h4&gt;</code> just because you want a smaller font.",
    best2: "<strong>Don't Use for Bold Text:</strong> If you just want to make a normal sentence big or bold, use CSS or a <code>&lt;p&gt;</code> tag with styling—never abuse a heading tag for it.",
    best3: "<strong>SEO Impact:</strong> Search engines scan your headings to index your content. Proper hierarchy directly boosts your ranking on search results.",

    nextTitle: "What's Next?",
    nextText: "Awesome job! You now understand how to structure content professionally. In the next chapter, we will learn about HTML Paragraph Mechanics and how browsers handle white-spaces and secret line breaks!"
  },
  
  ur: {
    title: "HTML Headings (h1 se h6) Ka Mukammal Rules",
    intro: "Headings aapke webpage ki reedh ki haddi (backbone) hoti hain. Yeh sirf text ka size bada nahi kartien, balkay Google jaise search engines aur blind logo ke screen readers ko yeh batati hain ke aapka content kis tarteeb se likha gaya hai. Chaliye seekhte hain inke ahem asool aur default browser sizes.",
    
    // Section 1: Core Hierarchy
    hierarchyTitle: "Hierarchy Ke 6 Levels",
    hierarchyIntro: "HTML mein total 6 headings hoti hain: <code>&lt;h1&gt;</code> se lekar <code>&lt;h6&gt;</code> tak. <code>&lt;h1&gt;</code> sab se ahem aur main heading hoti hai, jabke <code>&lt;h6&gt;</code> sab se aakhri aur choti sub-section heading hoti hai.",

    // Section 2: Frequency Rules
    rulesTitle: "Usage Limits: Kaunsi Heading Kitni Baar Lagani Hai?",
    rulesIntro: "Yahan 90% naye developers sakht ghalti karte hain. Headings ko design ke liye nahi, balkay structure ke liye use kiya jata hai!",
    
    h1RuleTitle: "<h1> Ka Asool (Sirf Aik Baar)",
    h1RuleDesc: "Poore webpage par <strong>sirf aur sirf EK <code>&lt;h1&gt;</code> lagana zaroori hai</strong>. Jaise ek kitaab ka title sirf ek hota hai, bilkul waise hi webpage ka title bhi ek hi hoga. Google isi ek tag ko dekh kar samajhta hai ke aapka page kis baare mein hai. Ek se zyada h1 lagane se Google confuse ho jata hai.",
    
    h2h6RuleTitle: "<h2> se <h6> Ka Asool (Jitni Baar Chahein)",
    h2h6RuleDesc: "Aap <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code> wagera ko <strong>jitni baar chahein use kar sakte hain</strong>. Inpar koi limit nahi hai, bas tarteeb theek honi chahiye (jaise h2 ke andar h3 aana chahiye).",

    // Section 3: Browser Default Sizes Table
    sizesTitle: "Browser Ke Default Sizes Aur Styling",
    sizesIntro: "Jab aap koi CSS nahi lagate, toh Google Chrome ya Firefox khud se har heading ko ek default size aur bold look de dete hain. Agar standard screen size 16px ho, toh har tag ka size yeh hota hai:",
    colTag: "Heading Tag",
    colRem: "Size (REM mein)",
    colPx: "Pixels (PX mein)",
    colWeight: "Font Weight",

    // Section 4: Golden Rules / Best Practices
    bestTitle: "Headings Ke Kuch Sakht Asool",
    best1: "<strong>Tarteeb Mat Todein:</strong> Hamesha line se chalein—<code>&lt;h1&gt;</code> ke baad <code>&lt;h2&gt;</code> aur phir <code>&lt;h3&gt;</code>. Kabhi bhi chota text dikhane ke liye h1 se seedha h4 par jump na maarein.",
    best2: "<strong>Sirf Bold Karne Ke Liye Use Na Karein:</strong> Agar normal paragraph ke kisi lafzi text ko bada ya bold karna ho, toh CSS use karein, heading tag ko khwankwah zaya ya abuse na karein.",
    best3: "<strong>SEO Par Asar:</strong> Google aapki website ko rank karne ke liye headings ka structure check karta hai. Sahi structure aapki website ko top par la sakta hai.",

    nextTitle: "Aage Kya Hai?",
    nextText: "Behtareen! Ab aap headings ke master ban chuke hain. Agle chapter mein hum HTML Paragraph Mechanics seekhenge aur dekhenge ke browser khali spaces aur secret line breaks ko kaise handle karta hai!"
  }
};