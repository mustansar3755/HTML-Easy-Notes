export const content = {
  en: {
    title: "HTML Audio & Video Elements: Embedding Media Like a Pro",
    intro:
      "Modern websites are rarely just text and images — podcasts, background music, tutorial clips, and promotional videos are everywhere. HTML gives us two dedicated, native tags for this: <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>. In this guide, we'll cover their attributes, the fallback <code>&lt;source&gt;</code> tag for cross-browser support, captions via <code>&lt;track&gt;</code>, and the best practices professionals actually follow.",

    // Section 1: Audio Element
    audioTitle: "1. The <audio> Element — Embedding Sound",
    audioIntro:
      "The <code>&lt;audio&gt;</code> tag embeds sound content — music, podcasts, voice notes — directly into a webpage without needing a third-party plugin. On its own it's invisible; you need the <code>controls</code> attribute to actually show a playable UI (play button, volume, seek bar).",
    audioAnalogy:
      "🎧 <strong>Real-World Example:</strong> Think of a podcast player embedded on a blog page — that entire play/pause/seek bar UI is generated automatically by the browser once you add <code>controls</code>.",
    audioAttributesTitle: "Key <audio> Attributes:",
    audioAttrControls:
      "<strong>controls:</strong> Shows the browser's default play/pause/volume UI. Without this, the audio is embedded but invisible and unplayable by the user.",
    audioAttrAutoplay:
      "<strong>autoplay:</strong> Starts playing as soon as the page loads. ⚠️ Most modern browsers (Chrome, Safari) block autoplay with sound unless it's also <code>muted</code> — this is a browser policy, not an HTML bug.",
    audioAttrLoop:
      "<strong>loop:</strong> Restarts the audio automatically once it finishes — useful for background music loops.",
    audioAttrMuted:
      "<strong>muted:</strong> Starts the audio muted by default. Commonly paired with <code>autoplay</code> to satisfy browser autoplay policies.",
    audioAttrPreload:
      "<strong>preload:</strong> Hints how much to load in advance — <code>auto</code> (load whole file), <code>metadata</code> (just duration/size), or <code>none</code> (load nothing until play is pressed).",

    // Section 2: Video Element
    videoTitle: "2. The <video> Element — Embedding Movies & Clips",
    videoIntro:
      "The <code>&lt;video&gt;</code> tag works almost identically to <code>&lt;audio&gt;</code> but renders a visible video frame instead of just an audio bar. It supports all the same playback attributes, plus a few visual-specific ones.",
    videoAnalogy:
      "📺 <strong>Real-World Example:</strong> A tutorial video embedded on a course page, or the background hero video on a landing page — both are native <code>&lt;video&gt;</code> elements under the hood.",
    videoAttributesTitle: "Key <video>-Specific Attributes:",
    videoAttrPoster:
      "<strong>poster:</strong> An image shown before the video starts playing (the 'thumbnail'). Without it, the browser shows a blank black frame until playback begins.",
    videoAttrWidthHeight:
      "<strong>width / height:</strong> Sets the video's display dimensions in pixels, preventing layout shift while the video loads.",
    videoAttrPlaysinline:
      "<strong>playsinline:</strong> On mobile browsers (especially iOS Safari), this stops the video from auto-expanding into fullscreen mode when played.",
    videoAttrBgNote:
      "💡 <strong>Common Pattern — Background Video:</strong> <code>autoplay muted loop playsinline</code> together create the silent, looping background videos you see on modern landing pages.",

    // Section 3: Source Tag
    sourceTitle: "3. The <source> Tag — Cross-Browser Format Fallback",
    sourceIntro:
      "Not every browser supports every video/audio format (MP4, WebM, OGG). Instead of relying on a single <code>src</code> attribute, professionals nest multiple <code>&lt;source&gt;</code> tags inside <code>&lt;audio&gt;</code>/<code>&lt;video&gt;</code>, each pointing to a different file format.",
    sourceRule:
      "⚠️ <strong>ORDER MATTERS:</strong> The browser reads <code>&lt;source&gt;</code> tags top to bottom and plays the <strong>first one</strong> it's able to support — so list your most preferred/efficient format first (e.g., WebM before MP4).",
    sourceFallbackText:
      "Any plain text placed after the <code>&lt;source&gt;</code> tags (but still inside <code>&lt;video&gt;</code>/<code>&lt;audio&gt;</code>) only displays if the browser supports <strong>none</strong> of the provided formats — this is your accessibility fallback message.",

    // Section 4: Track Element
    trackTitle: "4. The <track> Element — Captions & Subtitles",
    trackIntro:
      "The <code>&lt;track&gt;</code> tag adds timed text tracks to a <code>&lt;video&gt;</code> — most commonly subtitles or captions, read from a separate <code>.vtt</code> (WebVTT) file. It's a self-closing tag placed inside <code>&lt;video&gt;</code>, right alongside your <code>&lt;source&gt;</code> tags.",
    trackAnalogy:
      "🎬 <strong>Real-World Example:</strong> Turning on English or Urdu subtitles on a streaming platform — that toggle is powered by exactly this kind of <code>&lt;track&gt;</code> setup.",
    trackKindTitle: "The kind Attribute — Track Types:",
    trackKindSubtitles:
      "<strong>subtitles:</strong> Translated dialogue, assuming the viewer can hear but doesn't understand the language.",
    trackKindCaptions:
      "<strong>captions:</strong> Same-language transcript including sound effects and speaker names — built for deaf/hard-of-hearing viewers.",
    trackKindDescriptions:
      "<strong>descriptions:</strong> Narrated descriptions of visual events, for visually impaired users.",
    trackKindChapters:
      "<strong>chapters:</strong> Defines navigable chapter markers for the video's built-in seek bar.",

    // Section 5: Best Practices
    bestTitle: "Golden Rules for Audio & Video",
    best1:
      "<strong>Always Provide Multiple Formats:</strong> Use at least two <code>&lt;source&gt;</code> tags (e.g., WebM + MP4) to guarantee playback across all major browsers.",
    best2:
      "<strong>Never Autoplay With Sound:</strong> It's both a poor user experience and actively blocked by most browsers. Only use <code>autoplay</code> alongside <code>muted</code>.",
    best3:
      "<strong>Always Set a poster for Video:</strong> It improves perceived performance and avoids the jarring blank-black-frame flash before playback starts.",
    best4:
      "<strong>Add Captions for Accessibility:</strong> A <code>&lt;track kind=\"captions\"&gt;</code> isn't optional polish — it's essential for hearing-impaired users and SEO (search engines can index caption text).",
    nextTitle: "What's Next?",
    nextText:
      "Great work! You now know how to embed rich media the professional way. In the next chapter, we'll explore HTML iFrames — how to embed entire external webpages, maps, and YouTube players directly inside your own page!",
  },

  ur: {
    title: "HTML Audio Aur Video Elements: Media Embed Karna Seekhein",
    intro:
      "Aaj kal websites sirf text aur images tak mehdood nahi rehtin — podcasts, background music, tutorial clips, aur promotional videos har jagah hain. HTML humein iske liye 2 dedicated native tags deta hai: <code>&lt;audio&gt;</code> aur <code>&lt;video&gt;</code>. Is guide mein hum inke attributes, cross-browser support ke liye <code>&lt;source&gt;</code> tag, captions ke liye <code>&lt;track&gt;</code>, aur professional best practices seekhenge.",

    // Section 1: Audio Element
    audioTitle: "1. <audio> Element — Sound Embed Karna",
    audioIntro:
      "<code>&lt;audio&gt;</code> tag sound content — music, podcasts, voice notes — ko directly webpage mein embed karta hai, bina kisi third-party plugin ke. Apne aap yeh invisible hota hai; player UI (play button, volume, seek bar) dikhane ke liye <code>controls</code> attribute lazmi chahiye.",
    audioAnalogy:
      "🎧 <strong>Real-World Example:</strong> Kisi blog page par embedded podcast player socho — woh poora play/pause/seek bar UI browser khud generate karta hai jab aap <code>controls</code> lagate hain.",
    audioAttributesTitle: "Ahem <audio> Attributes:",
    audioAttrControls:
      "<strong>controls:</strong> Browser ka default play/pause/volume UI dikhata hai. Iske bagair audio embed to hoga lekin user ke liye invisible aur unplayable hoga.",
    audioAttrAutoplay:
      "<strong>autoplay:</strong> Page load hote hi audio khud chalne lagta hai. ⚠️ Zyada tar modern browsers (Chrome, Safari) sound ke sath autoplay ko block kar dete hain jab tak <code>muted</code> bhi na ho — yeh browser ki policy hai, HTML ka bug nahi.",
    audioAttrLoop:
      "<strong>loop:</strong> Audio khatam hote hi dobara se khud shuru ho jata hai — background music loops ke liye useful.",
    audioAttrMuted:
      "<strong>muted:</strong> Audio ko default mein muted state se shuru karta hai. Aksar <code>autoplay</code> ke sath mila kar use hota hai taake browser policy follow ho.",
    audioAttrPreload:
      "<strong>preload:</strong> Batata hai ke kitna data pehle se load karna hai — <code>auto</code> (poori file load), <code>metadata</code> (sirf duration/size), ya <code>none</code> (play dabane tak kuch load nahi).",

    // Section 2: Video Element
    videoTitle: "2. <video> Element — Movies Aur Clips Embed Karna",
    videoIntro:
      "<code>&lt;video&gt;</code> tag bilkul <code>&lt;audio&gt;</code> ki tarah kaam karta hai, bas sirf audio bar ki bajaye ek visible video frame dikhata hai. Yeh wohi playback attributes support karta hai, plus kuch visual-specific attributes bhi.",
    videoAnalogy:
      "📺 <strong>Real-World Example:</strong> Kisi course page par embedded tutorial video, ya landing page ka background hero video — dono asal mein native <code>&lt;video&gt;</code> elements hi hote hain.",
    videoAttributesTitle: "Ahem <video>-Specific Attributes:",
    videoAttrPoster:
      "<strong>poster:</strong> Ek image jo video chalne se pehle dikhai jati hai (thumbnail). Iske bagair, playback shuru hone tak browser sirf khali black frame dikhata hai.",
    videoAttrWidthHeight:
      "<strong>width / height:</strong> Video ka display size pixels mein set karta hai, taake video load hote waqt layout shift na ho.",
    videoAttrPlaysinline:
      "<strong>playsinline:</strong> Mobile browsers (khaas kar iOS Safari) mein, yeh video ko play hote hi automatically fullscreen mein expand hone se rokta hai.",
    videoAttrBgNote:
      "💡 <strong>Common Pattern — Background Video:</strong> <code>autoplay muted loop playsinline</code> ek sath istemal karke wahi silent, looping background videos bante hain jo aap modern landing pages par dekhte hain.",

    // Section 3: Source Tag
    sourceTitle: "3. <source> Tag — Cross-Browser Format Fallback",
    sourceIntro:
      "Har browser har video/audio format (MP4, WebM, OGG) support nahi karta. Sirf ek <code>src</code> attribute par depend karne ki bajaye, professionals <code>&lt;audio&gt;</code>/<code>&lt;video&gt;</code> ke andar multiple <code>&lt;source&gt;</code> tags nest karte hain, har ek alag file format ki taraf point karta hua.",
    sourceRule:
      "⚠️ <strong>TARTEEB AHEM HAI:</strong> Browser <code>&lt;source&gt;</code> tags ko upar se neeche parhta hai aur <strong>pehla</strong> woh format chalata hai jo woh support kar sake — isliye apna best/efficient format pehle likhein (jaise WebM, phir MP4).",
    sourceFallbackText:
      "<code>&lt;source&gt;</code> tags ke baad likha koi bhi plain text (jo abhi bhi <code>&lt;video&gt;</code>/<code>&lt;audio&gt;</code> ke andar ho) sirf tab dikhta hai jab browser diye gaye kisi bhi format ko support na kare — yeh aapka accessibility fallback message hota hai.",

    // Section 4: Track Element
    trackTitle: "4. <track> Element — Captions Aur Subtitles",
    trackIntro:
      "<code>&lt;track&gt;</code> tag <code>&lt;video&gt;</code> mein timed text tracks add karta hai — aam taur par subtitles ya captions, jo ek alag <code>.vtt</code> (WebVTT) file se aate hain. Yeh ek self-closing tag hai jo <code>&lt;video&gt;</code> ke andar, <code>&lt;source&gt;</code> tags ke sath rakha jata hai.",
    trackAnalogy:
      "🎬 <strong>Real-World Example:</strong> Kisi streaming platform par English ya Urdu subtitles on karna — woh toggle isi tarah ke <code>&lt;track&gt;</code> setup se chalta hai.",
    trackKindTitle: "kind Attribute — Track Ki Kismein:",
    trackKindSubtitles:
      "<strong>subtitles:</strong> Translated dialogue, is farz par ke viewer awaz sun sakta hai lekin zabaan samajh nahi sakta.",
    trackKindCaptions:
      "<strong>captions:</strong> Usi zabaan ka transcript jisme sound effects aur speaker names bhi shamil hote hain — deaf/hard-of-hearing viewers ke liye banaya jata hai.",
    trackKindDescriptions:
      "<strong>descriptions:</strong> Visual events ki narrated descriptions, visually impaired users ke liye.",
    trackKindChapters:
      "<strong>chapters:</strong> Video ke built-in seek bar ke liye navigable chapter markers define karta hai.",

    // Section 5: Best Practices
    bestTitle: "Audio Aur Video Ke Sunehri Asool",
    best1:
      "<strong>Hamesha Multiple Formats Dein:</strong> Kam az kam do <code>&lt;source&gt;</code> tags use karein (jaise WebM + MP4) taake tamam major browsers mein playback guarantee ho.",
    best2:
      "<strong>Kabhi Sound Ke Sath Autoplay Na Karein:</strong> Yeh buri user experience bhi hai aur zyada tar browsers isay block bhi kar dete hain. <code>autoplay</code> hamesha <code>muted</code> ke sath hi use karein.",
    best3:
      "<strong>Video Ke Liye Hamesha poster Set Karein:</strong> Isse perceived performance behtar hoti hai aur playback shuru hone se pehle wala black-frame flash nahi hota.",
    best4:
      '<strong>Accessibility Ke Liye Captions Zaroor Add Karein:</strong> <code>&lt;track kind="captions"&gt;</code> koi optional cheez nahi — yeh hearing-impaired users ke liye zaroori hai aur SEO ke liye bhi (search engines caption text ko index kar sakte hain).',
    nextTitle: "Aage Kya Hai?",
    nextText:
      "Shabash! Ab aap professional tareeqe se rich media embed karna jaante hain. Agle chapter mein hum HTML iFrames explore karenge — kaise poori external webpages, maps, aur YouTube players ko apne page ke andar embed kiya jata hai!",
  },
};
