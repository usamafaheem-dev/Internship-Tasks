import React from "react";
import { useState } from "react";
import ServerCheck from "./ServerCheck";
import ChatOption from "./ChatOption";

const ChatOptionRoomId = () => {
  const [roomId, SetRoomId] = useState("1");

  return (
    <div className="border-2 w-75 h-85  bg-purple-100 flex justify-center items-center flex-col  border-blue-500 rounded ">
      <ChatOption roomId={roomId} />
      {/* <span className="text-gray-600 text-sm">Output in console</span> */}
      <select
        onChange={(e) => SetRoomId(e.target.value)}
        className="bg-green-300 p-2 rounded mt-2 font-medium text-medium focus:outline-pink-600 border-pink-600"
      >
        <option value={"1"} className="bg-gray-300">
          General
        </option>
        <option value={"2"} className="bg-orange-200">
          Travel
        </option>
        <option value={"3"} className="bg-gray-300">
          Swag Mood
        </option>
        <option value={"4"} className="bg-orange-200">
          Outside
        </option>
      </select>
    </div>
  );
};

export default ChatOptionRoomId;
