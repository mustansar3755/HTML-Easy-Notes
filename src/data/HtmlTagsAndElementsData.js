export const content = {
  en: {
    title: "Deep Dive into HTML Tags and Elements",
    intro: "Every single webpage you see on the internet is built using tiny, modular bricks called HTML tags. Understanding the strict difference between tags, elements, and attributes is the most fundamental step to becoming a master web developer.",
    
    // Section 1: Tags vs Elements
    tagsVsElementsTitle: "The Hidden Truth: Tags vs. Elements",
    tagsVsElementsIntro: "Many beginners use the words 'Tag' and 'Element' interchangeably, but in the world of professional engineering, they have completely different meanings. Confusing these two is like confusing a 'brick' with a 'whole brick wall'.",
    tagDefinitionTitle: "1. What is an HTML Tag?",
    tagDefinitionText: "A tag is simply an instruction marker enclosed in angle brackets. It tells the browser how to format text but doesn't contain the actual text inside itself. For example, <code>&lt;p&gt;</code> is just a tag; it represents the start of a paragraph, but it has no meaning without content.",
    elementDefinitionTitle: "2. What is an HTML Element?",
    elementDefinitionText: "An element is the entire complete package. It starts from the opening tag, includes everything you type inside as content, and ends at the closing tag. When the browser renders a page, it processes entire elements, not just standalone tags.",
    
    // Section 2: Anatomy
    anatomyTitle: "Anatomy & Structure of an Element",
    anatomyText1: "Let's dissect a single HTML element to see exactly how its parts fit together. If you miss even a single bracket or slash, your entire webpage layout can break instantly.",
    anatomyText2: "Notice the forward slash <code>/</code> in the closing tag. This slash is critical because it tells the browser: 'Stop applying this style here.' If you forget the closing tag, your entire document might turn into a giant header or paragraph!",
    
    // Section 3: Empty Elements
    emptyTitle: "The Exceptions: Empty and Self-Closing Elements",
    emptyText1: "In HTML, rules always have exceptions. There is a special category of elements that do not follow the 'Opening + Content + Closing' rule. These are known as Empty Elements or Void Elements.",
    emptyText2: "Because they do not hold any text content or contain other tags, they do not need a closing tag. Writing <code>&lt;br&gt;&lt;/br&gt;</code> is grammatically wrong in HTML. Instead, we use single standalone markers.",
    emptyDeepDiveTitle: "Why do they exist?",
    emptyDeepDiveText: "Think about an image. An image doesn't wrap around text content; instead, the image *is* the content itself. Similarly, a line break just creates an empty space below, so there is nothing to wrap inside it.",
    
    // Section 4: Attributes
    attributesTitle: "HTML Attributes: Adding Superpowers to Tags",
    attributesText1: "If tags are nouns, attributes are adjectives. They modify the behavior of an element or provide additional configuration. Attributes always live inside the opening tag, never in the closing tag.",
    attributesText2: "An attribute always follows a strict pattern: <code>name=\"value\"</code>. The value must always be wrapped inside double quotation marks. Without attributes, a tag like <code>&lt;a&gt;</code> is useless because it won't know where to take the user when clicked.",
    calloutTitle: "The Golden Rule of Attributes",
    calloutText: "Never, under any circumstances, place an attribute inside a closing tag like <code>&lt;/a href=\"...\"&gt;</code>. This is invalid syntax and browsers will completely ignore it, breaking your webpage.",
    
    // Section 5: Nesting
    nestingTitle: "Advanced Nesting Rules (Tags Inside Tags)",
    nestingText1: "HTML structures are hierarchical, meaning you can place elements inside other elements to create complex web layouts. This process is called nesting. However, nesting follows a strict 'First In, Last Out' stack order rule.",
    nestingText2: "Think of nesting like Russian nesting dolls or boxes inside boxes. You cannot close an outer box before closing the inner box first. Let's look at correct versus incorrect nesting examples:",
    correctNestingLabel: "Correct Nesting (Clean Structure):",
    incorrectNestingLabel: "Incorrect Nesting (Broken Structure):",
    
    // Section 6: Summary & Best Practices
    bestTitle: "Pro-Developer Best Practices",
    best1: "<strong>Always Use Lowercase:</strong> While HTML is case-insensitive (<code>&lt;P&gt;</code> works), professional standard requires lowercase tags (<code>&lt;p&gt;</code>).",
    best2: "<strong>Close Your Tags Manually:</strong> Modern browsers try to guess missing closing tags, but relying on this causes performance lag and weird bugs.",
    best3: "<strong>Quote Attribute Values:</strong> Always use double quotes for values, e.g., <code>class=\"active\"</code> instead of <code>class=active</code>.",
    best4: "<strong>Keep Nesting Clean:</strong> Use proper indentation (tab spacing) so you can easily see which tag belongs to which parent element.",
    
    nextTitle: "What's Next?",
    nextText: "Now that you have learned how tags, elements, and attributes form the DNA of web development, you are fully prepared to do practical work! In the next section, we will open a code editor and create your very first functional webpage from scratch.",
  },
  
  ur: {
    title: "HTML Tags aur Elements ki Tafseeli Samajh",
    intro: "Internet par majood har ek webpage chhote chhote bricks se mil kar banta hai jinko hum HTML tags kehte hain. Agar aap ek professional web developer banna chahte hain, toh tags, elements, aur attributes ke darmiyan ka farq gehrayee se samajhna aapka sab se pehla aur sab se zaroori step hai.",
    
    // Section 1: Tags vs Elements
    tagsVsElementsTitle: "Chhupa Hua Sach: Tags vs. Elements",
    tagsVsElementsIntro: "Shuruat karne wale aksar log 'Tag' aur 'Element' ke lafz ko ek hi maqsad ke liye istemaal karte hain, lekin professional coding ki dunya mein in dono ka matlab bilkul alag hai. In dono ko ek samajhna bilkul aisa hi hai jaise ek 'eent (brick)' aur 'eenton se bani poori deewar' ko ek samajh lena.",
    tagDefinitionTitle: "1. HTML Tag Kya Hota Hai?",
    tagDefinitionText: "Tag sirf ek instruction marker hota hai jo angle brackets ke andar band hota hai. Yeh browser ko batata hai ke text ko screen par kaise dikhana hai, lekin iske andar apna koi text nahi hota. Misal ke taur par, <code>&lt;p&gt;</code> sirf ek tag hai; yeh paragraph ke shuru hone ki nishandahi karta hai, par content ke bina iski koi aukaat nahi.",
    elementDefinitionTitle: "2. HTML Element Kya Hota Hai?",
    elementDefinitionText: "Element poore ek mukammal package ka naam hai. Yeh opening tag se shuru hota hai, iske andar jo bhi text ya content aap likhte hain usko shamil karta hai, aur closing tag par khatam hota hai. Jab browser kisi page ko chalta hai, toh woh poore elements ko samajhta hai, sirf akele tags ko nahi.",
    
    // Section 2: Anatomy
    anatomyTitle: "Element ki Anatomy aur Androoni Structure",
    anatomyText1: "Aayein ek single HTML element ka operation karke dekhte hain ke iske purze aapas mein kaise jude hote hain. Agar aap code likhte waqt ek chhota sa bracket ya slash bhi bhool jayein, toh aapka poora webpage ka layout usi waqt tabah ho sakta hai.",
    anatomyText2: "Ghaur karein ke closing tag ke andar ek forward slash <code>/</code> lagaya jata hai. Yeh slash lagana intehai zaroori hai kyunke yeh browser ko signal deta hai ke: 'Bas, ab is style ko yahan khatam kar do.' Agar aap closing tag lagana bhool gaye, toh ho sakta hai aapka poora page hi ek bada heading ban jaye!",
    
    // Section 3: Empty Elements
    emptyTitle: "Kuch Alag Rules: Empty aur Self-Closing Elements",
    emptyText1: "HTML ki dunya mein har rule ke kuch exceptions (istishna) hote hain. Ek makhsoos qisam ke elements aise hote hain jo 'Opening + Content + Closing' waale aam rule ko follow nahi karte. Inhe Empty Elements ya Void Elements kaha jata hai.",
    emptyText2: "Kyunke inke andar koi likha hua text content ya doosre tags nahi aate, isliye inko band karne ke liye alag se closing tag lagane ki zaroori nahi hoti. HTML mein <code>&lt;br&gt;&lt;/br&gt;</code> likhna bilkul ghalat mana jata hai. Iske bajaye hum single markers lagate hain.",
    emptyDeepDiveTitle: "Yeh kyu hote hain?",
    emptyDeepDiveText: "Misal ke taur par image (tasveer) ko dekhein. Tasveer kisi text ke aas paas lapeti nahi jati, balki tasveer khud hi ek content hoti hai. Bilkul isi tarah, line break sirf ek khali jagah chorne ka kaam karta hai, toh iske andar wrap karne ke liye kuch nahi hota.",
    
    // Section 4: Attributes
    attributesTitle: "HTML Attributes: Tags Ko Superpowers Dena",
    attributesText1: "Agar tags ko hum ism (nouns) kahein, toh attributes unki sifaat (adjectives) hain. Attributes kisi bhi tag ke kaam karne ke tareeqay ko badal dete hain ya use extra settings fraham karte hain. Attributes hamesha opening tag ke andar baithte hain, closing tag mein inka koi kaam nahi hota.",
    attributesText2: "Attribute likhne ka ek pakka nizam hota hai: <code>name=\"value\"</code>. Jo bhi value aap denge, use hamesha double quotation marks ke andar band karna hoga. Attributes ke bina, kuch tags jaise <code>&lt;a&gt;</code> (link tag) bilkul bekaar hain kyunke use pata hi nahi hoga ke click hone par user ko kis website par le kar jana hai.",
    calloutTitle: "Attributes Ka Sunahri Rule",
    calloutText: "Kabhi bhi, kisi bhi haal mein attribute ko closing tag ke andar mat likhein, jaise <code>&lt;/a href=\"...\"&gt;</code>. Yeh bilkul ghalat code hai aur browser isko poori tarah ignore kar dega, jis se aapka link kaam nahi karega.",
    
    // Section 5: Nesting
    nestingTitle: "Nesting Ke Sakht Rules (Tags Ke Andar Tags)",
    nestingText1: "HTML ka dunya ek hierarchy par chalti hai, yaani aap complex web design banane ke liye ek element ke andar doosra element rakh sakte hain. Is tareeqay ko nesting kehte hain. Magar nesting ka ek sakht kanoon hai: 'Jo tag pehle khulega, woh sab se aakhir mein band hoga.'",
    nestingText2: "Nesting ko aap ek dibbe ke andar doosra dibba samajh sakte hain. Aap bahar wale dibbe ko tab tak band nahi kar sakte jab tak aapne andar wale chhote dibbe ko pehle band na kiya ho. Aayein sahi aur ghalat nesting ki misal dekhte hain:",
    correctNestingLabel: "Sahi Nesting (Saaf Suthra Code):",
    incorrectNestingLabel: "Ghalat Nesting (Toota Hua Code):",
    
    // Section 6: Summary & Best Practices
    bestTitle: "Professional Developers Ki Khas Aadatein",
    best1: "<strong>Hamesha Lowercase Istemal Karein:</strong> Agarcha HTML mein agar aap bade huroof mein <code>&lt;P&gt;</code> likhein toh kaam chal jata hai, par professional standard hamesha lowercase (<code>&lt;p&gt;</code>) ka hi hai.",
    best2: "<strong>Tags Ko Khud Band Karein:</strong> Aaj kal ke browsers khud hi andaza laga kar missing tags ko band karne ki koshish karte hain, par is par bharosa karne se website slow ho jati hai aur ajeeb bugs aate hain.",
    best3: "<strong>Quotes Lazmi Lagayein:</strong> Attribute ki values ke sath hamesha double quotes lagayein, jaise <code>class=\"box\"</code> na ke <code>class=box</code>.",
    best4: "<strong>Indentation Ka Khayal Rakhin:</strong> Code likhte waqt tab space ka istemal karein taake saaf dikhe ke kaunsa tag kis parent tag ke andar band hai.",
    
    nextTitle: "Aage Kya Hai?",
    nextText: "Ab jab aapne seekh liya hai ke tags, elements, aur attributes kaise HTML ka DNA banate hain, toh aap practical kaam ke liye poori tarah tayyar hain! Agle section mein hum apna code editor (VS Code) kholenge aur aapka sab se pehla zinda webpage computer par chala kar dekhenge.",
  }
};