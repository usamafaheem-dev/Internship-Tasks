import React, { useState } from "react";

const EventHandle = () => {
  let [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    
  };
  return (
    <div>
      <button
        className="bg-black text-white rounded-xl px-3  py-1 m-4 cursor-progress"
        onClick={() => alert("Button Clicked!")}
      >
        Click me{" "}
      </button>
      <button
        className="bg-black text-white rounded-xl px-3  py-1 m-4 cursor-pointer"
        onClick={handleCount}
      >
        Increament by 3 : {count}
      </button>
    </div>
  );
};

export default EventHandle;
