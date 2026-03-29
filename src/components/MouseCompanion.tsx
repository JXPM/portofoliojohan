"use client";

import { useEffect, useState } from "react";

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

const MouseCompanion = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<TrailPoint[]>([]);
  const [active, setActive] = useState(false);
  const maxTrailAge = 620;

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) {
      return;
    }

    const updatePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setActive(true);
      setTrails((prev) => [
        {
          id: performance.now() + Math.random(),
          x: event.clientX,
          y: event.clientY,
          createdAt: Date.now(),
        },
        ...prev,
      ]);
    };

    window.addEventListener("mousemove", updatePosition);
    const cleanupInterval = window.setInterval(() => {
      const now = Date.now();
      setTrails((prev) => prev.filter((point) => now - point.createdAt < maxTrailAge));
    }, 40);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.clearInterval(cleanupInterval);
    };
  }, []);

  if (!active) {
    return null;
  }

  return (
    <>
      {trails.map((point, index) => {
        const age = Date.now() - point.createdAt;
        const opacity = Math.max(0, 1 - age / maxTrailAge) * (1 - index * 0.1);
        const scale = Math.max(0.45, 1 - index * 0.07);
        return (
          <div
            key={point.id}
            className="pointer-events-none fixed z-[68]"
            style={{
              left: point.x + 18,
              top: point.y + 18,
              opacity,
              transform: `translate3d(0, 0, 0) scale(${scale})`,
            }}
            aria-hidden="true"
          >
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
              alt=""
              className="h-14 w-14"
            />
          </div>
        );
      })}
      <div
        className="pointer-events-none fixed z-[70] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x + 18}px, ${position.y + 18}px, 0)`,
        }}
        aria-hidden="true"
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pokemon cursor companion"
          className="h-20 w-20 drop-shadow-[0_10px_18px_rgba(0,0,0,0.45)]"
        />
      </div>
    </>
  );
};

export default MouseCompanion;
