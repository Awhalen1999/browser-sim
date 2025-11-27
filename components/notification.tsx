"use client";

import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface NotificationProps {
  id: string;
  title: string;
  message: React.ReactNode;
}

export function Notification({ id, title, message }: NotificationProps) {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification if not seen in session
    const hasSeen = sessionStorage.getItem(`notification-${id}`);
    if (!hasSeen) {
      setTimeout(() => {
        setShow(true);
        // Trigger animation after a brief delay
        setTimeout(() => setIsVisible(true), 10);
      }, 1000);
      sessionStorage.setItem(`notification-${id}`, "true");
    }
  }, [id]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => setShow(false), 300); // Wait for animation to complete
  };

  if (!show) return null;

  return (
    <div
      className={`fixed top-16 right-6 z-50 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-xl p-3 max-w-xs transition-all duration-500 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xs font-medium text-gray-800 dark:text-gray-200 mb-2">
            {title}
          </h3>
          <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            {message}
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <FaXmark className="w-2.5 h-2.5 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
