"use client";

import React from "react";
import AnimatedEyes from "@/components/animated-eyes";
import { Window } from "@/components/window";
import { useWindowStore } from "@/lib/stores/window-store";
import { WindowState } from "@/lib/types/window";

const Page = () => {
  const { windows } = useWindowStore();

  return (
    <div className="min-h-screen">
      <AnimatedEyes />

      {/* Render all open windows */}
      {windows.map((window: WindowState) => (
        <Window key={window.id} window={window} />
      ))}
    </div>
  );
};

export default Page;
