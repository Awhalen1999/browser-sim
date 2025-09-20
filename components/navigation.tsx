"use client";

import { Dock, type DockItem } from "@/components/ui/dock";

const NAVIGATION_ITEMS: DockItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "/home.png",
    onClick: () => {
      // Navigate to home section
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  {
    id: "projects",
    label: "Projects",
    icon: "/projects.png",
    onClick: () => {
      // Navigate to projects section
      const element = document.getElementById("projects");
      element?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "profile",
    label: "About",
    icon: "/profile.png",
    onClick: () => {
      // Navigate to about section
      const element = document.getElementById("about");
      element?.scrollIntoView({ behavior: "smooth" });
    },
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
    href: "https://linkedin.com/in/your-profile", // Update with your LinkedIn
  },
];

export function Navigation() {
  return <Dock items={NAVIGATION_ITEMS} />;
}
