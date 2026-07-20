export default function AttributesTable({ language,  }) {
  const isUr = language === "ur";
  
  const attributesData = [
    { name: "href", tag: "<a>", desc: isUr ? "Link ka destination URL batata hai." : "Specifies the URL of the page the link goes to." },
    { name: "src", tag: "<img>", desc: isUr ? "Image file ka path ya source batata hai." : "Specifies the path to the image file." },
    { name: "alt", tag: "<img>", desc: isUr ? "Agar image load na ho, to substitute text dikhata hai." : "Alternative text if the image cannot be displayed." },
    { name: "lang", tag: "<html>", desc: isUr ? "Webpage ki makhsoos zuban set karta hai." : "Declares the language of the webpage." }
  ];

  return (
    <div className="overflow-x-auto my-6 border border-border rounded-xl">
      <table className="w-full text-left border-collapse bg-bg-card text-sm">
        <thead>
          <tr className="bg-bg-sidebar border-b border-border">
            <th className="p-3 font-semibold text-text-primary">{isUr ? "Attribute Naam" : "Attribute Name"}</th>
            <th className="p-3 font-semibold text-text-primary">{isUr ? "Istemal" : "Used In"}</th>
            <th className="p-3 font-semibold text-text-primary">{isUr ? "Maqsad / Description" : "Description"}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-text-secondary">
          {attributesData.map((attr, index) => (
            <tr key={index} className="hover:bg-bg-sidebar/50 transition-colors">
              <td className="p-3 font-mono font-semibold text-primary-600 dark:text-primary-400">{attr.name}</td>
              <td className="p-3 font-mono text-xs">{attr.tag}</td>
              <td className="p-3 leading-relaxed">{attr.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}