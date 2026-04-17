import React from "react";
import StateChange from "./Task5/StateChange";
import { SaveButton, StatusOnline } from "./Task7/CustomHook";
import InputUse from "./Task7/InputUse";
import RefCount from "./FinalProject/RefCount";
import PreviousValueExample from "./FinalProject/PrevValue";
import Timer from "./FinalProject/Timer";

const App = () => {
  return (
    <div className="flex gap-4 justify-between items-center">
      {/* <PreviousValueExample /> */}
      <Timer />
      {/* <RefCount /> */}
    </div>
  );
};

export default App;
