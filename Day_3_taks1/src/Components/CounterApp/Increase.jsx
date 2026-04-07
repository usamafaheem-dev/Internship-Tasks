import React from "react";
import { useDispatch } from "./CounterContext";

const Increase = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-green-500 px-3 py-1 rounded mb-3 ml-3 text-white text-xl font-medium"
      >
        Increment
      </button>
    </div>
  );
};

export default Increase;
