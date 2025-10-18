"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { MdDarkMode, MdLightMode, MdPerson, MdFolder } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DockIcon } from "./dock-icon";
import { useWindowStore } from "@/lib/stores/window-store";
import { WindowType, WindowState } from "@/lib/types/window";

interface DockItem {
  id: string;
  label: string;
  icon: IconType;
  href?: string;
  windowType?: WindowType;
}

const localDockItems: DockItem[] = [
  {
    id: "window-1",
    label: "Window 1",
    icon: MdPerson,
    windowType: "1",
  },
  {
    id: "window-2",
    label: "Window 2",
    icon: MdFolder,
    windowType: "2",
  },
];

const externalDockItems: DockItem[] = [
  {
    id: "github",
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com",
  },
];

const buttonDockItems: DockItem[] = [
  {
    id: "theme",
    label: "Theme",
    icon: MdDarkMode, // This will be dynamically changed based on theme
  },
];

export function Dock() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { openWindow, windows } = useWindowStore();

  // Check if any window is maximized
  const isAnyWindowMaximized = windows.some((w) => w.isMaximized);

  useEffect(() => {
    setMounted(true);
    // Trigger load animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLocalClick = (item: DockItem) => {
    if (item.windowType) {
      openWindow(item.windowType);
    }
  };

  const handleExternalClick = (item: DockItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
  };

  const handleButtonClick = (item: DockItem) => {
    if (item.id === "theme") {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  const isActive = (item: DockItem) => {
    if (item.windowType) {
      return windows.some((w: WindowState) => w.type === item.windowType);
    }
    return false;
  };

  return (
    <div
      className={`fixed bottom-2 left-1/2 -translate-x-1/2 z-100 ${
        isAnyWindowMaximized
          ? "transition-none translate-y-full opacity-0"
          : isLoaded
          ? "transition-all duration-500 ease-out translate-y-0 opacity-100"
          : "transition-none translate-y-full opacity-0"
      }`}
    >
      <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md border border-gray-400 dark:border-gray-600 px-6 py-3 rounded-2xl flex space-x-4 items-end h-16">
        {/* Local navigation items */}
        {localDockItems.map((item) => (
          <DockIcon
            key={item.id}
            label={item.label}
            icon={item.icon}
            onClick={() => handleLocalClick(item)}
            isActive={isActive(item)}
          />
        ))}

        {/* Separator */}
        <div className="w-0.5 h-10 bg-gray-400 dark:bg-gray-600 opacity-60 self-center" />

        {/* External social items */}
        {externalDockItems.map((item) => (
          <DockIcon
            key={item.id}
            label={item.label}
            icon={item.icon}
            onClick={() => handleExternalClick(item)}
            isActive={isActive(item)}
          />
        ))}

        {/* Separator */}
        <div className="w-0.5 h-10 bg-gray-400 dark:bg-gray-600 opacity-60 self-center" />

        {/* Button items */}
        {buttonDockItems.map((item) => (
          <DockIcon
            key={item.id}
            label={item.label}
            icon={mounted && theme === "dark" ? MdLightMode : MdDarkMode}
            onClick={() => handleButtonClick(item)}
            isActive={false}
          />
        ))}
      </div>
    </div>
  );
}
