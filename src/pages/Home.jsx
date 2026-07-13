import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FileCode2, ArrowRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-6 right-6 p-2 rounded-lg hover:bg-bg-hover text-text-secondary transition-colors"
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-2xl"
      >
        <div className="p-4 rounded-2xl bg-primary-500/10 mb-6">
          <FileCode2 size={40} className="text-primary-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          HTML Notes
        </h1>

        <p className="text-text-secondary text-lg mb-8">
          Learn HTML from scratch with simple, beginner-friendly notes —
          explained with easy examples and practical code snippets.
        </p>

        <Link
          to="/notes/introduction"
          className="group flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
        >
          Get Started
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </div>
  );
}