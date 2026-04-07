import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handeInc = () => {
    count >= 20
      ? toast.error("you can't go above the 20")
      : (() => {
          const nextValue = count + 1;
          setCount(nextValue);
          toast.success(`The number is ${nextValue}`);
        })();
  };

  const handleDec = () => {
    count <= 0
      ? toast.error("you can't go under the 0")
      : (() => {
          const prevValue = count - 1;
          setCount(prevValue);
          toast.success(`The number is ${prevValue}`);
        })();
  };
  return (
    <div className="md:w-80 md:h-80 py-3 md:py-0   inset-ring inset-1  inset-ring-white rounded-lg  flex justify-center items-center">
      <section className="flex flex-col gap-3   ">
        <span className="font-bold m-4 text-9xl text-white text-center">
          {count}
        </span>
        <button
          onClick={handeInc}
          className="bg-red-500 px-4 py-2 rounded-lg font-medium"
        >
          Increment
        </button>
        <button
          onClick={handleDec}
          className="bg-green-500 px-4 py-2 rounded-lg font-medium"
        >
          decrement
        </button>
      </section>
      <Toaster position="top-right" />
    </div>
  );
};

export default Counter;
