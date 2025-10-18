"use client";

export function Window2() {
  return (
    <div className="h-full bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-2xl mx-auto p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Window 2
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            This is Window 2.
          </p>
        </div>
      </div>
    </div>
  );
}
