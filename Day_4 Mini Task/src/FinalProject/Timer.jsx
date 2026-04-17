import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const   Timer = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(null);

  const handleStart = () => {
    if (countRef.current) return;

    countRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    toast.success(`Timer start`,);
  };

  const handleStop = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
      countRef.current = null;
    }
    toast.error(`Timer stop`);
  };

  const handleReset = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
      countRef.current = null;
    }
    setCount(0);
    toast.error("Timer reset", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="border-2 w-75 h-85 bg-blue-100 flex justify-center items-center flex-col gap-4 border-blue-500 rounded ">
      <h1 className="text-4xl font-bold"> Seconds: {count}</h1>

      <div className="flex gap-3">
        <button
          onClick={handleStart}
          className="bg-green-500 rounded p-4 py-2 text-white font-bold"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 rounded p-4 py-2 text-white font-bold"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-pink-500 rounded p-4 py-2 text-white font-bold"
        >
          Reset
        </button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Timer;
