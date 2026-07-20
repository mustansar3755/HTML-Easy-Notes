export const content = {
  en: {
    title: "Deep Dive into HTML Paragraphs, Line Mechanics & Text Formatting",
    intro: "Writing content on the web requires more than just typing sentences. You must understand how browsers structure text blocks, handle white-spaces, break lines, and apply semantic emphasis. In this comprehensive guide, we will master paragraphs, spacing mechanics, and every text formatting tag available in HTML5.",

    // Section 1: Detailed Paragraph Explanation
    paragraphSectionTitle: "1. The Paragraph Tag (<p>) & Block-Level Mechanics",
    paragraphConcept: "The <code>&lt;p&gt;</code> tag is the core element used to wrap written text on webpages. In HTML, paragraphs are **Block-Level Elements**. This means every paragraph automatically starts on a brand-new line and forces any element after it onto the next line.",
    paragraphBlockDetail: "Browsers automatically inject a default top and bottom margin (usually <code>1em</code> or 16px) around <code>&lt;p&gt;</code> tags. This natural spacing ensures that blocks of prose are visually separated, making articles readable without requiring extra manual line breaks.",

    // Section 2: Whitespace Collapsing Mechanics
    whitespaceTitle: "2. The Whitespace Collapsing Rule",
    whitespaceConcept: "A critical rule of the HTML parser is **Whitespace Collapsing**. Browsers treat any sequence of white-space characters—including spaces, tabs, and newline enters—as a **single space**.",
    whitespaceExampleIntro: "For instance, if you type text inside VS Code with 20 spaces between words or press 'Enter' 10 times:",
    whitespaceResultText: "The browser's layout engine strips away all extra spaces and enters, rendering the entire block as a continuous sentence with single spaces!",

    // Section 3: Line Breaks & Preserving Formatting
    lineControlTitle: "3. Controlling Line Breaks: <br>, <hr>, and <pre>",
    lineControlIntro: "Since the browser ignores Enter keys pressed in your code editor, HTML provides special tags to manually break lines or preserve exact text alignment:",
    
    brTagTitle: "The Line Break Tag (<br />)",
    brTagDesc: "The <code>&lt;br /&gt;</code> tag is an **empty (self-closing) tag**. It immediately halts the current line and moves the text following it to the next line **without creating paragraph margin gaps**. Ideal for street addresses, lyrics, and poetry.",

    hrTagTitle: "The Horizontal Rule Tag (<hr />)",
    hrTagDesc: "The <code>&lt;hr /&gt;</code> tag inserts a **horizontal line across the container**. It represents a 'thematic break' in topic between paragraphs or chapters.",

    preTagTitle: "The Preformatted Text Tag (<pre>)",
    preTagDesc: "When you want the browser to strictly honor **every single space, tab, and enter key** exactly as typed in VS Code, wrap the text inside <code>&lt;pre&gt;</code>. It renders text in a fixed-width monospace font, completely bypassing the whitespace collapsing rule.",

    // Section 4: Semantic vs Physical Formatting
    formattingTitle: "4. Complete Text Formatting Tags (Semantic vs Physical)",
    formattingIntro: "Text formatting tags fall into two distinct categories: **Physical Tags** (purely visual) and **Semantic Tags** (provide meaning to search engines and screen readers for visually impaired users).",
    
    // Table Headers
    colTag: "HTML Tag",
    colCategory: "Category",
    colMeaning: "Semantic Meaning / Purpose",
    colVisual: "Browser Visual Output",

    // Section 5: Subscript and Superscript
    subSupTitle: "5. Subscript (<sub>) & Superscript (<sup>)",
    subSupIntro: "These tags adjust the baseline position and font size of characters, critical for mathematical equations, dates, and chemical formulas:",
    subDesc: "<strong>Subscript (&lt;sub&gt;):</strong> Lowers the text baseline below the standard line. Used for chemistry formulas like H<sub>2</sub>O or CO<sub>2</sub>.",
    supDesc: "<strong>Superscript (&lt;sup&gt;):</strong> Raises the text baseline above the standard line. Used for mathematical exponents (e.g., E = mc<sup>2</sup>) or ordinal numbers (1<sup>st</sup>, 2<sup>nd</sup>).",

    // Best Practices
    bestTitle: "Golden Rules for Paragraphs & Formatting",
    best1: "<strong>Never use empty <p></p> or multiple <br> for spacing:</strong> Do not add blank paragraphs or multiple line breaks to push elements down. Use CSS margins and padding instead.",
    best2: "<strong>Prefer Semantic Tags:</strong> Always use <code>&lt;strong&gt;</code> over <code>&lt;b&gt;</code> and <code>&lt;em&gt;</code> over <code>&lt;i&gt;</code> for better accessibility and SEO ranking.",
    best3: "<strong>Never nest block elements inside <p>:</strong> Do not place headings, lists, or other paragraphs inside a <code>&lt;p&gt;</code> tag.",

    nextTitle: "What's Next?",
    nextText: "Awesome job! You now understand the complete text and paragraph mechanics of HTML. In the next chapter, we will learn about HTML Lists (Ordered & Unordered) to organize data into clean bullet points!"
  },

  ur: {
    title: "HTML Paragraph Mechanics Aur Complete Text Formatting Tags",
    intro: "Webpage par text likhna sirf jumlay typing karne tak mehdood nahi hai. Aapko samajhna hoga ke browser text blocks ko kaise structure karta hai, khali spaces ko kaise handle karta hai, aur semantic highlights kaise lagaye jaate hain. Is mukammal guide mein hum paragraphs, spacing mechanics, aur HTML5 ke tamam text formatting tags seekhenge.",

    // Section 1: Detailed Paragraph Explanation
    paragraphSectionTitle: "1. Paragraph Tag (<p>) Aur Block-Level Mechanics",
    paragraphConcept: "<code>&lt;p&gt;</code> tag webpage par text likhne ka buniyadi tag hai. HTML mein paragraphs **Block-Level Elements** hote hain. Iska matlab hai ke har naya paragraph hamesha ek **nayi line** se shuru hota hai aur apne baad aane wale element ko bhi agli line par bhej deta hai.",
    paragraphBlockDetail: "Browser khud-ba-khud <code>&lt;p&gt;</code> tags ke upar aur niche default margin (gap) shamil kar deta hai. Is spacing ki wajah se text ke blocks ek doosre se wazeh alag nazar aate hain aur bina kisi extra line break ke reading aasan ho jaati hai.",

    // Section 2: Whitespace Collapsing Mechanics
    whitespaceTitle: "2. Whitespace Collapsing Ka Asool",
    whitespaceConcept: "HTML parser ka ek bohot ahem asool **Whitespace Collapsing** hai. Browser code mein mojud multiple extra spaces, tabs, aur Enter keys ko khatam karke **sirf EK space** bana deta hai.",
    whitespaceExampleIntro: "Misaal ke taur par, agar aap apne VS Code editor mein lafzon ke beech 20 spaces dein ya 10 baar 'Enter' dabayein:",
    whitespaceResultText: "Browser in tamam extra spaces aur enters ko ignore kar dega aur poore sentence ko ek hi line mein normal single space ke sath render karega!",

    // Section 3: Line Breaks & Preserving Formatting
    lineControlTitle: "3. Lines Ko Control Karna: <br>, <hr>, Aur <pre>",
    lineControlIntro: "Kyunke editor mein Enter dabane se browser mein line nahi toot ti, is liye HTML humein lines aur formatting ko control karne ke liye yeh specific tools deta hai:",

    brTagTitle: "Line Break Tag (<br />)",
    brTagDesc: "<code>&lt;br /&gt;</code> ek **self-closing (void) tag** hai. Yeh text ko bina paragraph jitna bada margin banaye zabardasti agli line par bhej deta hai. Yeh addresses, shayri aur compact lines ke liye istemal hota hai.",

    hrTagTitle: "Horizontal Rule Tag (<hr />)",
    hrTagDesc: "<code>&lt;hr /&gt;</code> container ke aar-paar ek **sooratai/visual divider line** bana deta hai. Yeh do topic ya chapters ke beech farq zahir karta hai.",

    preTagTitle: "Preformatted Text Tag (<pre>)",
    preTagDesc: "Jab aap chahte hain ke browser aapke likhe hue **har ek space, tab aur enter** ko bilkul waise hi dikhay jaisa VS Code mein hai, toh text ko <code>&lt;pre&gt;</code> ke andar rakhein. Yeh whitespace collapsing rule ko bypass kar deta hai.",

    // Section 4: Semantic vs Physical Formatting
    formattingTitle: "4. Complete Text Formatting Tags (Semantic vs Physical)",
    formattingIntro: "HTML mein formatting tags do kisam ke hote hain: **Physical Tags** (sirf visual design ke liye) aur **Semantic Tags** (jo Google aur blind logo ke screen readers ko text ke ahem hone ka matlab batate hain).",

    // Table Headers
    colTag: "HTML Tag",
    colCategory: "Kisim",
    colMeaning: "Maqsad / Matlab",
    colVisual: "Browser Visual Output",

    // Section 5: Subscript and Superscript
    subSupTitle: "5. Subscript (<sub>) Aur Superscript (<sup>)",
    subSupIntro: "Yeh tags text ke font size ko chota karke position ko normal line se upar ya niche set karte hain (math powers aur chemistry formulas ke liye):",
    subDesc: "<strong>Subscript (&lt;sub&gt;):</strong> Text ko normal line se thoda niche kar deta hai (Jaise chemistry formula: H<sub>2</sub>O ya CO<sub>2</sub>).",
    supDesc: "<strong>Superscript (&lt;sup&gt;):</strong> Text ko normal line se thoda upar utha deta hai (Jaise Math square: E = mc<sup>2</sup> ya dates: 1<sup>st</sup> July).",

    // Best Practices
    bestTitle: "Paragraphs Aur Formatting Ke Sakht Asool",
    best1: "<strong>Spacing ke liye khali <p> ya multiple <br> na lagayein:</strong> Space banane ke liye baar baar <code>&lt;br&gt;</code> na lagayein, iske liye CSS margins seekhein.",
    best2: "<strong>Semantic tags ko tarjeeh dein:</strong> SEO aur accessibility ke liye <code>&lt;b&gt;</code> ki jagah <code>&lt;strong&gt;</code> aur <code>&lt;i&gt;</code> ki jagah <code>&lt;em&gt;</code> istemal karein.",
    best3: "<strong><p> ke andar block elements na dalein:</strong> Paragraph tag ke andar headings ya doosre paragraphs kabhi mat rakhein.",

    nextTitle: "Aage Kya Hai?",
    nextText: "Shabash! Ab aap HTML Text Mechanics aur Text Formatting Tags ke master ban gaye hain. Agle chapter mein hum HTML Lists (Ordered & Unordered) seekhenge jahan data ko bullet points mein dhalna seekhenge!"
  }
};