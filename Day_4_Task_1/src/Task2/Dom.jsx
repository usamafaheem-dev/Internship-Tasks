import React, { useRef } from "react";

const Dom = () => {
  const ref = useRef(null);

  const handleInput = () => {
    ref.current.focus();
  };
  return (
    <div>
      <input
        type="text"
        className="bg-red-400 p-3"
        placeholder="enter text"
        ref={ref}
      />
      <button className="bg-red-400 p-3 m-3" onClick={handleInput}>
        clic me
      </button>
    </div>
  );
};

export default Dom;
