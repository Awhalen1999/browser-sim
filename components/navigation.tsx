"use client";

import { usePathname } from "next/navigation";
import { Dock, type DockItem } from "@/components/ui/dock";

const NAVIGATION_ITEMS: DockItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "/home.png",
    href: "/",
  },
  {
    id: "separator",
    label: "Separator",
    icon: "",
    isSeparator: true,
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
    id: "separator",
    label: "Separator",
    icon: "",
    isSeparator: true,
  },
  {
    id: "github",
    label: "GitHub",
    icon: "/github.png",
    href: "https://github.com/Awhalen1999",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "/linkedin.png",
    // todo: add linkedin link
    href: "https://linkedin.com",
  },
];

export function Navigation() {
  const pathname = usePathname();

  const items = NAVIGATION_ITEMS.map((item) => ({
    ...item,
    isActive:
      (item.id === "home" && pathname === "/") ||
      (item.id === "about" && pathname === "/about") ||
      (item.id === "projects" && pathname === "/projects"),
  }));

  return <Dock items={items} />;
}
