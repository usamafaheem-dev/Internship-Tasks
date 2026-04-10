import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.focus();
  };

  return (
    <div>
      <Child ref={ref} />

      <button onClick={handleFocus} className="bg-red-400 p-2 m-3">
        focus
      </button>
    </div>
  );
};

export default Parent;
