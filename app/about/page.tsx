import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
            Alex Whalen
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Hey! I'm Alex Whalen, a passionate full-stack developer and creative
            problem solver.
          </p>
        </div>

        {/* Work Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-text-secondary">Working at</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-text-primary font-medium">TechCorp</span>
            </div>
            <span className="text-text-muted">/</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-text-primary font-medium">Freelance</span>
            </div>
          </div>
        </div>

        {/* Creator Section */}
        <div className="mb-12">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-text-secondary">Creator of</span>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-text-primary font-medium">
                  DevTools Pro
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-text-primary font-medium">
                  React Starter
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-text-primary font-medium">
                  Code Snippets
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span className="text-text-primary font-medium">
                  Design System
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Team Section */}
        <div className="mb-12">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-text-secondary">Core team of</span>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span className="text-text-primary font-medium">React</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                <span className="text-text-primary font-medium">Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-text-primary font-medium">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Maintaining Section */}
        <div className="mb-16">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-text-secondary">Maintaining</span>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-text-primary font-medium">
                  Portfolio Kit
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span className="text-text-primary font-medium">
                  UI Components
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="text-text-primary font-medium">Dev Utils</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description Paragraphs */}
        <div className="space-y-6 mb-16 text-text-secondary leading-relaxed">
          <p>
            Dreaming up innovative solutions and bringing them to life is where
            my passion lies. I am enthusiastic about building tools and
            applications that help people be more productive and enjoy the
            process of creating. You can find my{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              full projects list here
            </a>
            .
          </p>

          <p>
            I give{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              talks
            </a>{" "}
            and write{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              blog posts
            </a>{" "}
            about web development, React, and modern JavaScript. Occasionally, I
            do live coding streams on{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              Twitch
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              YouTube
            </a>
            . I am also co-hosting a podcast{" "}
            <span className="italic">Dev Life Today</span>, talking about
            various topics around programming. From time to time, I create some
            interactive experiments on{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              CodePen
            </a>
            .
          </p>

          <p>
            Outside of programming, I enjoy doing photography and traveling. I
            post{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              photos on this page
            </a>
            . I also love movies and music, I am trying to list my{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              media consumption
            </a>
            . Also, in case you are interested, here are the{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              hardware/software I use
            </a>
            .
          </p>

          <p>
            I recently moved to{" "}
            <span className="inline-flex items-center gap-1">
              San Francisco
              <span className="text-xs bg-text-muted/20 px-1.5 py-0.5 rounded">
                SF
              </span>
            </span>
            , if you are around, please reach out and let's have some coffee or{" "}
            <a
              href="#"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors underline"
            >
              work together
            </a>
            .
          </p>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-12">
          <h2 className="text-xl font-semibold text-text-primary mb-8">
            Find me on
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="flex items-center gap-3 text-text-secondary hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-lg">🐙</span>
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-text-secondary hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-lg">🐦</span>
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-text-secondary hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-lg">💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-text-secondary hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-lg">📺</span>
              <span>YouTube</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-text-secondary hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-lg">📷</span>
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-text-secondary hover:text-[var(--accent)] transition-colors"
            >
              <span className="text-lg">💬</span>
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
