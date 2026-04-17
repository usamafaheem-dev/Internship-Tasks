import React from "react";
import { usePointerPosition } from "./CursorMoment";
import { useDelayedHook } from "./DelayedFun";

const CursorTrail = () => {
  const position = usePointerPosition();



  const delays = [30, 70, 120, 180, 250, 330, 420, 520, 630];

  const trailPositions = delays.map((delay) => useDelayedHook(position, delay));

  return (
    <>
      {/* Main Red Cursor (Real-time) */}
      <div
        className="fixed w-6 h-6 rounded-full border-4 border-red-500 pointer-events-none z-[9999]"
        style={{
          left: `${position.x - 12}px`,
          top: `${position.y - 12}px`,
        }}
      />

      {/* Trail */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="fixed w-5 h-5 rounded-full pointer-events-none transition-all duration-75"
          style={{
            left: `${pos.x - 10}px`,
            top: `${pos.y - 10}px`,
            backgroundColor: "blue",
            opacity: 1 - index * 0.1,
            transform: `scale(${1 - index * 0.12})`,
            zIndex: 50 - index,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
