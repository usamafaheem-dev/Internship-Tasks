import React, { useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0);
  console.log("i am child ");
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 p-3 m-4"
      >
        i am child : {count}
      </button>
    </div>
  );
};

export default React.memo(Child);
