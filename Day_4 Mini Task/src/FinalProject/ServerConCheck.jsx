import React from "react";
import { useState } from "react";
import ServerCheck from "./ServerCheck";

const ServerConCheck = () => {
  const [roomId, SetRoomId] = useState(1);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("green");
  return (
    <div className="border-2 w-75 h-85  bg-purple-100 flex justify-center items-center flex-col  border-blue-500 rounded ">
      <div className="flex gap-2 mb-4">
        <button
          className="bg-red-500 px-4 py-2 rounded text-bold text-white font-medium "
          onClick={() => SetRoomId(1)}
        >
          Room 1
        </button>
        <button
          className="bg-green-500 px-4 py-2 rounded text-bold text-white font-medium "
          onClick={() => SetRoomId(2)}
        >
          Room 2
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded text-bold text-white font-medium "
          onClick={() => SetRoomId(3)}
        >
          Room 3
        </button>
      </div>
      <ServerCheck
        roomId={roomId}
        count={count}
        setCount={() => setCount(count + 1)}
        theme={theme}
        setTheme={setTheme}
      />
      <span className="text-gray-600 text-sm">Output in console</span>
    </div>
  );
};

export default ServerConCheck;
