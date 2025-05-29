"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="hidden md:block fixed z-50 w-[50rem] h-[50rem] rounded-full bg-[rgba(25,33,255,0.3)] pointer-events-none transition-transform opacity-50 blur-[200px]"
      style={{
        transform: `translate(${position.x - 400}px, ${position.y - 400}px)`, // Center the glow
        animationDuration: `0ms`,
        transitionDuration: `0ms`
      }}
    />
  );
};

export default CustomCursor;