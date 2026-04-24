import React from "react";

const Child = ({ count1, setCount1 }) => {
  console.log("i am child");
  return (
    <div>
      {/* My name is {name} <br /> */}
      <button
        className="bg-green-400 p-4 m-4"
        onClick={() => setCount1(count1 + 1)}
      >
        count button: {count1}
      </button>
    </div>
  );
};

export default React.memo(Child);
