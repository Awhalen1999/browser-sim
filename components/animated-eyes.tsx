"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedEyes() {
  const ballRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    // Initial opening after 1 second
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    // Start blinking cycle after eyes are open
    const blinkTimer = setTimeout(() => {
      const blink = () => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      };

      // Random blink every 2-5 seconds
      const scheduleNextBlink = () => {
        const delay = Math.random() * 3000 + 2000; // 2-5 seconds
        setTimeout(() => {
          blink();
          scheduleNextBlink();
        }, delay);
      };

      scheduleNextBlink();
    }, 2000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(blinkTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex gap-20">
        {/* Left Eye */}
        <div
          className={`relative w-60 bg-white rounded-full overflow-hidden transition-all duration-300 ease-out ${
            !isOpen || isBlinking ? "h-1" : "h-32"
          }`}
        >
          <div
            ref={(el) => {
              ballRefs.current[0] = el;
            }}
            className="pupil absolute w-20 h-20 bg-black rounded-full transition-all duration-100 ease-out"
            style={{ transform: "translate(50%, 50%)" }}
          />
        </div>

        {/* Right Eye */}
        <div
          className={`relative w-60 bg-white rounded-full overflow-hidden transition-all duration-300 ease-out ${
            !isOpen || isBlinking ? "h-1" : "h-32"
          }`}
        >
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
