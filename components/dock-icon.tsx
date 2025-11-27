"use client";

import { IconType } from "react-icons";

interface DockIconProps {
  label: string;
  icon: IconType;
  onClick: () => void;
  isActive?: boolean;
}

export function DockIcon({
  label,
  icon: Icon,
  onClick,
  isActive = false,
}: DockIconProps) {
  return (
    <div
      className="relative cursor-pointer flex items-center justify-center transition-all duration-200 ease-out transform hover:-translate-y-3 hover:scale-125 group"
      onClick={onClick}
    >
      {/* Icon container */}
      <div className="w-10  h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-black dark:text-white " />
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-500 dark:bg-gray-100 rounded-full" />
      )}

      {/* Tooltip */}
      <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-black/50 dark:bg-white/50 text-white dark:text-black text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
        {label}
      </div>
    </div>
  );
}
