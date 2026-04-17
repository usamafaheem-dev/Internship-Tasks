import React, { useState, useRef, useEffect } from "react";

const PreviousValueExample = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="border-2 w-80 h-80 bg-yellow-100 flex justify-center items-center flex-col border-blue-500 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-3">
        Current Count: <span className="text-blue-600">{count}</span>
      </h2>
      <h2 className="text-xl font-bold mb-6">
        Previous Count:{" "}
        <span className="text-red-600">{prevCountRef.current}</span>
      </h2>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-lg text-white font-bold transition"
      >
        Increment
      </button>
    </div>
  );
};

export default React.memo(PreviousValueExample);
