export const content = {
  en: {
    title: "Introduction to HTML",
    intro:
      "HTML (HyperText Markup Language) is the standard language used to create the structure of every webpage. Before we dive into tags and syntax, let's understand what HTML actually is and why it matters.",
    
    whatIsTitle: "What is HTML?",
    whatIs1:
      "HTML gives structure to a webpage — think of it as the <strong>skeleton of a house</strong>. Just like bones hold the body together, HTML elements hold your webpage content (like text, images, and inputs) in place.",
    whatIs2:
      "On its own, HTML has no styling — that's where <strong>CSS</strong> comes in — and no interactivity, which is <strong>JavaScript's</strong> job. HTML is purely about content and structure.",
    
    calloutTitle: "Good to know",
    calloutText:
      "HTML is <strong>NOT</strong> a programming language because it doesn't have logic, variables, or loops. It is a <code class='inline-code'>Markup</code> language, which means it simply marks up text to tell the browser how to display it. HTML files use the <code class='inline-code'>.html</code> extension and can be opened directly in any web browser — no installation required to get started.",
    
    threeTitle: "The Three Pillars of Web Development",
    threeIntro:
      "Every website you visit is built using three core technologies, and each one has a specific job:",
    pillar1Title: "HTML — Structure",
    pillar1Text: "Defines the <strong>content and layout skeleton</strong> of the page (e.g., adding a button).",
    pillar2Title: "CSS — Style",
    pillar2Text: "Controls <strong>colors, fonts, spacing</strong>, and overall appearance (e.g., making the button blue and rounded).",
    pillar3Title: "JavaScript — Behavior",
    pillar3Text: "Adds <strong>interactivity, logic</strong>, and dynamic functionality (e.g., making something happen when you click the button).",
    
    conceptTitle: "Important Concept: Tag vs Element",
    conceptIntro: "New developers often use <em>'Tag'</em> and <em>'Element'</em> interchangeably, but there is a slight difference:",
    conceptTag: "<strong>Tag:</strong> Just the markup characters like <code class='inline-code'>&lt;p&gt;</code> (opening tag) or <code class='inline-code'>&lt;/p&gt;</code> (closing tag).",
    conceptElement: "<strong>Element:</strong> The complete package. It includes the opening tag, the content inside, and the closing tag (e.g., <code class='inline-code'>&lt;p&gt;Hello World&lt;/p&gt;</code> is an HTML element).",
    
    howBrowserTitle: "How Do Browsers Read HTML?",
    howBrowserText: "Web browsers (like Chrome, Firefox, or Safari) cannot run raw code. Instead, they read your HTML file from top to bottom, parse the tags, and translate them into a visual webpage. This process is called <strong>rendering</strong>. If you make a mistake in your HTML, the browser will try its best to display it anyway, but the layout might break!",

    whyTitle: "Why Learn HTML?",
    why1: "It's the <strong>foundation of every website</strong> on the internet — without it, you cannot build for the web.",
    why2: "Super easy to learn — no prior programming experience or math skills needed to start.",
    why3: "Required <strong>prerequisite</strong> before moving on to CSS, JavaScript, React, or backend development.",
    why4: "Helps with <strong>SEO (Search Engine Optimization)</strong> and Web Accessibility, making websites rank better on Google.",
    why5: "Understanding HTML helps you debug and read any webpage's source code using <strong>Browser Developer Tools</strong>.",
    
    historyTitle: "A Quick Look at HTML's History",
    historyText:
      "HTML was created by <code class='inline-code'>Tim Berners-Lee</code> in <code class='inline-code'>1991</code> as a way to share documents over the early internet. Since then it has evolved through several versions. The most famous breakthrough was <code class='inline-code'>HTML5 (released in 2014)</code>, which is the current standard. It brought native support for audio, video, and semantic layout tags, completely replacing old plugins like Adobe Flash.",
    
    nextTitle: "What You'll Learn Next",
    nextText:
      "In the upcoming sections, we'll cover HTML document structure, tags and elements, attributes, forms, tables, semantic HTML, and media embedding — each explained with simple, practical examples.",
  },
  ur: {
    title: "HTML Ka Taaruf",
    intro:
      "HTML (HyperText Markup Language) ek standard language hai jo har webpage ka structure banane ke liye use hoti hai. Tags aur syntax mein jaane se pehle, samajhte hain ke HTML asal mein hai kya aur ye kyun important hai.",
    
    whatIsTitle: "HTML Kya Hai?",
    whatIs1:
      "HTML webpage ko structure deta hai — ise ghar ke <strong>khaake (skeleton)</strong> ki tarah samjho. Jis tarah haddiyan jism ko jor kar rakhti hain, bilkul waise hi HTML elements aapke webpage ke content (jaise text, images aur inputs) ko apni jagah par barkarar rakhte hain.",
    whatIs2:
      "Akele HTML mein koi styling nahi hoti — wo kaam <strong>CSS</strong> karta hai — aur na hi koi interactivity hoti, wo <strong>JavaScript</strong> ka kaam hai. HTML sirf content aur structure ke baare mein hai.",
    
    calloutTitle: "Kaam ki baat",
    calloutText:
      "HTML koi <strong>programming language nahi hai</strong> kyunki isme logic, variables ya loops nahi hote. Ye ek <code class='inline-code'>Markup</code> language hai, jiska matlab hai ke ye sirf text ko mark karti hai taake browser ko pata chale ke use kaise display karna hai. HTML files <code class='inline-code'>.html</code> extension use karti hain aur inhe kisi bhi web browser mein seedha khola ja sakta hai — start karne ke liye kisi installation ki zaroorat nahi.",
    
    threeTitle: "Web Development ke Teen Bunyadi Pillars",
    threeIntro:
      "Jo bhi website tum visit karte ho wo teen core technologies se bani hoti hai, aur har ek ka apna kaam hota hai:",
    pillar1Title: "HTML — Structure",
    pillar1Text: "Page ka <strong>content aur layout ka khaaka</strong> define karta hai (e.g., page par button lagana).",
    pillar2Title: "CSS — Style",
    pillar2Text: "Colors, fonts, spacing aur <strong>overall look control</strong> karta hai (e.g., button ko blue aur rounded banana).",
    pillar3Title: "JavaScript — Behavior",
    pillar3Text: "<strong>Interactivity, logic</strong> aur dynamic functionality add karta hai (e.g., button click karne par alert show karwana).",
    
    conceptTitle: "Zaroori Concept: Tag aur Element mein kya farq hai?",
    conceptIntro: "Aksar naye developers <em>'Tag'</em> aur <em>'Element'</em> ko ek hi samajhte hain, lekin inme thora sa farq hai:",
    conceptTag: "<strong>Tag:</strong> Sirf markup characters ko kehte hain jaise <code class='inline-code'>&lt;p&gt;</code> (opening tag) ya <code class='inline-code'>&lt;/p&gt;</code> (closing tag).",
    conceptElement: "<strong>Element:</strong> Ye poora package hota hai. Isme opening tag, uske andar ka content, aur closing tag teeno shamil hote hain (jaise <code class='inline-code'>&lt;p&gt;Hello World&lt;/p&gt;</code> ek HTML element hai).",

    howBrowserTitle: "Browsers HTML ko Kaise Read Karte Hain?",
    howBrowserText: "Web browsers (jaise Chrome, Firefox, ya Safari) raw code ko nahi chala sakte. Wo aapki HTML file ko upar se neeche tak read karte hain, tags ko samajhte hain, aur unhe ek khoobsurat webpage mein convert karte hain. Is process ko <strong>rendering</strong> kehte hain. Agar aap HTML mein koi galti karenge, to browser koshish karega ke phir bhi page dikha de, lekin layout kharab ho sakta hai!",

    whyTitle: "HTML Kyun Seekhein?",
    why1: "Ye internet ki har website ki <strong>bunyaad (foundation)</strong> hai — iske bina aap web development nahi seekh sakte.",
    why2: "Seekhna bohat aasan hai — koi pichla programming experience ya math skills zaroori nahi hain.",
    why3: "CSS, JavaScript, React, aur Backend development seekhne ke liye ye <strong>pehla aur sabse zaroori qadam</strong> hai.",
    why4: "HTML seekhne se aap <strong>SEO (Search Engine Optimization)</strong> aur Web Accessibility behtar kar sakte hain taake aapki site Google par top par aaye.",
    why5: "HTML samajhne se aap browser ke <strong>Developer Tools</strong> use karke kisi bhi webpage ka source code padh aur debug kar sakte ho.",
    
    historyTitle: "HTML Ki Tareekh Par Aik Nazar",
    historyText:
      "HTML ko <code class='inline-code'>Tim Berners-Lee</code> ne <code class='inline-code'>1991</code> mein banaya tha taake early internet par documents share kiye ja sakein. Tab se ye kai versions se guzra hai. Sab se bara badlao <code class='inline-code'>HTML5 (jo 2014 mein aaya)</code> ke sath aaya, jo is waqt ka standard hai. Isne bina kisi extra plugin (jaise Adobe Flash) ke audio, video aur semantic tags ko chalane ki native sahulat di.",
    
    nextTitle: "Aage Kya Seekhoge",
    nextText:
      "Agle sections mein hum HTML document structure, tags aur elements, attributes, forms, tables, semantic HTML, aur media embedding cover karenge — har topic simple aur practical examples ke sath samjhaya jayega.",
  },
};