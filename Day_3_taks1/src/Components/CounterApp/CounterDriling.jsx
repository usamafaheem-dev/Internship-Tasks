import React from "react";
import { useCount } from "./CounterContext";

const CounterDriling = () => {
    const count = useCount()
  return (
    <div>
      <h1 className="text-5xl">{count}</h1>
      <hr />
      <br />
    </div>
  );
};

export default CounterDriling;
