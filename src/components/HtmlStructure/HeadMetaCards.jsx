export default function HeadMetaCards({ t }) {
  const cards = [
    { title: t.metaCharsetTitle, text: t.metaCharsetText },
    { title: t.metaViewportTitle, text: t.metaViewportText },
    { title: t.titleTagTitle, text: t.titleTagText },
    { title: t.metaDescTitle, text: t.metaDescText },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4 mb-5">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-bg-card border border-border rounded-xl p-4">
          <p className="font-semibold text-primary-600 dark:text-primary-400 mb-1.5 text-sm font-mono">
            {card.title}
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}