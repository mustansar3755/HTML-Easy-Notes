export const content = {
  en: {
    title: "HTML Document Structure",
    intro:
      "Every HTML page follows a fixed, predictable skeleton. Browsers rely on this skeleton to understand what the file is, how to read it, and how to display it correctly. Before writing real content, let's understand this structure deeply — it's the same foundation every page you ever build will start from.",

    whatIsTitle: "What is Document Structure?",
    whatIs1:
      "Think of HTML document structure like the <strong>frame of a house</strong>. Before you add rooms, paint, or furniture, you need walls and a roof in the right place. Similarly, before adding real content, every HTML page needs a correct skeleton so the browser knows how to handle it.",
    whatIs2:
      "This skeleton is made up of a few required parts: the <code class='inline-code'>DOCTYPE</code>, the <code class='inline-code'>&lt;html&gt;</code> element, the <code class='inline-code'>&lt;head&gt;</code> section, and the <code class='inline-code'>&lt;body&gt;</code> section. Every single one has a specific job.",

    calloutTitle: "Good to know",
    calloutText:
      "A page can only have <strong>one</strong> <code class='inline-code'>&lt;head&gt;</code> and <strong>one</strong> <code class='inline-code'>&lt;body&gt;</code>, and both must be direct children of <code class='inline-code'>&lt;html&gt;</code>. Getting this structure wrong can cause browsers to render your page unpredictably.",

    doctypeTitle: "The DOCTYPE Declaration",
    doctypeText1:
      "The very first line of any HTML file is the DOCTYPE declaration. It is <strong>not</strong> an HTML tag — it's an instruction to the browser telling it, 'render this page using the modern HTML5 standard.'",
    doctypeText2:
      "Without it, older browsers may switch into <strong>'quirks mode'</strong>, where they guess how to display the page based on outdated rules — often breaking your layout and styling. Writing it guarantees consistent rendering across all modern browsers.",

    htmlElTitle: "The <html> Element",
    htmlElText1:
      "Right after the DOCTYPE comes the <code class='inline-code'>&lt;html&gt;</code> tag, which wraps around the <strong>entire</strong> page content — both the head and the body live inside it.",
    htmlElText2:
      "The <code class='inline-code'>lang</code> attribute is important and often overlooked: it tells browsers and screen readers what language the content is written in. This helps accessibility, search engine indexing, and features like automatic translation prompts.",

    headTitle: "The <head> Section",
    headIntro:
      "The <code class='inline-code'>&lt;head&gt;</code> section contains information <em>about</em> the page — not content directly visible to the user. It's metadata: data about the document itself.",
    metaCharsetTitle: "meta charset",
    metaCharsetText: "Defines the character encoding, ensuring special characters and non-English text display correctly.",
    metaViewportTitle: "meta viewport",
    metaViewportText: "Controls how the page scales on different screen sizes — essential for responsive, mobile-friendly design.",
    titleTagTitle: "title",
    titleTagText: "Sets the text shown in the browser tab and used by search engines as the clickable headline.",
    metaDescTitle: "meta description",
    metaDescText: "A short summary of the page, often shown under the title in search engine results.",
    headNote:
      "None of this content appears directly on the page, but it heavily influences how the page behaves, looks, and performs in search engines.",

    bodyTitle: "The <body> Section",
    bodyText1:
      "Everything a visitor actually <strong>sees and interacts with</strong> lives inside the <code class='inline-code'>&lt;body&gt;</code> tag — headings, paragraphs, images, buttons, forms, links, and every other visible element.",
    bodyText2:
      "While <code class='inline-code'>&lt;head&gt;</code> speaks to the browser and search engines, <code class='inline-code'>&lt;body&gt;</code> speaks to the human being reading the page.",

    commentsTitle: "HTML Comments",
    commentsText:
      "Comments let you leave notes in your code that browsers completely ignore. They're useful for explaining sections, temporarily disabling code while testing, or leaving reminders for your future self.",

    semanticTitle: "Basic Semantic Layout",
    semanticText:
      "Modern HTML encourages using semantic tags instead of generic <code class='inline-code'>&lt;div&gt;</code> tags wherever possible, because semantic tags describe <em>meaning</em>, not just appearance. Using <code class='inline-code'>&lt;header&gt;</code>, <code class='inline-code'>&lt;nav&gt;</code>, <code class='inline-code'>&lt;main&gt;</code>, <code class='inline-code'>&lt;section&gt;</code>, and <code class='inline-code'>&lt;footer&gt;</code> improves accessibility, helps search engines understand your page, and makes your own code easier to maintain.",

    exampleTitle: "Full Example",
    exampleText: "Putting everything together, a complete, correctly structured HTML document looks like this:",

    bestTitle: "Best Practices",
    best1: "Always start with <code class='inline-code'>&lt;!DOCTYPE html&gt;</code>.",
    best2: "Always set the <code class='inline-code'>lang</code> attribute on <code class='inline-code'>&lt;html&gt;</code>.",
    best3: "Never skip the charset and viewport meta tags — they prevent display bugs.",
    best4: "Keep <code class='inline-code'>&lt;head&gt;</code> for metadata only; never put visible content there.",
    best5: "Prefer semantic tags over generic <code class='inline-code'>&lt;div&gt;</code> wrappers when meaning matters.",

    nextTitle: "What You'll Learn Next",
    nextText:
      "Now that you understand the skeleton of an HTML page, we'll move on to tags, elements, and attributes — the building blocks you'll place inside this structure.",
  },
  ur: {
    title: "HTML Document Structure",
    intro:
      "Har HTML page aik fix aur predictable structure follow karta hai. Browser isi structure ki madad se samajhta hai ke file kya hai, usay kaise parhna hai, aur kaise display karna hai. Real content likhne se pehle is structure ko acchi tarah samajhte hain — ye wahi bunyad hai jis se aap ka har future page shuru hoga.",

    whatIsTitle: "Document Structure Kya Hai?",
    whatIs1:
      "HTML document structure ko ghar ke <strong>frame</strong> ki tarah samjho. Rooms, paint ya furniture lagane se pehle deewarain aur chat sahi jagah par honi chahiye. Isi tarah, real content dalne se pehle har HTML page ko sahi skeleton chahiye taake browser samajh sake usay kaise handle karna hai.",
    whatIs2:
      "Ye skeleton kuch zaroori parts se milta hai: <code class='inline-code'>DOCTYPE</code>, <code class='inline-code'>&lt;html&gt;</code> element, <code class='inline-code'>&lt;head&gt;</code> section, aur <code class='inline-code'>&lt;body&gt;</code> section. In sab ka apna specific kaam hai.",

    calloutTitle: "Kaam ki baat",
    calloutText:
      "Aik page mein sirf <strong>aik</strong> <code class='inline-code'>&lt;head&gt;</code> aur <strong>aik</strong> <code class='inline-code'>&lt;body&gt;</code> ho sakta hai, aur dono <code class='inline-code'>&lt;html&gt;</code> ke direct children hone chahiye. Agar ye structure ghalat ho to browser page ko unpredictable tareeqay se render kar sakta hai.",

    doctypeTitle: "DOCTYPE Declaration",
    doctypeText1:
      "Kisi bhi HTML file ki sab se pehli line DOCTYPE declaration hoti hai. Ye koi HTML tag <strong>nahi</strong> hai — ye browser ke liye instruction hai jo batati hai, 'is page ko modern HTML5 standard ke mutabiq render karo.'",
    doctypeText2:
      "Agar ye na likhein to purane browsers <strong>'quirks mode'</strong> mein chale jate hain, jahan wo outdated rules ke mutabiq guess karte hain page kaise dikhana hai — jis se aksar layout aur styling kharab ho jati hai. Ise likhne se sab modern browsers mein consistent rendering guarantee hoti hai.",

    htmlElTitle: "<html> Element",
    htmlElText1:
      "DOCTYPE ke foran baad <code class='inline-code'>&lt;html&gt;</code> tag aata hai, jo poore page ke content ko wrap karta hai — head aur body dono isi ke andar hote hain.",
    htmlElText2:
      "<code class='inline-code'>lang</code> attribute bohat important hai lekin aksar nazar-andaz kar diya jata hai: ye browsers aur screen readers ko batata hai content kis zaban mein hai. Ye accessibility, search engine indexing, aur automatic translation jaisi features mein madad karta hai.",

    headTitle: "<head> Section",
    headIntro:
      "<code class='inline-code'>&lt;head&gt;</code> section mein page ke baray mein information hoti hai, na ke wo content jo user ko seedha nazar aata hai. Ye metadata hoti hai — yani document ke baray mein data.",
    metaCharsetTitle: "meta charset",
    metaCharsetText: "Character encoding define karta hai, taake special characters aur non-English text sahi tarah display ho.",
    metaViewportTitle: "meta viewport",
    metaViewportText: "Ye control karta hai ke page mukhtalif screen sizes par kaise scale ho — mobile-friendly design ke liye zaroori.",
    titleTagTitle: "title",
    titleTagText: "Wo text set karta hai jo browser tab mein dikhta hai aur search engines clickable headline ke tor par istemal karte hain.",
    metaDescTitle: "meta description",
    metaDescText: "Page ka short summary, jo aksar search results mein title ke neeche dikhta hai.",
    headNote:
      "Ye content seedha page par nazar nahi aata, lekin is baat par gehra asar dalta hai ke page kaise behave karta hai aur search engines mein kaisa perform karta hai.",

    bodyTitle: "<body> Section",
    bodyText1:
      "Jo bhi cheez visitor ko actually <strong>nazar aati hai aur wo interact kar sakta hai</strong>, wo sab <code class='inline-code'>&lt;body&gt;</code> tag ke andar hoti hai — headings, paragraphs, images, buttons, forms, links, aur har dusra visible element.",
    bodyText2:
      "<code class='inline-code'>&lt;head&gt;</code> browser aur search engines se baat karta hai, jabke <code class='inline-code'>&lt;body&gt;</code> us insaan se baat karta hai jo page parh raha hai.",

    commentsTitle: "HTML Comments",
    commentsText:
      "Comments aap ko apne code mein notes likhne dete hain jinhein browser bilkul ignore kar deta hai. Ye sections explain karne, testing ke dauran code temporarily disable karne, ya future reminders chhorne ke liye useful hote hain.",

    semanticTitle: "Basic Semantic Layout",
    semanticText:
      "Modern HTML jahan mumkin ho, generic <code class='inline-code'>&lt;div&gt;</code> tags ki bajaye semantic tags istemal karne ki hosla afzai karta hai, kyunke ye sirf appearance nahi balke <em>meaning</em> bhi batate hain. <code class='inline-code'>&lt;header&gt;</code>, <code class='inline-code'>&lt;nav&gt;</code>, <code class='inline-code'>&lt;main&gt;</code>, <code class='inline-code'>&lt;section&gt;</code>, aur <code class='inline-code'>&lt;footer&gt;</code> use karne se accessibility behtar hoti hai, search engines ko clear samajh milti hai, aur code maintain karna asaan ho jata hai.",

    exampleTitle: "Poora Example",
    exampleText: "Sab kuch mila kar, aik mukammal aur sahi tarah structured HTML document kuch is tarah dikhta hai:",

    bestTitle: "Best Practices",
    best1: "Hamesha <code class='inline-code'>&lt;!DOCTYPE html&gt;</code> se shuru karein.",
    best2: "<code class='inline-code'>&lt;html&gt;</code> par <code class='inline-code'>lang</code> attribute zaroor set karein.",
    best3: "Charset aur viewport meta tags kabhi skip na karein — ye display bugs se bachate hain.",
    best4: "<code class='inline-code'>&lt;head&gt;</code> sirf metadata ke liye rakhein; wahan kabhi visible content na dalein.",
    best5: "Jahan meaning matter kare, generic <code class='inline-code'>&lt;div&gt;</code> wrappers ki bajaye semantic tags istemal karein.",

    nextTitle: "Aage Kya Seekhoge",
    nextText:
      "Ab jab aap HTML page ka skeleton samajh chuke hain, agla step tags, elements, aur attributes hoga — wo building blocks jo aap is structure ke andar rakhenge.",
  },
};