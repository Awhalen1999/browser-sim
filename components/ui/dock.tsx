"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface DockItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  isExternal?: boolean;
}

const dockItems: DockItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "/home.png",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    icon: "/profile.png",
    href: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "/projects.png",
    href: "/projects",
  },
  {
    id: "github",
    label: "GitHub",
    icon: "/github.png",
    href: "https://github.com",
    isExternal: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "/linkedin.png",
    href: "https://linkedin.com",
    isExternal: true,
  },
];

export function Dock() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (item: DockItem) => {
    if (item.isExternal) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else if (item.href) {
      router.push(item.href);
    }
  };

  const isActive = (item: DockItem) => {
    if (!item.href || item.isExternal) return false;
    return pathname === item.href;
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl flex space-x-4 items-end h-20">
        {dockItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer flex items-center justify-center transition-all duration-200 ease-out transform hover:-translate-y-3 hover:scale-125 group"
            onClick={() => handleClick(item)}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
            />

            {/* Active indicator */}
            {isActive(item) && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-500 dark:bg-gray-100 rounded-full" />
            )}

            {/* Tooltip */}
            <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
