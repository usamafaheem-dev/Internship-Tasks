import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  console.log("i am parent");
  return (
    <div>
      <button
        className="bg-green-400 p-4 m-4"
        onClick={() => setCount(count + 1)}
      >
        count button: {count}
      </button>

      <Child name="Usama" count1={count1} setCount1={setCount1} />
    </div>
  );
};

export default Parent;
