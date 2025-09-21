"use client";

import { create } from "zustand";
import { WindowState, WindowType, WindowConfig } from "../types/window";

interface WindowStore {
  windows: WindowState[];
  nextZIndex: number;
  openWindow: (type: WindowType) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: number, height: number) => void;
}

const windowConfigs: Record<WindowType, WindowConfig> = {
  about: {
    type: "about",
    title: "About",
    defaultSize: { width: 700, height: 500 },
    minSize: { width: 400, height: 300 },
  },
  projects: {
    type: "projects",
    title: "Projects",
    defaultSize: { width: 700, height: 500 },
    minSize: { width: 500, height: 400 },
  },
};

const getCenterPosition = (windowWidth: number, windowHeight: number) => {
  // Handle SSR - window object not available on server
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }

  return {
    x: (window.innerWidth - windowWidth) / 2,
    y: (window.innerHeight - windowHeight) / 3,
  };
};

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  nextZIndex: 10, // Start lower than dock (z-50)

  openWindow: (type: WindowType) => {
    const existingWindow = get().windows.find((w) => w.type === type);

    if (existingWindow) {
      // Focus existing window
      get().focusWindow(existingWindow.id);
      return;
    }

    const config = windowConfigs[type];
    const centerPos = getCenterPosition(
      config.defaultSize.width,
      config.defaultSize.height
    );
    const newWindow: WindowState = {
      id: `${type}-${Date.now()}`,
      type,
      title: config.title,
      position: centerPos,
      size: config.defaultSize,
      isMinimized: false,
      isMaximized: false,
      zIndex: get().nextZIndex,
    };

    set((state) => ({
      windows: [...state.windows, newWindow],
      nextZIndex: state.nextZIndex + 1,
    }));
  },

  closeWindow: (id: string) => {
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    }));
  },

  focusWindow: (id: string) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: state.nextZIndex, isMinimized: false } : w
      ),
      nextZIndex: state.nextZIndex + 1,
    }));
  },

  minimizeWindow: (id: string) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
      ),
    }));
  },

  maximizeWindow: (id: string) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    }));
  },

  updateWindowPosition: (id: string, x: number, y: number) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, position: { x, y } } : w
      ),
    }));
  },

  updateWindowSize: (id: string, width: number, height: number) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, size: { width, height } } : w
      ),
    }));
  },
}));
