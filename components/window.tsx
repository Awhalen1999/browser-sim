"use client";

import { useRef } from "react";
import { WindowState } from "@/lib/types/window";
import { useWindowStore } from "@/lib/stores/window-store";
import { AboutWindow } from "./windows/about-window";
import { ProjectsWindow } from "./windows/projects-window";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";

// Type safety utilities
const isValidNumber = (value: unknown): value is number => {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
};

const isValidCoordinate = (x: unknown, y: unknown): boolean => {
  return isValidNumber(x) && isValidNumber(y);
};

const isValidDimension = (width: unknown, height: unknown): boolean => {
  return (
    isValidNumber(width) && isValidNumber(height) && width > 0 && height > 0
  );
};

interface WindowProps {
  window: WindowState;
}

export function Window({ window }: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isResizing = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ width: 0, height: 0, x: 0, y: 0 });

  const {
    closeWindow,
    focusWindow,
    maximizeWindow,
    updateWindowPosition,
    updateWindowSize,
  } = useWindowStore();

  // Shared event handler setup
  const setupMouseHandlers = (
    onMouseMove: (e: MouseEvent) => void,
    onMouseUp: () => void
  ) => {
    const handleMouseUp = () => {
      onMouseUp();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    focusWindow(window.id);

    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const newX = e.clientX - dragOffset.current.x;
        const newY = Math.max(0, e.clientY - dragOffset.current.y);

        if (isValidCoordinate(newX, newY)) {
          updateWindowPosition(window.id, newX, newY);
        }
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    setupMouseHandlers(handleMouseMove, handleMouseUp);
  };

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    focusWindow(window.id);

    isResizing.current = true;
    resizeStart.current = {
      width: window.size.width,
      height: window.size.height,
      x: e.clientX,
      y: e.clientY,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing.current) {
        const deltaX = e.clientX - resizeStart.current.x;
        const deltaY = e.clientY - resizeStart.current.y;
        const newWidth = Math.max(400, resizeStart.current.width + deltaX);
        const newHeight = Math.max(300, resizeStart.current.height + deltaY);

        if (isValidDimension(newWidth, newHeight)) {
          updateWindowSize(window.id, newWidth, newHeight);
        }
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
    };

    setupMouseHandlers(handleMouseMove, handleMouseUp);
  };

  const renderWindowContent = () => {
    switch (window.type) {
      case "about":
        return <AboutWindow />;
      case "projects":
        return <ProjectsWindow />;
      default:
        return <div className="p-4">Unknown window type</div>;
    }
  };

  const windowStyle = window.isMaximized
    ? {
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: window.zIndex,
      }
    : {
        left: window.position.x,
        top: window.position.y,
        width: window.size.width,
        height: window.size.height,
        zIndex: window.zIndex,
      };

  return (
    <div
      ref={windowRef}
      className="absolute bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
      style={windowStyle}
    >
      {/* Window Header */}
      <div
        className="bg-gray-100 dark:bg-gray-800 px-4 h-11 flex items-center justify-between cursor-move border-b border-gray-200 dark:border-gray-700"
        onMouseDown={startDrag}
      >
        {/* Buttons */}
        <div className="flex space-x-2">
          <button
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center"
            onClick={() => closeWindow(window.id)}
          >
            <FaXmark className="text-gray-800 opacity-0 hover:opacity-100 transition-opacity w-2 h-2" />
          </button>
          <button
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center"
            onClick={() => closeWindow(window.id)}
          >
            <FaMinus className="text-gray-800 opacity-0 hover:opacity-100 transition-opacity w-2 h-2" />
          </button>
          <button
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center"
            onClick={() => maximizeWindow(window.id)}
          >
            <FaPlus className="text-gray-800 opacity-0 hover:opacity-100 transition-opacity w-2 h-2" />
          </button>
        </div>

        {/* Window Title */}
        <div className="flex-1 text-center">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {window.title}
          </span>
        </div>

        {/* Spacer for centering */}
        <div className="w-[60px]" />
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto">{renderWindowContent()}</div>

      {/* Resize Handle */}
      {!window.isMaximized && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
          onMouseDown={startResize}
        >
          <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-gray-400 dark:border-gray-600" />
        </div>
      )}
    </div>
  );
}
