import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeBlock({ code, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 seconds baad button reset ho jayega
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group my-4">
      {/* Top-Right Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 p-1.5 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:bg-bg-sidebar transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 flex items-center gap-1.5 text-xs font-medium cursor-pointer"
        title="Copy code"
      >
        {copied ? (
          <>
            <Check size={14} className="text-success-500" />
            <span className="text-success-500">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            <span>Copy</span>
          </>
        )}
      </button>

      {/* Code Display */}
      <pre className="bg-bg-sidebar border border-border rounded-xl p-4 overflow-x-auto text-sm">
        <code className={className}>{code.trim()}</code>
      </pre>
    </div>
  );
}