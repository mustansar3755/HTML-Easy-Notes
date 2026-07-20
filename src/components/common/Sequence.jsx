// import React from "react";

// Individual Step Wrapper
export function Step({ title, subtitle, children }) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0 group">
      {/* Vertical Connecting Line */}
      <div className="absolute left-2.75 top-6 bottom-0 w-0.5 bg-border group-last:hidden" />
      
      {/* Numeric Indicator Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary-500/10 border border-primary-500 flex items-center justify-center text-[11px] font-bold text-primary-600 dark:text-primary-400 font-mono transition-transform group-hover:scale-110">
        {subtitle ? subtitle.replace(/\D/g, "") : "•"}
      </div>

      {/* Content Side */}
      <div className="bg-bg-card border border-border p-4 rounded-xl shadow-sm hover:border-primary-500/30 transition-colors">
        <h3 className="text-md font-semibold text-text-primary mb-1.5 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

// Main Sequence Wrapper
export default function Sequence({ children }) {
  return (
    <div className="flex flex-col mt-4">
      {children}
    </div>
  );
}