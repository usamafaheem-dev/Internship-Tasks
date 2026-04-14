import React from "react";

const Child = ({ name }) => {
  console.log("ma child ho ");
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Child;
