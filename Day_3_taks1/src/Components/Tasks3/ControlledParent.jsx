import React from "react";
// import UnControlledParent from "./UnControlledParent";
import ControlledChild from "./ControlledChild";

const ControlledParent = () => {
  return (
    <div>
      <ControlledChild title="Pakistan">my name is usama</ControlledChild>
      <ControlledChild title="India">my name ali</ControlledChild>
    </div>
  );
};

export default ControlledParent;
