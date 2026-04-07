import React, { useContext } from "react";
import B from "./B";
import { LevelContext } from "../ContextApi/Context";

const A = () => {
  const level = useContext(LevelContext);
  return <div>you ar in {level} mood</div>;
};

export default A;
