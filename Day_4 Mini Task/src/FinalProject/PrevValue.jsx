import React, { useState, useRef, useEffect } from "react";

const PreviousValueExample = () => {
  const [count, setCount] = useState(0);

  // Previous value store karne ke liye ref
  const prevCountRef = useRef(0);

  useEffect(() => {
    // Har render ke BAAD yeh chalega
    // Yani abhi count jo hai wo "current" hai
    // aur prevCountRef.current mein "pichhla" value hai
    prevCountRef.current = count;
  }, [count]); // jab bhi count change ho, tab update karo

  const previousCount = prevCountRef.current;

  return (
    <div className="border-2 w-75 h-85  bg-yellow-100 flex justify-center items-center flex-col  border-blue-500 rounded ">
      <h2 className="text-medium font-bold">
        Current Count: <span className="font-bold text-blue-600">{count}</span>
      </h2>
      <h2 className="text-medium font-bold">
        Previous Count:{" "}
        <span className="font-bold text-red-600">{previousCount}</span>
      </h2>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-pink-500 font-medium text-white px-5 py-2 mt-4 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default PreviousValueExample;
