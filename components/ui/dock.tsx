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
              "group relative flex h-16 w-16 items-center justify-center",
              "rounded-xl transition-all duration-150 ease-out",
              "hover:-translate-y-1 hover:scale-120"
            )}
            aria-label={item.label}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={44}
              height={44}
              className="object-contain transition-transform duration-150 group-hover:scale-120"
            />
            <div
              className={cn(
                "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full",
                "transition-all duration-300 ease-in-out",
                item.isActive ? "opacity-100" : "opacity-0"
              )}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
