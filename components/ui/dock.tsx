import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface DockItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  isSeparator?: boolean;
}

interface DockProps {
  items: DockItem[];
  className?: string;
}

export function Dock({ items, className }: DockProps) {
  const router = useRouter();

  const handleItemClick = (item: DockItem) => {
    if (item.href) {
      if (item.href.startsWith("http")) {
        // External link - open in new tab, stay on current page
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        // Internal route - navigate within app
        router.push(item.href);
      }
    } else if (item.onClick) {
      item.onClick();
    }
  };

  return (
    // ===== DOCK CONTAINER =====
    <div
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50",
        "glass rounded-2xl px-4 py-3",
        className
      )}
    >
      {/* Dock Items Mapper */}
      <div className="flex items-center gap-2">
        {items.map((item) => {
          if (item.isSeparator) {
            return (
              <div
                key={item.id}
                className="h-14 w-px mx-1 bg-border"
                aria-hidden="true"
              />
            );
          }

          return (
            // ===== DOCK ITEM =====
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={cn(
                "group relative flex h-16 w-16 items-center justify-center",
                "rounded-xl transition-all duration-150 ease-out",
                "hover:-translate-y-1 hover:scale-110 cursor-pointer glass-hover"
              )}
              aria-label={item.label}
            >
              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.label}
                width={44}
                height={44}
                className="object-contain transition-transform duration-150 group-hover:scale-110"
              />

              {/* Active Indicator */}
              <div
                className={cn(
                  "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full",
                  "transition-all duration-300 ease-in-out",
                  item.isActive ? "opacity-100" : "opacity-0",
                  "bg-accent"
                )}
              ></div>

              {/* Tooltip */}
              <div
                className={cn(
                  "absolute bottom-full mb-3 left-1/2 -translate-x-1/2",
                  "bg-surface text-foreground text-xs px-2 py-1 rounded-md",
                  "opacity-0 group-hover:opacity-100",
                  "transition-all duration-200 ease-out",
                  "scale-95 group-hover:scale-100",
                  "pointer-events-none",
                  "whitespace-nowrap",
                  "border border-border shadow-md"
                )}
              >
                {item.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
