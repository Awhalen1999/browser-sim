import { cn } from "@/lib/utils";

export interface DockItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  onClick?: () => void;
}

interface DockProps {
  items: DockItem[];
  className?: string;
}

export function Dock({ items, className }: DockProps) {
  const handleItemClick = (item: DockItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "bg-white/10 backdrop-blur-md border border-white/20",
        "rounded-2xl px-3 py-2 shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={cn(
              "group relative flex h-12 w-12 items-center justify-center",
              "rounded-xl transition-all duration-200 ease-out",
              "hover:-translate-y-1 hover:scale-110",
              "focus:outline-none focus:ring-2 focus:ring-white/50"
            )}
            aria-label={item.label}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
