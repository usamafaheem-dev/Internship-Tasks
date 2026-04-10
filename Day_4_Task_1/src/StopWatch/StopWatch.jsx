import React, { useRef, useState } from "react";

const StopWatch = () => {
  const ref = useRef(null);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(ref.current);

    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  let SecondPassed = 0;

  if (startTime !== null && now !== null) {
    SecondPassed = (now - startTime) / 1000;
  }

  const handleStop = () => {
    clearInterval(ref.current);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold">{SecondPassed.toFixed(3)}</h1>
      <button className="bg-green-500 text-white p-3 m-3 " onClick={handleStart}>
        Start
      </button>
      <button className="bg-red-500 text-white p-3 m-3 " onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};

export default StopWatch;
