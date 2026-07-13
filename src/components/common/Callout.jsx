
import { Info, AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react';

const config = {
  info: {
    icon: Info,
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-500/30',
    leftBorder: 'border-l-blue-500',
    text: 'text-blue-700 dark:text-blue-500',
    iconColor: 'text-blue-600 dark:text-blue-500'
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-amber-50 dark:bg-amber-500/10',
    border: 'border-amber-500/30',
    leftBorder: 'border-l-amber-500',
    text: 'text-amber-700 dark:text-amber-500',
    iconColor: 'text-amber-600 dark:text-amber-500'
  },
  danger: {
    icon: XCircle,
    bg: 'bg-red-50 dark:bg-red-500/10',
    border: 'border-red-500/30',
    leftBorder: 'border-l-red-500',
    text: 'text-red-700 dark:text-red-500',
    iconColor: 'text-red-600 dark:text-red-500'
  },
  success: {
    icon: CheckCircle2,
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    border: 'border-emerald-500/30',
    leftBorder: 'border-l-emerald-500',
    text: 'text-emerald-700 dark:text-emerald-500',
    iconColor: 'text-emerald-600 dark:text-emerald-500'
  }
};

export default function Callout({ type = 'info', title, children }) {
  const currentConfig = config[type] || config.info;
  const IconComponent = currentConfig.icon;

  // Function jo string text ko scan kar ke code format apply karega
  const formatText = (text) => {
    if (typeof text !== 'string') return text;

    // Backticks (`) se text ko split karne ke liye regex
    const parts = text.split(/(`[^`]+`)/g);

    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        const cleanText = part.slice(1, -1); // Shuru aur aakhir ka backtick remove kiya
        return (
          <code 
            key={index} 
            className="bg-zinc-950 dark:bg-black text-zinc-100 border border-zinc-700/60 px-1.5 py-0.5 rounded-md font-mono text-xs mx-1 inline-block vertical-middle"
          >
            {cleanText}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className={`${currentConfig.bg} ${currentConfig.border} ${currentConfig.leftBorder} border border-l-4 rounded-xl p-5 mb-6 flex gap-3`}>
      <IconComponent 
        size={20} 
        className={`${currentConfig.iconColor} shrink-0 mt-0.5`} 
      />
      <div>
        {title && (
          <p className={`font-semibold ${currentConfig.text} mb-1`}>
            {title}
          </p>
        )}
        <div className="text-text-secondary text-sm leading-relaxed">
          {/* Yahan hum children ko directly function mein pass kar rahe hain */}
          {formatText(children)}
        </div>
      </div>
    </div>
  );
}