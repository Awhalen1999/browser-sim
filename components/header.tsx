"use client";

import { useState, useEffect } from "react";
import { useWindowStore } from "@/lib/stores/window-store";

export default function Header() {
  const [time, setTime] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const { windows } = useWindowStore();

  // Check if any window is maximized
  const isAnyWindowMaximized = windows.some((w) => w.isMaximized);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dayString = now.toLocaleDateString("en-US", {
        weekday: "short",
      });
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(`${dayString} ${timeString}`);
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Trigger load animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 px-6 h-10 flex items-center justify-between bg-black/10 dark:bg-white/10 z-100 backdrop-blur-md ${
        isAnyWindowMaximized
          ? "transition-none -translate-y-full opacity-0"
          : isLoaded
          ? "transition-all duration-500 ease-out translate-y-0 opacity-100"
          : "transition-none -translate-y-full opacity-0"
      }`}
    >
      {/* Left side - Name */}
      <div className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-extra-wide">
        BROWSER SIM
      </div>

      {/* Right side - Time */}
      <div className="text-sm font-mono text-gray-600 dark:text-gray-400 tabular-nums ">
        {time}
      </div>
    </header>
  );
}
