import React from "react";

const Items = ({ label }) => {
  console.log("hello child");
  return <div>I am child: {label}</div>;
};

export default React.memo(Items);
