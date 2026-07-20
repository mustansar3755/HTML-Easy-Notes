// import { Globe } from "lucide-react";

export default function BrowserPreview({ type }) {
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden my-6 shadow-md bg-white dark:bg-slate-900">
      {/* Top Browser Header Mockup - Solid Fallback Colors */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center gap-2">
        {/* Mac/Windows Style Windows Dots */}
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500/60 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/60 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/60 inline-block"></span>
        </div>
        
        {/* URL Address Bar */}
        {/* <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[12px] text-slate-500 dark:text-slate-400 px-4 py-1 rounded-lg flex items-center gap-2 w-full max-w-sm mx-auto font-sans shadow-sm">
          <Globe size={13} className="text-slate-400 shrink-0" />
          <span className="truncate select-none font-medium">http://localhost:3000/preview.html</span>
        </div> */}
      </div>

      {/* Webpage Content Render Viewport */}
      <div className="p-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans">
        {type === "headings" && (
          <div className="flex flex-col gap-4 antialiased">
            {/* Standard Browser Defaults Overriding Tailwind Preflight Reset */}
            <div>
              <h1 className="text-[32px] font-bold leading-tight m-0 p-0 text-slate-900 dark:text-white" style={{ display: "block", fontSize: "2em", marginStart: 0, marginEnd: 0, fontWeight: "bold" }}>
                This is Heading 1
              </h1>
            </div>
            
            <div>
              <h2 className="text-[24px] font-bold leading-tight m-0 p-0 text-slate-900 dark:text-white" style={{ display: "block", fontSize: "1.5em", marginStart: 0, marginEnd: 0, fontWeight: "bold" }}>
                This is Heading 2
              </h2>
            </div>
            
            <div>
              <h3 className="text-[18.72px] font-bold leading-tight m-0 p-0 text-slate-900 dark:text-white" style={{ display: "block", fontSize: "1.17em", marginStart: 0, marginEnd: 0, fontWeight: "bold" }}>
                This is Heading 3
              </h3>
            </div>
            
            <div>
              <h4 className="text-[16px] font-bold leading-tight m-0 p-0 text-slate-900 dark:text-white" style={{ display: "block", fontSize: "1em", marginStart: 0, marginEnd: 0, fontWeight: "bold" }}>
                This is Heading 4
              </h4>
            </div>
            
            <div>
              <h5 className="text-[13.28px] font-bold leading-tight m-0 p-0 text-slate-900 dark:text-white" style={{ display: "block", fontSize: "0.83em", marginStart: 0, marginEnd: 0, fontWeight: "bold" }}>
                This is Heading 5
              </h5>
            </div>
            
            <div>
              <h6 className="text-[10.72px] font-bold leading-tight m-0 p-0 text-slate-900 dark:text-white" style={{ display: "block", fontSize: "0.67em", marginStart: 0, marginEnd: 0, fontWeight: "bold" }}>
                This is Heading 6
              </h6>
            </div>
          </div>
        )}

        {type === "breaks" && (
          <div className="space-y-6 text-sm leading-relaxed antialiased">
            <div>
              <p className="text-xs text-blue-500 font-mono mb-2 font-bold select-none">★ &lt;br /&gt; Browser Render:</p>
              <p className="m-0 p-0 text-slate-900 dark:text-slate-100">
                Roses are red,<br />
                Violets are blue,<br />
                HTML is awesome,<br />
                And so are you.
              </p>
            </div>
            
            <hr className="border-slate-200 dark:border-slate-800" />
            
            <div>
              <p className="text-xs text-blue-500 font-mono mb-2 font-bold select-none">★ &lt;pre&gt; Browser Render:</p>
              <pre className="font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-xs whitespace-pre m-0 overflow-x-auto text-slate-900 dark:text-slate-100">
   Stars inside code editor
     * 
    ***
   *****
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}