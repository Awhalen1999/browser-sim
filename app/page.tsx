"use client";

import React, { useEffect } from "react";
import AnimatedEyes from "@/components/animated-eyes";
import { Window } from "@/components/window";
import { useWindowStore } from "@/lib/stores/window-store";
import { WindowState } from "@/lib/types/window";
import { Notification } from "@/components/notification";

const Page = () => {
  const { windows, closeWindow } = useWindowStore();

  // ESC key listener to close all windows
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        windows.forEach((window) => closeWindow(window.id));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [windows, closeWindow]);

  return (
    <div className="min-h-screen">
      <AnimatedEyes />

      {/* ESC Key Tip Notification */}
      <Notification
        id="esc-key-tip"
        title="💡 Quick Tip"
        message={
          <div>
            Press{" "}
            <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
              ESC
            </kbd>{" "}
            to close all windows
          </div>
        }
      />

      {/* Render all open windows */}
      {windows.map((window: WindowState) => (
        <Window key={window.id} window={window} />
      ))}
    </div>
  );
};

export default Page;
