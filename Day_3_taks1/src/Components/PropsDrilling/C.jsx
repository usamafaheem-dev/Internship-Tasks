import React, { useContext } from "react";
import { LevelContext } from "../ContextApi/Context";

const C = () => {
  const name = useContext(LevelContext);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default C;
