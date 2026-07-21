export const content = {
  en: {
    title: "HTML Forms & Inputs: Complete Reference Guide",
    intro:
      "Forms are the backbone of interactive websites — whether logging in, registering, leaving feedback, or submitting payment details. HTML forms collect user input and deliver it to a backend server for processing.",

    // Section 1: Form Basics
    formTitle: "1. The <form> Element — Building the Container",
    formIntro:
      "The <code>&lt;form&gt;</code> element acts as a container for interactive controls (inputs, buttons, dropdowns). It defines where and how user input data will be submitted.",
    formAnalogy:
      "✉️ <strong>Real-World Example:</strong> Think of a form as a physical envelope. Input fields are the documents inside, the <code>action</code> attribute is the recipient's address, and the <code>method</code> is how you send it (Standard vs. Registered Mail).",
    formAttributesTitle: "Key <form> Attributes:",
    formAttrAction:
      "<strong>action:</strong> Specifies the server URL where form data is sent upon submission.",
    formAttrMethod:
      "<strong>method:</strong> Defines the HTTP method used — <code>GET</code> (appends data to the URL, ideal for search forms) or <code>POST</code> (sends data securely in the HTTP payload, mandatory for passwords and sensitive information).",
    formAttrTarget:
      "<strong>target:</strong> Specifies where to display the response (e.g., <code>_blank</code> opens in a new tab).",

    // Section 2: Input Types Table Reference
    tableTitle: "2. Complete HTML Input Types Reference",
    tableIntro:
      "The <code>&lt;input&gt;</code> tag is one of the most versatile elements in HTML. Its behavior, layout, and mobile keyboard layout change entirely depending on the <code>type</code> attribute provided.",
    tableHeaders: {
      type: "Input Type",
      purpose: "Description & Common Use Case",
      example: "Code Syntax",
    },
    inputTypesList: [
      {
        type: "text",
        purpose: "Single-line plain text entry (Names, usernames, search terms).",
        example: '<input type="text" name="username" />',
      },
      {
        type: "password",
        purpose: "Masks entered characters with dots/asterisks for security.",
        example: '<input type="password" name="password" />',
      },
      {
        type: "email",
        purpose: "Requires valid email format; triggers email layout keyboard on mobile.",
        example: '<input type="email" name="user_email" />',
      },
      {
        type: "number",
        purpose: "Restricts input to numbers; supports min, max, and step attributes.",
        example: '<input type="number" min="1" max="10" />',
      },
      {
        type: "tel",
        purpose: "Used for phone numbers; triggers numeric keypad on mobile devices.",
        example: '<input type="tel" name="phone" />',
      },
      {
        type: "url",
        purpose: "Requires valid web URL structure (http/https).",
        example: '<input type="url" name="website" />',
      },
      {
        type: "checkbox",
        purpose: "Allows selecting zero, one, or multiple independent options.",
        example: '<input type="checkbox" name="agree" />',
      },
      {
        type: "radio",
        purpose: "Allows selecting exactly ONE option from a group (grouped by name).",
        example: '<input type="radio" name="gender" value="m" />',
      },
      {
        type: "date",
        purpose: "Provides a native date picker dropdown (YYYY-MM-DD).",
        example: '<input type="date" name="dob" />',
      },
      {
        type: "time",
        purpose: "Provides a native time picker control.",
        example: '<input type="time" name="appointment" />',
      },
      {
        type: "file",
        purpose: "Allows users to upload one or more files from their device.",
        example: '<input type="file" name="resume" />',
      },
      {
        type: "color",
        purpose: "Renders a native visual color picker control returning HEX codes.",
        example: '<input type="color" name="theme_color" />',
      },
      {
        type: "range",
        purpose: "Renders a visual slider for selecting values within a range.",
        example: '<input type="range" min="0" max="100" />',
      },
      {
        type: "hidden",
        purpose: "Stores data invisible to the user but submitted with the form.",
        example: '<input type="hidden" name="user_id" value="101" />',
      },
      {
        type: "submit",
        purpose: "Renders a button that submits the form data to the server.",
        example: '<input type="submit" value="Send Data" />',
      },
      {
        type: "reset",
        purpose: "Resets all form fields back to their original default values.",
        example: '<input type="reset" value="Clear Form" />',
      },
    ],

    // Section 3: Other Controls
    controlsTitle: "3. Textarea, Dropdowns & Labels",
    controlsIntro:
      "Beyond basic input controls, HTML provides dedicated elements for multi-line messages, selection menus, and accessible labeling.",
    controlsAnalogy:
      "🏷️ <strong>Pro Tip:</strong> Always pair every input with a <code>&lt;label&gt;</code> using matching <code>for</code> and <code>id</code> attributes. Clicking a label automatically focuses its linked input!",
    controlsTypesTitle: "Key Control Elements:",
    controlTextarea:
      "<strong><textarea>:</strong> Multi-line text field ideal for comments, bios, or reviews.",
    controlSelect:
      "<strong><select> & <option>:</strong> Creates a clean dropdown list to pick single or multiple options.",
    controlButton:
      "<strong><button type=\"submit\">:</strong> Standard button element for actions and form submission.",

    // Section 4: Form Validation
    validationTitle: "4. Built-in Form Validation Attributes",
    validationIntro:
      "HTML5 includes built-in attributes that validate user entries automatically before JavaScript or server scripts run.",
    validationRule:
      "⚠️ <strong>VALIDATION ADVANTAGE:</strong> Native validation provides instant user feedback and prevents invalid server requests.",
    validationFlagsTitle: "Core Validation Attributes:",
    valRequired:
      "<strong>required:</strong> Prevents submission if the field is left empty.",
    valMinMax:
      "<strong>minlength / maxlength:</strong> Restricts text character lengths.",
    valPattern:
      "<strong>pattern:</strong> Validates input using custom Regex expressions.",

    // Section 5: Best Practices
    bestTitle: "Golden Rules for Forms & Inputs",
    best1:
      "<strong>Always Link Labels to Inputs:</strong> Use matching <code>id</code> on the input and <code>for</code> on the label.",
    best2:
      "<strong>Use POST for Confidential Data:</strong> Never send passwords or personal identifiers via <code>GET</code>.",
    best3:
      "<strong>Always Include the name Attribute:</strong> Inputs missing the <code>name</code> attribute will NOT send data to the server.",
    best4:
      "<strong>Leverage Native Types:</strong> Choose appropriate types like <code>email</code> or <code>number</code> for instant mobile keyboard optimization.",
    nextTitle: "What's Next?",
    nextText:
      "Excellent work! You now have a complete understanding of HTML forms and inputs. Next, we will cover HTML Semantic Elements — building structured, SEO-friendly web layouts!",
  },

  ur: {
    title: "HTML Forms Aur Inputs: Mukammal Reference Guide",
    intro:
      "Forms interactive websites ki reerdh ki haddi hain — chahe login karna ho, registration ho, feedback dena ho ya payment details enter karni hon. HTML forms user ka data gather karke backend server tak pohnchate hain.",

    // Section 1: Form Basics
    formTitle: "1. <form> Element — Main Container",
    formIntro:
      "<code>&lt;form&gt;</code> element tamam interactive controls (inputs, buttons, dropdowns) ka main wrapper hota hai. Yeh batata hai ke data kis jagah aur kaise submit hoga.",
    formAnalogy:
      "✉️ <strong>Real-World Example:</strong> Form ko ek postal envelope (lifafa) samjhein. Input fields uske andar rakhey hue documents hain, <code>action</code> receiving address hai, aur <code>method</code> mail bhejne ka tareeqa.",
    formAttributesTitle: "Ahem <form> Attributes:",
    formAttrAction:
      "<strong>action:</strong> Us server script ya URL ka path jahan submit hone par data bheja jata hai.",
    formAttrMethod:
      "<strong>method:</strong> Data bhejne ka HTTP tareeqa — <code>GET</code> (URL mein data dikhata hai, search forms ke liye behtar) ya <code>POST</code> (data chhupa kar secure bhejta hai, passwords ke liye zaroori).",
    formAttrTarget:
      "<strong>target:</strong> Batata hai ke submit hone ke baad response kis window/tab mein dikhai de (e.g., <code>_blank</code>).",

    // Section 2: Input Types Table Reference
    tableTitle: "2. Tamam HTML Input Types (Table Format)",
    tableIntro:
      "<code>&lt;input&gt;</code> tag HTML ka sab se versatile element hai. Iska behavior aur mobile keyboard layouts iske <code>type</code> attribute ki wajah se change hote hain.",
    tableHeaders: {
      type: "Input Type",
      purpose: "Maqsad Aur Usage",
      example: "Code Syntax",
    },
    inputTypesList: [
      {
        type: "text",
        purpose: "Aam single-line text input (Naam, username, search field ke liye).",
        example: '<input type="text" name="username" />',
      },
      {
        type: "password",
        purpose: "Characters ko mask (asterisk/dots) kar ke chhupata hai.",
        example: '<input type="password" name="password" />',
      },
      {
        type: "email",
        purpose: "Valid email format check karta hai aur mobile par email keyboard kholta hai.",
        example: '<input type="email" name="user_email" />',
      },
      {
        type: "number",
        purpose: "Sirf numeric values allow karta hai; min, max aur step support karta hai.",
        example: '<input type="number" min="1" max="10" />',
      },
      {
        type: "tel",
        purpose: "Phone number ke liye use hota hai; mobile devices par keypad kholta hai.",
        example: '<input type="tel" name="phone" />',
      },
      {
        type: "url",
        purpose: "Website URL (http/https) format ki verification karta hai.",
        example: '<input type="url" name="website" />',
      },
      {
        type: "checkbox",
        purpose: "Multiple independent options select ya deselect karne ke liye.",
        example: '<input type="checkbox" name="agree" />',
      },
      {
        type: "radio",
        purpose: "Group mein se sirf EIK option chun-ne ke liye (same name hona zaroori hai).",
        example: '<input type="radio" name="gender" value="m" />',
      },
      {
        type: "date",
        purpose: "Tareekh chun-ne ke liye built-in date picker kholta hai (YYYY-MM-DD).",
        example: '<input type="date" name="dob" />',
      },
      {
        type: "time",
        purpose: "Waqt set karne ke liye built-in time picker control deta hai.",
        example: '<input type="time" name="appointment" />',
      },
      {
        type: "file",
        purpose: "User ko apni device se files/documents upload karne ki permission deta hai.",
        example: '<input type="file" name="resume" />',
      },
      {
        type: "color",
        purpose: "Color code (HEX) select karne ke liye visual color picker kholta hai.",
        example: '<input type="color" name="theme_color" />',
      },
      {
        type: "range",
        purpose: "Values chun-ne ke liye visual slider bar dikhata hai.",
        example: '<input type="range" min="0" max="100" />',
      },
      {
        type: "hidden",
        purpose: "Aisa data jo screen par nazar nahi aata lekin form submit hote waqt jata hai.",
        example: '<input type="hidden" name="user_id" value="101" />',
      },
      {
        type: "submit",
        purpose: "Aisa button jo form ka sara data server par bhejta hai.",
        example: '<input type="submit" value="Send Data" />',
      },
      {
        type: "reset",
        purpose: "Form ke tamaam fields ko wapas unki default condition mein le aata hai.",
        example: '<input type="reset" value="Clear Form" />',
      },
    ],

    // Section 3: Other Controls
    controlsTitle: "3. Textarea, Dropdowns Aur Labels",
    controlsIntro:
      "Aam inputs ke alawa multi-line messages, selection menus, aur accessibility ke liye dedicated tags use kiye jaate hain.",
    controlsAnalogy:
      "🏷️ <strong>Pro Tip:</strong> Input ke sath <code>&lt;label&gt;</code> zaroor lagayein. Label par click karne se connected input par auto-focus ho jata hai!",
    controlsTypesTitle: "Tafseeli Elements:",
    controlTextarea:
      "<strong><textarea>:</strong> Lambe feedback, messages, ya reviews ke liye multi-line text input field.",
    controlSelect:
      "<strong><select> aur <option>:</strong> Dropdown selection list banata hai.",
    controlButton:
      "<strong><button type=\"submit\">:</strong> Form submit karne ya JS events fire karne ke liye button element.",

    // Section 4: Form Validation
    validationTitle: "4. Built-in Form Validation Attributes",
    validationIntro:
      "HTML5 built-in validation attributes deta hai jisse bina JavaScript ke input check kiya ja sakta hai.",
    validationRule:
      "⚠️ <strong>VALIDATION KA FAIDA:</strong> Automatic validation server par ghalat data jane se rokti hai.",
    validationFlagsTitle: "Ahem Validation Attributes:",
    valRequired:
      "<strong>required:</strong> Field khali hone ki surat mein submission rokta hai.",
    valMinMax:
      "<strong>minlength / maxlength:</strong> Characters ki minimum aur maximum hadd set karta hai.",
    valPattern:
      "<strong>pattern:</strong> Regex pattern ke zariye validation karta hai.",

    // Section 5: Best Practices
    bestTitle: "Forms Aur Inputs Ke Sunehri Asool",
    best1:
      "<strong>Label Aur Input Ko Connect Karein:</strong> Label par <code>for</code> aur input par matching <code>id</code> istemal karein.",
    best2:
      "<strong>Sensitive Data Ke Liye POST Use Karein:</strong> Password ya personal info ko <code>GET</code> method se hargiz na bhejein.",
    best3:
      "<strong>name Attribute Zaroor Lagayein:</strong> Jis input par <code>name</code> nahi hoga, uska data server tak nahi pohnchega.",
    best4:
      "<strong>Sahi Input Type Chunain:</strong> Email ke liye <code>type=\"email\"</code> aur numbers ke liye <code>type=\"number\"</code> istemal karein.",
    nextTitle: "Aage Kya Hai?",
    nextText:
      "Shabash! Ab aap HTML forms aur inputs ki mukammal list aur usage jaante hain. Agle chapter mein hum HTML Semantic Elements explore karenge!",
  },
};