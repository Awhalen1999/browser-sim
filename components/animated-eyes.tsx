"use client";

import { useEffect, useRef } from "react";

export default function AnimatedEyes() {
  const ballRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX * 100) / window.innerWidth - 50;
      const y = (event.clientY * 100) / window.innerHeight - 50;

      ballRefs.current.forEach((ball) => {
        if (ball) {
          ball.style.left = x + "%";
          ball.style.top = y + "%";
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex gap-20">
        {/* Left Eye */}
        <div className="relative w-60 h-32 bg-white rounded-full overflow-hidden">
          <div
            ref={(el) => {
              ballRefs.current[0] = el;
            }}
            className="pupil absolute w-20 h-20 bg-black rounded-full transition-all duration-100 ease-out"
            style={{ transform: "translate(50%, 50%)" }}
          />
        </div>

        {/* Right Eye */}
        <div className="relative w-60 h-32 bg-white rounded-full overflow-hidden">
          <div
            ref={(el) => {
              ballRefs.current[1] = el;
            }}
            className="pupil absolute w-20 h-20 bg-black rounded-full transition-all duration-100 ease-out"
            style={{ transform: "translate(50%, 50%)" }}
          />
        </div>
      </div>
    </div>
  );
}
