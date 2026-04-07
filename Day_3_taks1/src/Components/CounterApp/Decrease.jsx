import React from "react";
import { useDispatch } from "./CounterContext";

const Decrease = () => {
  const dispatch =useDispatch()
  return (
    <div>
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        className="bg-red-500 px-3 py-1 rounded mb-3 ml-3 text-white text-xl font-medium"
      >
        Decrease
      </button>
    </div>
  );
};

export default Decrease;
