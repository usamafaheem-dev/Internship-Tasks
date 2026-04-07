import React from "react";
import { useDispatch } from "./CounterContext";

const Reset = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="bg-pink-500 px-3 py-1 rounded mb-3 ml-3 text-white text-xl font-medium"
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
