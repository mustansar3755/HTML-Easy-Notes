export const content = {
  en: {
    title: "Block-Level vs Inline Elements & <div> vs <span>",
    intro: "Every HTML element has a default display behavior. Understanding the difference between Block-Level and Inline elements is the single most important layout concept in web development. In this chapter, we will master how elements behave, how <div> and <span> act as generic containers, and explore real-life analogies.",

    // Section 1: Real-life Analogy & Block Concept
    blockTitle: "1. Block-Level Elements (The Big Shipping Boxes)",
    blockAnalogy: "Imagine a **large cardboard shipping box**. No matter how small the item inside is, you cannot place another shipping box right next to it on the same line—it forces everything else below it.",
    blockRules: "Key Characteristics of Block Elements:",
    blockRule1: "<strong>Full Width:</strong> They always take up 100% of the available screen width (from left to right edge).",
    blockRule2: "<strong>New Line Force:</strong> They ALWAYS start on a brand-new line in the browser.",
    blockRule3: "<strong>Spacing Control:</strong> You can apply top/bottom margins, padding, width, and height freely.",

    // Section 2: Inline Concept
    inlineTitle: "2. Inline Elements (The Price Stickers)",
    inlineAnalogy: "Imagine a **small price sticker** or label. You can stick multiple labels side-by-side on the same product without pushing anything to the next line.",
    inlineRules: "Key Characteristics of Inline Elements:",
    inlineRule1: "<strong>Only Necessary Width:</strong> They only take up as much width as their inner content requires.",
    inlineRule2: "<strong>No New Line:</strong> They sit nicely side-by-side with other inline elements on the same line.",
    inlineRule3: "<strong>Limited Spacing:</strong> Top and bottom margins/padding are ignored or don't push other elements away.",

    // Section 3: Div vs Span
    containersTitle: "3. The Generic Containers: <div> vs <span>",
    containersIntro: "Sometimes you need a container to group elements together for styling (CSS) or layout without giving them any special browser meaning. HTML provides two generic container tags:",
    
    divDesc: "<strong>The &lt;div&gt; (Division) Tag:</strong> A <strong>Block-level container</strong>. Used to group large sections, create layout cards, grids, or wrap multiple headings and paragraphs together.",
    spanDesc: "<strong>The &lt;span&gt; Tag:</strong> An <strong>Inline container</strong>. Used to target a small snippet of text inside a paragraph (e.g., changing the color of a single word or styling an icon).",

    // Section 4: Tag Reference Table
    listTitle: "4. Master Reference List of Block & Inline Tags",
    listIntro: "Here is a quick reference table of common HTML tags categorized by their default rendering behavior:",
    colTag: "HTML Tag",
    colCategory: "Element Category",
    colBehavior: "Default Display Behavior",

    // Golden Rules
    bestTitle: "Golden Nesting Rules",
    best1: "<strong>Rule 1:</strong> Block elements can contain other Block elements AND Inline elements.",
    best2: "<strong>Rule 2 (CRITICAL):</strong> Inline elements can NEVER contain Block elements! You cannot place a <code>&lt;div&gt;</code> or <code>&lt;p&gt;</code> inside a <code>&lt;span&gt;</code> or <code>&lt;a&gt;</code> tag.",
    best3: "<strong>Rule 3:</strong> Do not overuse <code>&lt;div&gt;</code> (Div-itis). Use semantic elements like <code>&lt;header&gt;</code> or <code>&lt;article&gt;</code> when available.",

    nextTitle: "What's Next?",
    nextText: "Fantastic! Now that you know how elements stack and align, in the next chapter we will dive into HTML Lists (Ordered & Unordered) to organize data into clean bulleted structures!"
  },

  ur: {
    title: "Block-Level vs Inline Elements Aur <div> vs <span>",
    intro: "HTML ke har element ka ek default display behavior hota hai. Block-Level aur Inline elements ka farq samajhna web development ka sab se ahem layout concept hai. Is chapter mein hum seekhenge ke elements screen par kaise baithte hain, <div> aur <span> ka maqsad kya hai, aur real-life examples se inko samjhenge.",

    // Section 1: Real-life Analogy & Block Concept
    blockTitle: "1. Block-Level Elements (Bary Corrugated Boxes)",
    blockAnalogy: "Sochein ek **bara cardboard shipping box**. Dibba chahay andar se aadha khali ho, aap uske sath doosra bara dibba barabar mein nahi rakh sakte—woh zabardasti Agli line/jagah par jayega.",
    blockRules: "Block Elements Ki Ahem Khususiyaat:",
    blockRule1: "<strong>Poori Width (100%):</strong> Yeh screen ki poori chorai (left se right tak) gher lete hain.",
    blockRule2: "<strong>Nayi Line:</strong> Yeh HAMESHA ek nayi line se shuru hote hain.",
    blockRule3: "<strong>Height/Width Control:</strong> Inpar CSS se margin, padding, width aur height easily set ki ja sakti hai.",

    // Section 2: Inline Concept
    inlineTitle: "2. Inline Elements (Chote Price Tags / Stickers)",
    inlineAnalogy: "Sochein ek **chota price tag sticker**. Aap ek hi line par aik ke baad aik kai sare stickers chipka sakte hain, koi bhi sticker doosre ko agli line par nahi bhejta.",
    inlineRules: "Inline Elements Ki Ahem Khususiyaat:",
    inlineRule1: "<strong>Sirf Content Jitni Width:</strong> Yeh sirf utni hi jagah lete hain jitna inka andar mojud text/content hota hai.",
    inlineRule2: "<strong>Ek Hi Line Par:</strong> Yeh doosre inline elements ke sath ek hi line mein barabar baith jaate hain.",
    inlineRule3: "<strong>Limited Spacing:</strong> Inpar top/bottom margins kaam nahi kartien.",

    // Section 3: Div vs Span
    containersTitle: "3. Khali Dabbe (Containers): <div> vs <span>",
    containersIntro: "Khabhi kabhar humein elements ko ikatha karne ya CSS se design karne ke liye aise tags chahiye hote hain jinka apna koi design ya matlab na ho. Inhe Generic Containers kehte hain:",

    divDesc: "<strong>&lt;div&gt; Tag (Division):</strong> Yeh ek **Block-level container** hai. Yeh bary sections, layout cards, aur poore web-page ke structures banane ke liye istemal hota hai.",
    spanDesc: "<strong>&lt;span&gt; Tag:</strong> Yeh ek **Inline container** hai. Yeh kisi paragraph ke andar kisi ek lafz ko target karne (jaise us lafz ka color red karne) ke liye use hota hai.",

    // Section 4: Tag Reference Table
    listTitle: "4. Block Aur Inline Tags Ki Master Reference List",
    listIntro: "Yeh ek mukammal reference list hai taake aapko pata rahe kaunsa tag Block hai aur kaunsa Inline:",
    colTag: "HTML Tag",
    colCategory: "Kisim",
    colBehavior: "Default Display Behavior",

    // Golden Rules
    bestTitle: "Elements Ko Ek Doosre Ke Andar Rakhne Ke Asool (Nesting Rules)",
    best1: "<strong>Asool 1:</strong> Block elements ke andar aap doosre Block aur Inline dono elements rakh sakte hain.",
    best2: "<strong>Asool 2 (SAKHT ASOOL):</strong> Inline element ke andar KABHI BHI Block element nahi rakha ja sakta! Aap <code>&lt;span&gt;</code> ke andar <code>&lt;div&gt;</code> ya <code>&lt;p&gt;</code> nahi daal sakte.",
    best3: "<strong>Asool 3:</strong> Har jagah khwankwah <code>&lt;div&gt;</code> mat lagayein (jisey Div-itis kehte hain), jahan zaroorat ho wahan semantic tags use karein.",

    nextTitle: "Aage Kya Hai?",
    nextText: "Zabrdaast! Ab aap layouts ki buniyad samajh chuke hain. Agle chapter mein hum HTML Lists (Ordered & Unordered) seekhenge aur data ko professional bullet points mein dhalna seekhenge!"
  }
};