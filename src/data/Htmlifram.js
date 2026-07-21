export const content = {
  en: {
    title: "HTML iFrames: Embedding External Content Like a Pro",
    intro:
      "An iFrame (Inline Frame) allows you to embed another HTML document or external content — such as interactive Google Maps, YouTube videos, or third-party widgets — directly inside your webpage without redirecting the user.",

    // Section 1: Basic iFrame
    iframeTitle: "1. What is an iFrame? — The Basics",
    iframeIntro:
      "The <code>&lt;iframe&gt;</code> element creates an inline window on your page. The <code>src</code> attribute specifies the URL of the external page or resource you want to embed.",
    iframeAnalogy:
      "🪟 <strong>Real-World Example:</strong> Think of an iFrame like a physical window on a wall — through it, you can look into a completely separate room (external website) while standing inside your own home.",
    iframeAttributesTitle: "Essential iFrame Attributes:",
    iframeAttrSrc:
      "<strong>src:</strong> The source URL of the page or media you want to load.",
    iframeAttrWidthHeight:
      "<strong>width / height:</strong> Defines the dimensions of the frame (can be in pixels or percentages).",
    iframeAttrTitle: "<strong>title:</strong> Crucial for accessibility! Screen readers read this to inform users about the content inside the iFrame.",
    iframeAttrBorder:
      "<strong>style=\"border: none;\":</strong> Removes the default browser border around the iframe.",

    // Section 2: YouTube Embed
    youtubeTitle: "2. Embedding YouTube Videos",
    youtubeIntro:
      "Instead of hosting huge video files on your own server, hosting them on YouTube and embedding them via an iFrame is industry standard. YouTube provides a pre-built iFrame embed code with useful parameters.",
    youtubeAnalogy:
      "📹 <strong>Pro Tip:</strong> Use YouTube's share option to copy the exact <code>&lt;iframe&gt;</code> snippet, or customize its attributes like <code>allowfullscreen</code>.",
    youtubeAttributesTitle: "Key Video Embed Attributes:",
    youtubeAttrAllow:
      "<strong>allow:</strong> Controls permissions like <code>accelerometer</code>, <code>autoplay</code>, <code>clipboard-write</code>, and <code>encrypted-media</code>.",
    youtubeAttrAllowFullscreen:
      "<strong>allowfullscreen:</strong> Enables the viewer to expand the YouTube video to full screen.",

    // Section 3: Google Maps Embed
    mapTitle: "3. Embedding Interactive Google Maps",
    mapIntro:
      "Adding a map to a 'Contact Us' or 'Location' page helps visitors find your physical business location effortlessly. Google Maps lets you generate embeddable iFrames for any location.",
    mapAnalogy:
      "🗺️ <strong>Real-World Example:</strong> A business website showing a live, draggable map on their contact page rather than just a plain text address.",
    mapAttributesTitle: "Important Map Attributes:",
    mapAttrLoading:
      "<strong>loading=\"lazy\":</strong> Delays loading the map until the user scrolls near it, improving page load speed.",
    mapAttrReferrerpolicy:
      "<strong>referrerpolicy:</strong> Controls how much referrer information is sent along with the request.",

    // Section 4: Security & Sandbox
    securityTitle: "4. Security & Best Practices — The sandbox Attribute",
    securityIntro:
      "Embedding external sites carries security risks (like malicious scripts). The <code>sandbox</code> attribute applies extra restrictions to the content inside the iFrame.",
    securityRule:
      "🔒 <strong>SECURITY FIRST:</strong> Always use <code>sandbox</code> when embedding untrusted third-party content. Leaving it empty disables all scripts, forms, and popups.",
    securityFlagsTitle: "Common Sandbox Permission Flags:",
    securityAllowScripts:
      "<strong>allow-scripts:</strong> Permits script execution inside the frame.",
    securityAllowForms:
      "<strong>allow-forms:</strong> Allows form submission within the frame.",
    securityAllowSameOrigin:
      "<strong>allow-same-origin:</strong> Allows the frame content to retain its origin features.",

    // Section 5: Best Practices
    bestTitle: "Golden Rules for iFrames",
    best1:
      "<strong>Always Add a Title Attribute:</strong> Screen reader users rely on <code>title=\"...\"</code> to understand what the frame contains.",
    best2:
      "<strong>Use Lazy Loading:</strong> Add <code>loading=\"lazy\"</code> for maps and non-critical embeds to optimize website loading speed.",
    best3:
      "<strong>Secure External Embeds:</strong> Use the <code>sandbox</code> attribute whenever embedding content from untrusted sources.",
    best4:
      "<strong>Make Frames Responsive:</strong> Use CSS (like aspect-ratio or wrapper containers) to ensure embedded maps and videos look great on mobile devices.",
    nextTitle: "What's Next?",
    nextText:
      "Awesome! You now know how to integrate videos, maps, and external pages into your site. In the next section, we'll dive deeper into HTML Forms and input handling!",
  },

  ur: {
    title: "HTML iFrames: External Content Embed Karna Seekhein",
    intro:
      "Ek iFrame (Inline Frame) aapko kisi doosri HTML document ya external content — jaise interactive Google Maps, YouTube videos, ya third-party widgets — ko apni webpage mein bina user ko redirect kiye embed karne ki ijazat deta hai.",

    // Section 1: Basic iFrame
    iframeTitle: "1. iFrame Kya Hai? — Bunyadi Baatein",
    iframeIntro:
      "<code>&lt;iframe&gt;</code> element aapke page par ek inline window banata hai. Iska <code>src</code> attribute us external page ya media ka URL batata hai jo aap embed karna chahte hain.",
    iframeAnalogy:
      "🪟 <strong>Real-World Example:</strong> Ek iFrame ko kamre ki deewar par lagi khidki samjhein — iske zariye aap apne ghar ke andar rehte huwy bahar ki doosri duniya (external website) dekh sakte hain.",
    iframeAttributesTitle: "Ahem iFrame Attributes:",
    iframeAttrSrc:
      "<strong>src:</strong> Woh URL jise aap load ya display karna chahte hain.",
    iframeAttrWidthHeight:
      "<strong>width / height:</strong> Frame ka size pixels ya percentages mein set karta hai.",
    iframeAttrTitle: "<strong>title:</strong> Accessibility ke liye bohot zaroori! Screen readers isay parh kar blind users ko bataate hain ke frame mein kya hai.",
    iframeAttrBorder:
      "<strong>style=\"border: none;\":</strong> Browser ka default border khatam karne ke liye use hota hai.",

    // Section 2: YouTube Embed
    youtubeTitle: "2. YouTube Videos Embed Karna",
    youtubeIntro:
      "Apne server par bhari video files host karne ki bajaye, unhein YouTube par upload karke iFrame se embed karna professional tareeqa hai. YouTube aapko direct iFrame embed code deta hai.",
    youtubeAnalogy:
      "📹 <strong>Pro Tip:</strong> YouTube par Share button daba kar tayyar <code>&lt;iframe&gt;</code> code copy karein, aur uske attributes ko zaroorat ke mutabiq adjust karein.",
    youtubeAttributesTitle: "Video Embed Ke Ahem Attributes:",
    youtubeAttrAllow:
      "<strong>allow:</strong> Feature permissions controls karta hai jaise <code>autoplay</code>, <code>accelerometer</code>, aur <code>encrypted-media</code>.",
    youtubeAttrAllowFullscreen:
      "<strong>allowfullscreen:</strong> User ko video fullscreen mode mein dekhne ki permission deta hai.",

    // Section 3: Google Maps Embed
    mapTitle: "3. Interactive Google Maps Embed Karna",
    mapIntro:
      "Apni website ke 'Contact Us' page par live Google Map lagana visitors ke liye location dhoondna aasan bana deta hai. Google Maps asani se embeddable iFrame code generate karta hai.",
    mapAnalogy:
      "🗺️ <strong>Real-World Example:</strong> Kisi shop ki website par sirf address likhne ke bajaye ek live, draggable map dikhana jise user zoom bhi kar sake.",
    mapAttributesTitle: "Google Maps Ke Ahem Attributes:",
    mapAttrLoading:
      "<strong>loading=\"lazy\":</strong> Map ko tab tak load nahi karta jab tak user scroll karke wahan na pohnch jaye, jisse page speed behtar hoti hai.",
    mapAttrReferrerpolicy:
      "<strong>referrerpolicy:</strong> Request ke sath janay wali security aur referrer information ko control karta hai.",

    // Section 4: Security & Sandbox
    securityTitle: "4. Security Aur Best Practices — sandbox Attribute",
    securityIntro:
      "Doosri websites ka content embed karte waqt security risk ho sakta hai. <code>sandbox</code> attribute iFrame ke andar chalne wale content par restrictions lagata hai.",
    securityRule:
      "🔒 <strong>SECURITY PEHLE:</strong> Kisi bhi ghair-muta'aliq ya untrusted source se content embed karte waqt <code>sandbox</code> zaroor use karein. Khali sandbox tag tamaam scripts aur forms ko block kar deta hai.",
    securityFlagsTitle: "Ahem Sandbox Permissions:",
    securityAllowScripts:
      "<strong>allow-scripts:</strong> Frame ke andar JavaScript chalane ki ijazat deta hai.",
    securityAllowForms:
      "<strong>allow-forms:</strong> Frame ke andar forms submit karne ki permission deta hai.",
    securityAllowSameOrigin:
      "<strong>allow-same-origin:</strong> Frame ko apni asli origin policies retain karne deta hai.",

    // Section 5: Best Practices
    bestTitle: "iFrames Ke Sunehri Asool",
    best1:
      "<strong>Hamesha title Attribute Lagayein:</strong> Screen reader users ke liye <code>title=\"...\"</code> likhna accessibility ke liye zaroori hai.",
    best2:
      "<strong>Lazy Loading Ka Istemal Karein:</strong> Maps aur bhaari embeds par <code>loading=\"lazy\"</code> use karein taake website fast load ho.",
    best3:
      "<strong>Security Ka Khayal Rakhein:</strong> Third-party code embed karte waqt <code>sandbox</code> attribute istemal karein.",
    best4:
      "<strong>Responsive Design Banayein:</strong> CSS se frame width 100% set karein taake mobile screens par layout kharab na ho.",
    nextTitle: "Aage Kya Hai?",
    nextText:
      "Shabash! Ab aap videos, maps aur external pages embed karna seekh chuke hain. Agle chapter mein hum HTML Forms aur input controls ko tafseel se explore karenge!",
  },
};