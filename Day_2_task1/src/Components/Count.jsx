import React, { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          console.log(count);
          (setCount(count + 1),
           console.log(count));
        }}
        className="bg-amber-500 p-4"
      >
        coutner {count}
      </button>
    </div>
  );
};

export default Count;
