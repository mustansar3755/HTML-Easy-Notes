import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NavigationButtons({ prevPath, prevLabel, nextPath, nextLabel }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between gap-4 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => prevPath && navigate(prevPath)}
        disabled={!prevPath}
        className={`px-6 py-3 rounded-lg font-medium transition-colors border ${
          prevPath
            ? "bg-danger-600 border-danger-600 hover:bg-danger-700 text-white cursor-pointer"
            : "bg-bg-sidebar border-border text-text-secondary opacity-50 cursor-not-allowed"
        }`}
      >
        Previous: {prevLabel || "None"}
      </button>

      {/* Next Button */}
      {nextPath && (
        <button
          onClick={() => navigate(nextPath)}
          className="bg-primary-600 cursor-pointer hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          Next: {nextLabel}
          <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
}