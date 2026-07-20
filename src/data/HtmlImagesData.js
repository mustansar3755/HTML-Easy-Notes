export const content = {
  en: {
    title: "Mastering HTML Images: The <img> Tag, Attributes, Paths & Responsiveness",
    intro: "Visual content is key to engaging web experiences. The HTML <img> tag allows developers to embed raster graphics, vector illustrations, animated GIFs, and modern formats like WebP or AVIF directly into documents. In this comprehensive guide, we'll cover image syntax, relative/absolute paths, accessibility (alt text), sizing, lazy loading, and modern responsive techniques.",

    // Section 1: Anatomy of img Tag
    imgTitle: "1. The Anatomy of the <img> Tag",
    imgIntro: "The <code>&lt;img&gt;</code> tag is a <strong>self-closing (void) element</strong>, meaning it does not have a closing <code>&lt;/img&gt;</code> tag. It embeds an image into the document via attributes.",
    imgSrcDesc: "<strong>The `src` Attribute (Source):</strong> This is mandatory. It tells the browser where to find the image file (URL or local path). If the path is wrong, the browser displays a broken image icon.",
    imgAnalogy: "🖼️ <strong>Real-World Analogy:</strong> Think of the <code>&lt;img&gt;</code> tag as a empty picture frame on your wall. The <code>src</code> attribute is the photo you put inside the frame, while the <code>alt</code> text is the description written on the back of the photo.",

    // Section 2: Alt Text & Accessibility
    altTitle: "2. The Critical Importance of `alt` Text (Accessibility & SEO)",
    altIntro: "The <code>alt</code> (Alternative Text) attribute describes the content of an image in plain text.",
    altReason1: "<strong>Screen Readers:</strong> Visually impaired users rely on screen readers to read the <code>alt</code> text aloud.",
    altReason2: "<strong>Broken Images:</strong> If an image fails to load (slow connection or bad link), the browser displays the <code>alt</code> text instead.",
    altReason3: "<strong>SEO (Search Engines):</strong> Google Search crawlers cannot 'see' images—they rely on <code>alt</code> text to index image search results.",

    // Section 3: Sizing & Aspect Ratio
    sizeTitle: "3. Image Dimensions: width, height & Aspect Ratio",
    sizeIntro: "Always specify the <code>width</code> and <code>height</code> attributes in HTML to prevent <strong>Cumulative Layout Shift (CLS)</strong>—which happens when a webpage jumps around while images load.",
    sizeRule: "⚡ <strong>Golden Rule:</strong> Define intrinsic dimensions in HTML attributes (without `px`), and control responsive sizing using CSS (`max-width: 100%; height: auto;`).",

    // Section 4: Image Formats
    formatsTitle: "4. Choosing the Right Image Format",
    formatsIntro: "Selecting the correct image format balances visual quality and page load speed:",
    fmtJpeg: "<strong>JPEG / JPG:</strong> Best for photographs with complex colors. High compression, no transparency.",
    fmtPng: "<strong>PNG:</strong> Supports transparent backgrounds. Great for logos, icons, and graphics with sharp text.",
    fmtSvg: "<strong>SVG:</strong> Scalable Vector Graphics. Infinite resolution without quality loss, extremely small file size.",
    fmtWebp: "<strong>WebP / AVIF:</strong> Modern web formats offering 30-50% smaller file sizes compared to JPEG/PNG.",

    // Section 5: Performance Optimization (Lazy Loading)
    loadingTitle: "5. Performance Optimization: loading=\"lazy\"",
    loadingIntro: "By default, browsers download all images immediately when a page opens. The <code>loading=\"lazy\"</code> attribute defers loading off-screen images until the user scrolls near them, saving bandwidth and boosting speed.",

    // Section 6: Responsive Images
    responsiveTitle: "6. Responsive Images (<picture> & srcset)",
    responsiveIntro: "Different devices need different image sizes. Using the <code>&lt;picture&gt;</code> element or <code>srcset</code> attribute allows the browser to serve smaller images to mobile devices and high-res images to desktop displays.",

    // Section 7: Best Practices
    bestTitle: "Golden Rules for Using Images in HTML",
    best1: "<strong>Never leave `alt` empty:</strong> Always write descriptive alternative text unless the image is purely decorative (`alt=\"\"`).",
    best2: "<strong>Compress Images before uploading:</strong> Use tools like TinyPNG or Squoosh to reduce file sizes before hosting.",
    best3: "<strong>Use WebP for Web:</strong> Prefer modern formats over older JPEG/PNG whenever possible.",
    best4: "<strong>Prevent Layout Shifts:</strong> Always include `width` and `height` attributes on `<img>` elements.",

    nextTitle: "What's Next?",
    nextText: "Awesome job! You've mastered web images. Next up: **HTML Audio & Video (`<audio>` & `<video>`)**!"
  },

  ur: {
    title: "HTML Images Mein Maharat: <img> Tag, Attributes, Paths Aur Responsiveness",
    intro: "Websites ko khubsurat aur dilchasp banane me images ka sab se bara kirdar hota hai. HTML ka <img> tag browser ko batata hai ke page par photo, logo, illustration ya GIF kaise dikhana hai. Is guide mein hum <img> tag ki syntax, alt text ki ahemmiyat, image sizing, performance optimization (lazy loading), aur responsive images seekhenge.",

    imgTitle: "1. <img> Tag Ki Anatomy Aur Structure",
    imgIntro: "<code>&lt;img&gt;</code> tag ek <strong>Self-Closing (Void) element</strong> hai, yaani iska koi closing <code>&lt;/img&gt;</code> tag nahi hota.",
    imgSrcDesc: "<strong>`src` Attribute (Source):</strong> Yeh sab se zaroori attribute hai. Yeh browser ko image file ka rasta (URL ya folder path) batata hai. Agar path galat hoga toh broken image icon nazar aaye ga.",
    imgAnalogy: "🖼️ <strong>Real-World Example:</strong> <code>&lt;img&gt;</code> tag ko diwar par latke ek khali photo frame ki tarah sochein. <code>src</code> attribute woh photo hai jo aap frame me lagate hain, jabke <code>alt</code> text woh tafseel hai jo photo ke peeche likhi hoti hai.",

    altTitle: "2. `alt` Text Ki Zaroorat Aur Ahemmiyat (Accessibility & SEO)",
    altIntro: "<code>alt</code> (Alternative Text) attribute image ke andar ki tasveer ko lafzon me bayan karta hai.",
    altReason1: "<strong>Screen Readers:</strong> Na-beena (visually impaired) log screen reader software ke zariye <code>alt</code> text sun kar samajhte hain ke tasveer me kya hai.",
    altReason2: "<strong>Toota Hua Link (Broken Image):</strong> Agar internet slow ho ya image ka link toot jaye, toh browser tasveer ki jagah <code>alt</code> text dikhata hai.",
    altReason3: "<strong>SEO (Google Search):</strong> Search engines tasveeron ko dekh nahi sakte, woh <code>alt</code> text parh kar tasveer ko Google Images me rank karte hain.",

    sizeTitle: "3. Image Ki Size: width, height Aur Aspect Ratio",
    sizeIntro: "HTML me hamesha <code>width</code> aur <code>height</code> attributes specify karein taaki page load hote waqt **Cumulative Layout Shift (CLS)** na ho (yaani page hille na).",
    sizeRule: "⚡ <strong>Sunehra Asool:</strong> HTML attributes me asli size dein (bina `px` ke), aur CSS me `max-width: 100%; height: auto;` se responsive banayein.",

    formatsTitle: "4. Sahi Image Format Ka Intikhab",
    formatsIntro: "Har kisam ki tasveer ke liye sahi format chunna website ki speed ke liye zaroori hai:",
    fmtJpeg: "<strong>JPEG / JPG:</strong> Photos aur ziada colors wali tasveeron ke liye best hai. Transparency support nahi karta.",
    fmtPng: "<strong>PNG:</strong> Transparent background ke liye use hota hai. Logos, icons aur graphics ke liye best hai.",
    fmtSvg: "<strong>SVG:</strong> Scalable Vector Graphics. Iska size jitna bhi bara kar lein quality kharab nahi hoti. File size bohot chhota hota hai.",
    fmtWebp: "<strong>WebP / AVIF:</strong> Naye zamane ke modern formats jo JPEG/PNG se 30-50% chhotay file size me behtar quality dete hain.",

    loadingTitle: "5. Speed Badhane Ka Tariqa: loading=\"lazy\"",
    loadingIntro: "Default me browser page khulte hi saari images download karna shuru kar deta hai. <code>loading=\"lazy\"</code> attribute use karne se jab tak user scroll karke tasveer tak nahi pohnchega, tab tak woh load nahi hogi.",

    responsiveTitle: "6. Responsive Images (<picture> Tag & srcset)",
    responsiveIntro: "Mobile aur Desktop ke liye alag alag size ki tasveerein serve karne ke liye <code>&lt;picture&gt;</code> tag ya <code>srcset</code> attribute use kiya jata hai taaki mobile users ka internet data bache.",

    bestTitle: "Images Ke Sunehri Asool (Golden Rules)",
    best1: "<strong>`alt` attribute ko kabhi khali mat chhorein:</strong> Tasveer ka waazeh text zaroor likhein (sif decorative images me `alt=\"\"` chhor sakte hain).",
    best2: "<strong>Images ko Compress karein:</strong> Website par lagane se pehle TinyPNG ya Squoosh se file size chhota karein.",
    best3: "<strong>Modern WebP Format Use Karein:</strong> Purane JPG/PNG ki jagah WebP ko tarjeeh dein.",
    best4: "<strong>Layout Shift Se Bacho:</strong> HTML me `width` aur `height` zaroor dein.",

    nextTitle: "Aage Kya Hai?",
    nextText: "Zabrdaast! Ab aap web images ke expert ban chuke hain. Agle chapter mein hum **HTML Audio & Video (`<audio>` & `<video>`)** seekhenge!"
  }
};