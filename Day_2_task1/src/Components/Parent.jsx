import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("i am parent")
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-pink-500 p-3 m-4"
      >
        i am parent button : {count}
      </button>

      <Child/>
    </div>
  );
};

export default React.memo(Parent);
