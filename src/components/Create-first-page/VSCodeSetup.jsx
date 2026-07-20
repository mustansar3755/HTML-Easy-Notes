import { Tv } from "lucide-react";

export default function VSCodeSetup({ t, embedId }) {
  // standard video link block banayein with responsive iframe container
  return (
    <div className="bg-bg-card border border-border p-5 rounded-xl flex flex-col gap-5 mb-6 shadow-sm">
      
      {/* Upper Info Header */}
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-danger-500/10 text-danger-600 dark:text-danger-400 mt-0.5">
          <Tv size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-text-primary text-base">
            VS Code Installation & Essential Setup Guide
          </h3>
          <p className="text-xs text-text-secondary mt-1 leading-relaxed">
            {t.videoSectionIntro || "Follow along with this step-by-step video setup to avoid configurations errors."}
          </p>
        </div>
      </div>
      
      {/* 16:9 Aspect Ratio Responsive Iframe Wrapper */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border shadow-inner bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          title="VS Code Installation & Setup Guide"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  );
}