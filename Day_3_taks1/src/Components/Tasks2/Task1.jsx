import { useState } from "react";

const Task2 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={{
        height: "100vh",
        width: "100vw",
        background: "#f0f0f0",
        position: "relative",
        overflow: "hidden",
                   // cursor hide kar diya for better feel
      }}
    >
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
        Mouse ko idhar udhar ghumao
      </h2>

      {/* Red Dot */}
      <div
        style={{
          position: "absolute",
          left: position.x - 10,
          top: position.y - 10,
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%",
          pointerEvents: "none",   // important
          boxShadow: "0 0 10px rgba(255,0,0,0.6)",
        }}
      />

      <p style={{ position: "absolute", bottom: "20px", left: "20px" }}>
        X: {Math.round(position.x)} | Y: {Math.round(position.y)}
      </p>
    </div>
  );
};

export default Task2;