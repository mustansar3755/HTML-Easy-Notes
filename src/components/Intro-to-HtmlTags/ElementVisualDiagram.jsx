export default function ElementVisualDiagram({ language }) {
  const isUr = language === "ur";

  return (
    <div className="bg-bg-sidebar border border-border rounded-xl p-6 my-6 font-mono text-sm">
      <p className="text-text-secondary text-xs mb-4 font-sans italic">
        {isUr ? "★ HTML Element ka anatomy:" : "★ Anatomy of an HTML Element:"}
      </p>
      
      <div className="flex flex-wrap items-center gap-2 justify-center py-4 bg-bg-card rounded-lg border border-border/50">
        {/* Opening Tag */}
        <div className="text-center p-2 border border-primary-500/30 bg-primary-500/10 rounded-lg">
          <span className="text-primary-600 dark:text-primary-400 font-bold">&lt;p&gt;</span>
          <p className="text-[10px] text-text-secondary font-sans mt-1">
            {isUr ? "Opening Tag" : "Opening Tag"}
          </p>
        </div>

        <span className="text-text-secondary font-sans">+</span>

        {/* Content */}
        <div className="text-center p-2 border border-success-500/30 bg-success-500/10 rounded-lg">
          <span className="text-text-primary">Hello World</span>
          <p className="text-[10px] text-text-secondary font-sans mt-1">
            {isUr ? "Content (Mawaad)" : "Content"}
          </p>
        </div>

        <span className="text-text-secondary font-sans">+</span>

        {/* Closing Tag */}
        <div className="text-center p-2 border border-danger-500/30 bg-danger-500/10 rounded-lg">
          <span className="text-danger-600 dark:text-danger-400 font-bold">&lt;/p&gt;</span>
          <p className="text-[10px] text-text-secondary font-sans mt-1">
            {isUr ? "Closing Tag" : "Closing Tag"}
          </p>
        </div>
      </div>
      
      <p className="text-center text-primary-500 text-xs font-sans mt-4 font-semibold">
        {isUr ? "Opening Tag + Content + Closing Tag = HTML Element" : "Opening Tag + Content + Closing Tag = HTML Element"}
      </p>
    </div>
  );
}