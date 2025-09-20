"use client";

export function AboutWindow() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          About
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Window content will be added here
        </p>
      </div>
    </div>
  );
}
