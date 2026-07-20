export const content = {
  en: {
    title: "Mastering HTML Links: Hyperlinks, Anchors, Target Attributes & URL Paths",
    intro: "Hyperlinks are the beating heart of the World Wide Web. The term 'Web' itself exists because millions of HTML documents are linked together across the globe through hypermedia. Without links, the web would be nothing more than isolated, standalone documents. In this deep-dive guide, we will explore the <a> (anchor) tag from foundational syntax to advanced URL routing, relative vs absolute paths, email/phone protocols, download attributes, and deep-page smooth anchor jumping.",

    // Section 1: Anatomy of Anchor Tag
    anchorTitle: "1. The Anatomy of the <a> (Anchor) Tag",
    anchorIntro: "The <a> tag stands for Anchor. It creates a hyperlink that connects the current webpage to another webpage, an external website, a downloadable file, an email address, a telephone number, or a specific location on the same page.",
    anchorHrefDesc: "The most important attribute of the anchor tag is <code>href</code> (Hypertext Reference). It specifies the destination URL or file path where the browser should navigate when the user clicks or taps the link. If you omit the <code>href</code> attribute, the <a> tag becomes a plain placeholder without hyperlink capabilities.",
    anchorAnalogy: "✈️ <strong>Real-World Analogy:</strong> Think of the <code>&lt;a&gt;</code> tag as a flight ticket. The text inside the tag is the ticket label ('Fly to London'), while the <code>href</code> attribute is the actual flight destination coordinate.",

    // Section 2: Relative vs Absolute Paths
    pathsTitle: "2. Relative Paths vs. Absolute Paths (Crucial Concept)",
    pathsIntro: "Understanding the difference between Absolute URLs and Relative File Paths is vital for preventing broken links (404 Errors) in both small websites and massive web applications.",
    
    absTitle: "A. Absolute URLs (External Resources)",
    absDesc: "An Absolute URL provides the full, complete internet address including the protocol (http:// or https://), domain name, and optional file path. You MUST use absolute URLs when linking to third-party websites outside your own server.",
    
    relTitle: "B. Relative Paths (Internal Server Navigation)",
    relDesc: "A Relative Path points to a file relative to the location of the currently open HTML file on the same server. You do NOT include domain names or protocols. This makes your website portable (works on localhost, staging, and live domain without code changes).",

    pathTableTitle: "File Path Navigation Cheat Sheet:",
    colSyntax: "Path Syntax",
    colMeaning: "What It Means / Destination Location",
    colExample: "Example Code",
    
    pathSameDir: "<code>about.html</code>",
    pathSameDirDesc: "Looks for <code>about.html</code> in the <strong>SAME folder</strong> as the current HTML file.",
    pathSubDir: "<code>pages/about.html</code>",
    pathSubDirDesc: "Goes <strong>DOWN</strong> into a subfolder named <code>pages</code> and opens <code>about.html</code>.",
    pathParentDir: "<code>../about.html</code>",
    pathParentDirDesc: "Goes <strong>UP one directory level</strong> (out of the current folder) and finds <code>about.html</code>.",
    pathRootDir: "<code>/about.html</code>",
    pathRootDirDesc: "Starts directly from the <strong>Root folder</strong> of the entire website server.",

    // Section 3: Target Attribute & Security
    targetTitle: "3. Controlling Where Links Open: The target Attribute",
    targetIntro: "By default, when a user clicks a link, the browser replaces the current webpage with the new destination page. The target attribute allows developers to override this behavior.",
    targetSelf: "<code>target=\"_self\"</code> (Default): Opens the link in the same browser window or tab.",
    targetBlank: "<code>target=\"_blank\"</code>: Opens the linked document in a brand new browser tab or window.",
    targetParent: "<code>target=\"_parent\"</code>: Opens the link in the parent frame.",
    targetTop: "<code>target=\"_top\"</code>: Opens the link in the full body of the window.",

    securityTitle: "⚠️ CRITICAL SECURITY WARNING: rel=\"noopener noreferrer\"",
    securityDesc: "Whenever you use <code>target=\"_blank\"</code> to open external links, you create a major security vulnerability known as <strong>Tabnabbing</strong>! The newly opened page gets access to your original page via JavaScript <code>window.opener</code> and can redirect your users to a fake phishing page.<br/><br/><strong>The Solution:</strong> ALWAYS pair <code>target=\"_blank\"</code> with <code>rel=\"noopener noreferrer\"</code>.",

    // Section 4: Page Jump Anchors
    pageAnchorsTitle: "4. Page Anchors & Jump Links (Same-Page Scrolling)",
    pageAnchorsIntro: "Anchor links can jump directly to specific sections on the same page without reloading. This is heavily used in Table of Contents, FAQ accordions, and single-page landing pages.",
    pageAnchorsHow: "<strong>How it Works:</strong><br/>1. Assign a unique <code>id</code> attribute to the target section (e.g., <code>&lt;section id=\"pricing\"&gt;</code>).<br/>2. Create a hyperlink with a hash symbol (<code>#</code>) followed by that exact ID (e.g., <code>&lt;a href=\"#pricing\"&gt;Jump to Pricing&lt;/a&gt;</code>).",

    // Section 5: Protocols
    protocolsTitle: "5. Specialized Link Protocols (Email, Call, SMS & Download)",
    protocolsIntro: "HTML links aren't just for web pages. Using special URL protocols, you can trigger native device applications directly from a browser click:",
    protoMail: "<strong>Email Link (mailto:):</strong> Opens the user's default email app with pre-filled recipient, subject, and body text.",
    protoTel: "<strong>Phone Call Link (tel:):</strong> Opens the phone dialer with the phone number pre-entered.",
    protoSms: "<strong>SMS Text Link (sms:):</strong> Opens the native Messaging app to send a direct text message.",
    protoDownload: "<strong>Force File Download (download attribute):</strong> Tells the browser to download the linked file instead of opening it.",

    // Section 6: Link States
    statesTitle: "6. The 4 Interactive Link States in Web Browsers",
    statesIntro: "Browsers track user interaction with links through four default pseudo-class states:",
    stateUnvisited: "1. <code>a:link</code> — Unvisited link (Default browser color is blue).",
    stateVisited: "2. <code>a:visited</code> — A link the user has already visited (Default color is purple).",
    stateHover: "3. <code>a:hover</code> — When the user moves their mouse cursor over the link.",
    stateActive: "4. <code>a:active</code> — The exact moment the user clicks down on the link.",

    // Section 7: Best Practices
    bestTitle: "Golden Rules & Accessibility for Hyperlinks",
    best1: "<strong>Never write 'Click Here' or 'Read More':</strong> Link text must be descriptive for screen reader accessibility.",
    best2: "<strong>Check for Broken Links (404s):</strong> Regularly audit your external and relative links.",
    best3: "<strong>Style Buttons with <a> when navigating:</strong> Use `<a>` tag styled as a button when changing pages.",
    best4: "<strong>Mailto Query Parameters:</strong> Separate email query parameters with `?` and `&` properly.",

    nextTitle: "What's Next?",
    nextText: "Outstanding work! You now understand the full power of web hyperlinks. Next up: **HTML Images (`<img>`)**!"
  },

  ur: {
    title: "HTML Hyperlinks Aur Anchors Mein Maharat: <a> Tag, Target Attributes, Aur File Paths",
    intro: "Hyperlinks World Wide Web ki sab se bari rooh hain. 'Web' ka lafz hi is liye wajood mein aya kyun ke pooray dunya mein hazaron HTML documents aapas mein links ke zariye jude hue hain. Agar links na hon, toh web sirf alag alag khali files ban kar reh jaye. Is tafseeli chapter mein hum <a> (anchor) tag ki buniyad se le kar advanced URL routing, relative vs absolute paths, email/phone protocols, download feature, aur same-page jump scrolling seekhenge.",

    anchorTitle: "1. <a> (Anchor) Tag Ki Anatomy Aur Structure",
    anchorIntro: "<code>&lt;a&gt;</code> tag ka matlab **Anchor** hai. Yeh ek hyperlink banata hai jo current webpage ko kisi doosre page, kisi external website, downloadable file, email address, phone number, ya page ke kisi khas hissay se jorta hai.",
    anchorHrefDesc: "Anchor tag ka sab se ahem attribute <code>href</code> (Hypertext Reference) hai. Yeh browser ko batata hai ke link par click karne ke baad kahan jana hai. Agar aap <code>href</code> attribute likhna bhool jayenge, toh link kaam nahi karega aur ek aam text ban kar reh jaye ga.",
    anchorAnalogy: "✈️ <strong>Real-World Example:</strong> <code>&lt;a&gt;</code> tag ko aik jahaz ke ticket ki tarah sochein. Tag ke andar likha text ticket par likhi jagah ka naam hai ('Lahore Jaya Jaye'), jabke <code>href</code> attribute asal mein jahaz ki destination coordinates hain.",

    pathsTitle: "2. Relative Paths vs Absolute Paths (Bohot Ahem Concept)",
    pathsIntro: "<strong>Absolute URLs</strong> aur <strong>Relative File Paths</strong> ka farq samajhna aage chal kar website par broken links (404 Error) se bachne ke liye sab se zaroori hai.",
    absTitle: "A. Absolute URLs (Bahar Ki Websites Ke Links)",
    absDesc: "<strong>Absolute URL</strong> poora internet ka pata hota hai jisme protocol (<code>http://</code> ya <code>https://</code>), domain name, aur file path shamil hota hai. Jab bhi aapko kisi doosri website (jaise Google, YouTube, GitHub) ka link dena ho, hamesha Absolute URL likha jata hai.",
    relTitle: "B. Relative Paths (Website Ke Apne Pages Ke Links)",
    relDesc: "<strong>Relative Path</strong> aap ke apne laptop ya server ke andar files ka rasta batata hai. Isme domain name likhne ki zaroorat nahi hoti. Iska faida yeh hai ke aap ki website offline localhost par bhi chalti hai aur jab aap domain buy karke live karte hain tab bhi links nahi toot te.",

    pathTableTitle: "File Path Navigation Ki Cheat Sheet:",
    colSyntax: "Path Ka Style",
    colMeaning: "Iska Kya Matlab Hai / File Kahan Hai",
    colExample: "Code Ki Misaal",
    pathSameDir: "<code>about.html</code>",
    pathSameDirDesc: "Yeh current file ke **BILKUL SAATH (SAME folder)** mein <code>about.html</code> ko dhoondta hai.",
    pathSubDir: "<code>pages/about.html</code>",
    pathSubDirDesc: "Yeh ek step **NICHE** <code>pages</code> wale folder ke andar ja kar <code>about.html</code> kholta hai.",
    pathParentDir: "<code>../about.html</code>",
    pathParentDirDesc: "Yeh current folder se ek step **BAHAR (UP/PARENT)** nikal kar <code>about.html</code> dhoondta hai.",
    pathRootDir: "<code>/about.html</code>",
    pathRootDirDesc: "Yeh poori website ke **Main Root Folder** se <code>about.html</code> uthata hai.",

    targetTitle: "3. Link Kahan Khulega: target Attribute",
    targetIntro: "Jab user kisi link par click karta hai, toh browser default mein usi tab mein naya page khol deta hai. target attribute se hum is behavior ko badal sakte hain:",
    targetSelf: "<code>target=\"_self\"</code> (Default): Link ko usi browser tab/window mein kholta hai.",
    targetBlank: "<code>target=\"_blank\"</code>: Link ko ek **NAYE (New)** browser tab ya window mein kholta hai.",
    targetParent: "<code>target=\"_parent\"</code>: Frame structures ke andar parent window mein kholta hai.",
    targetTop: "<code>target=\"_top\"</code>: Tamam frames ko tod kar poori window mein page kholta hai.",

    securityTitle: "⚠️ SAKHT SECURITY WARNING: rel=\"noopener noreferrer\"",
    securityDesc: "Jab bhi aap external links ke liye <code>target=\"_blank\"</code> use karte hain, toh ek bohot bara security masala paida hota hai jise **Tabnabbing** kehte hain! Naya khulne wala page JavaScript ke zariye aap ke purane tab ko hack karke kisi fake phishing page par bhejna shuru kar sakta hai.<br/><br/><strong>Hal (Solution):</strong> HAMESHA <code>target=\"_blank\"</code> ke sath <code>rel=\"noopener noreferrer\"</code> zaroor likhein!",

    pageAnchorsTitle: "4. Internal Page Anchors (Ek Hi Page Par Scroll/Jump Karna)",
    pageAnchorsIntro: "Anchor links se aap ek hi lambe page ke mukhtalif hisson par jump kar sakte hain. Yeh FAQs, Table of Contents, aur Single Page Websites par use hota hai.",
    pageAnchorsHow: "<strong>Tariqa-e-Kaar:</strong><br/>1. Jis hissay par jump karwana ho, us tag ko ek unique <code>id</code> dein (jaise <code>&lt;section id=\"pricing\"&gt;</code>).<br/>2. Link ke <code>href</code> mein Hash Symbol (<code>#</code>) ke sath woh ID likhein (jaise <code>&lt;a href=\"#pricing\"&gt;Pricing Par Jayein&lt;/a&gt;</code>).",

    protocolsTitle: "5. Specialized Links (Email, Phone Calls, SMS & File Download)",
    protocolsIntro: "HTML links sirf web pages ke liye nahi hote. Special protocols se aap direct laptop ya mobile ke apps trigger kar sakte hain:",
    protoMail: "<strong>Email Link (mailto:):</strong> User ke laptop ya phone ki Email App (Gmail/Outlook) khole ga jisme recipient aur subject pehle se likha hoga.",
    protoTel: "<strong>Direct Phone Call (tel:):</strong> Mobile par click karne se direct Phone Dialer khul jayega aur number dial ho jayega.",
    protoSms: "<strong>SMS Message (sms:):</strong> Mobile ka Messaging app khol kar direct text message draft kar dega.",
    protoDownload: "<strong>Force Download File (download):</strong> Browser ko Majboor karta hai ke file browser mein kholne ke bajaye direct Download (save) kare.",

    statesTitle: "6. Links Ke 4 Built-In Interactive States",
    statesIntro: "Browsers links par user ke action ko 4 mukhtalif states mein track karte hain:",
    stateUnvisited: "1. <code>a:link</code> — Unvisited link (Default blue color).",
    stateVisited: "2. <code>a:visited</code> — Visited link (Default purple color).",
    stateHover: "3. <code>a:hover</code> — Jab mouse cursor link ke upar aata hai.",
    stateActive: "4. <code>a:active</code> — Jab click dabaya ja raha ho.",

    bestTitle: "Links Ke Sunehri Asool Aur Accessibility Rules",
    best1: "<strong>KABHI BHI 'Click Here' Ya 'Read More' Mat Likhein:</strong> Link ke andar likha text wazeh aur ba-maani hona chahiye (jaise 'Download 2026 Sales Report PDF' likhein).",
    best2: "<strong>Toote Hue Links (404 Error) Se Bacho:</strong> Apni website ke links check karte rahein.",
    best3: "<strong>Page Shift Ke Liye Buttons Nahi, <a> Tag Use Karein:</strong> Naye page par jane ke liye <a> tag hi best hai.",
    best4: "<strong>Mailto Query Parameters:</strong> Mailto mein Subject aur Body add karne ke liye `?` aur `&` ka sahi istemal karein.",

    nextTitle: "Aage Kya Hai?",
    nextText: "Zabrdaast! Ab aap hyperlinks aur web routing ke expert ban chuke hain. Agle chapter mein hum **HTML Images (`<img>`)** seekhenge!"
  }
};