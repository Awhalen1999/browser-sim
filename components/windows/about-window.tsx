"use client";

export function AboutWindow() {
  return (
    <div className="h-full bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-2xl mx-auto p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Alex Whalen
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Hey! I'm Alex Whalen, a passionate full-stack developer and mobile
            engineer.
          </p>
        </div>

        {/* Professional Info */}
        <div className="space-y-3">
          <div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Working at
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium">
                TechCorp
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs font-medium">
                StartupXYZ
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Creator of
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs font-medium">
                ReactNativeApp
              </span>
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs font-medium">
                WebToolkit
              </span>
              <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded text-xs font-medium">
                MobileFramework
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Core team of
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded text-xs font-medium">
                React
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-medium">
                Next.js
              </span>
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs font-medium">
                TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="space-y-3">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Building innovative solutions that bridge the gap between mobile and
            web is where my passion lies. I'm enthusiastic about creating tools
            that enhance productivity and make development more enjoyable. You
            can find my{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
              full projects list here
            </span>
            .
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            I write{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
              technical articles
            </span>{" "}
            and give{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
              talks
            </span>{" "}
            about modern web development. Occasionally, I stream coding sessions
            on{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
              YouTube
            </span>
            and share insights on{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
              Twitter
            </span>
            .
          </p>
        </div>

        {/* Hobbies */}
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Outside of programming, I enjoy photography and traveling. I post
            <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
              {" "}
              photos on this page
            </span>
            . I also love music, movies, and exploring new technologies. Here
            are the
            <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">
              {" "}
              tools I use
            </span>
            .
          </p>
        </div>

        {/* Location */}
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Based in{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              San Francisco
            </span>
            , if you're around, let's grab coffee and discuss the latest in
            tech!
          </p>
        </div>

        {/* Social Links */}
        <div>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Find me on
          </span>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              GitHub
            </span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              LinkedIn
            </span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Twitter
            </span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Email
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
