import React, { useState } from "react";
import Child from "./Child";

const Parents = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      <h1>count : {count}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br />
      <br />

      <Child name= />
    </div>
  );
};

export default Parents;
