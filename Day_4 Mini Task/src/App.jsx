import React from "react";
import Timer from "./FinalProject/Timer";
import RefCount from "./FinalProject/RefCount";
import PreviousValueExample from "./FinalProject/PrevValue";
import VideoProject from "./FinalProject/VideoProject";
import FullNameGen from "./FinalProject/FullNameGen";
import ServerConCheck from "./FinalProject/ServerConCheck";

import ChatOptionRoomId from "./FinalProject/ChatOptionRoomId";

import CursorTrail from "./FinalProject/CurserTrail";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div
      className={`flex gap-4 justify-evenly  flex-wrap w-screen h-screen  md:overflow-hidden`}
    >
      <CursorTrail />
      <Timer />
      <RefCount />
      <PreviousValueExample />
      <VideoProject />
      <FullNameGen />
      <ServerConCheck />
      <ChatOptionRoomId />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 2000 },
          error: { duration: 2000 },
        }}
      />
    </div>
  );
};

export default App;
