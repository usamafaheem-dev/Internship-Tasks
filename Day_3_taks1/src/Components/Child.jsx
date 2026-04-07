import React from "react";

const Child = (props) => {
  const { state, contentFun } = props;

  const incrementHanlde = () => {
    contentFun(state + 1);
  };
  console.log("child", state);
  return (
    <div>
      {/* <button onClick={() => sendData("Usama")} className="bg-red-500 p-3">
        send data{" "}
      </button> */}
      <button className="bg-red-500 p-4" onClick={incrementHanlde}>
        increase
      </button>
      <p>The value is : {state}</p>
    </div>
  );
};

export default React.memo(Child);
