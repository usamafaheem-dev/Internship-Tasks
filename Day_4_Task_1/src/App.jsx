import React from "react";
import StateChange from "./Task5/StateChange";
import { SaveButton, StatusOnline } from "./Task7/CustomHook";
import InputUse from "./Task7/InputUse";
import RefCount from "./FinalProject/RefCount";
import PreviousValueExample from "./FinalProject/PrevValue";
import Timer from "./FinalProject/Timer";
import LuxuryStopwatch from "./StopWatch/StopWatch";
import VideoPlayerParent from "./Task3/VideoPlayerParent";

const App = () => {
  return (
    <div className="">
      {/* <PreviousValueExample /> */}
      {/* <Timer /> */}
      {/* <RefCount /> */}
      <LuxuryStopwatch/>
      <VideoPlayerParent/>
    </div>
  );
};

export default App;
