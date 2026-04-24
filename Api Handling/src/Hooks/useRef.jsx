import React, { useRef, useState } from "react";

const UseRef = () => {
  const refInput = useRef(null);
  const countRef = useRef(0);
  const [count1, setCount] = useState(0);
  const handleClick = () => {
    refInput.current.focus();
  };
  const handleCount = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  const count = countRef.current;
  return (
    <div>
      <input
        type="text"
        ref={refInput}
        placeholder="enter your name"
        className="border p-4 rounded"
      />
      <button
        className="bg-red-400 p-4 m-4 rounded"
        onClick={handleClick}
        onClick={handleCount}
      >
        foucs
      </button>
      <br />
      <button onClick={() => setCount(count1 + 1)}>increase</button>
      <span>{count1}</span>
      <br />
      <br />
      <span>{count}</span>
    </div>
  );
};

export default UseRef;
