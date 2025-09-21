"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [time, setTime] = useState("");

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

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 px-6 h-10 flex items-center justify-between bg-black/10 dark:bg-white/10">
      {/* Left side - Name */}
      <div className="text-sm font-mono text-gray-900 dark:text-gray-100 tracking-extra-wide">
        A.DEV
      </div>

      {/* Right side - Time */}
      <div className="text-sm font-mono text-gray-600 dark:text-gray-400 tabular-nums ">
        {time}
      </div>
    </header>
  );
}
