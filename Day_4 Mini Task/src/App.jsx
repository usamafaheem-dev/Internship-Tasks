import React from "react";
import Timer from "./FinalProject/Timer";
import RefCount from "./FinalProject/RefCount";
import PreviousValueExample from "./FinalProject/PrevValue";
import VideoProject from "./FinalProject/VideoProject";
import FullNameGen from "./FinalProject/FullNameGen";
import ServerConCheck from "./FinalProject/ServerConCheck";
import ChatOption from "./FinalProject/ChatOption";
import ChatOptionRoomId from "./FinalProject/ChatOptionRoomId";
import { usePointerPosition } from "./FinalProject/CursorMoment";
import { useDelayedHook } from "./FinalProject/DelayedFun";

const App = () => {
  const { position } = usePointerPosition();

  const pos1 = useDelayedHook(position, 30);
  const pos2 = useDelayedHook(position, 65);
  const pos3 = useDelayedHook(position, 105);
  const pos4 = useDelayedHook(position, 150);
  const pos5 = useDelayedHook(position, 200);
  const pos6 = useDelayedHook(position, 260);
  const pos7 = useDelayedHook(position, 330);
  const pos8 = useDelayedHook(position, 410);
  const pos9 = useDelayedHook(position, 500);
  const pos10 = useDelayedHook(position, 600);

  const trailPositions = [
    pos1,
    pos2,
    pos3,
    pos4,
    pos5,
    pos6,
    pos7,
    pos8,
    pos9,
    pos10,
  ];
  return (
    <div
      className={`flex gap-4 justify-evenly  flex-wrap w-screen h-screen  md:overflow-hidden`}
    >
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="fixed w-4 h-4 rounded-full pointer-events-none transition-all duration-75"
          style={{
            left: `${pos.x - 8}px`,
            top: `${pos.y - 8}px`,
            background: "blue",

            opacity: 1 - index * 0.18, // fade out jaise peeche jaaye
            transform: `scale(${1 - index * 0.15})`, // size chhota hota jaaye
            zIndex: 50,
          }}
        />
      ))}

      <Timer />
      <RefCount />
      <PreviousValueExample />
      <VideoProject />
      <FullNameGen />
      <ServerConCheck />
      <ChatOptionRoomId />
    </div>
  );
};

export default App;
