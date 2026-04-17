import React, { useEffect } from "react";

const ChatOption = ({ roomId }) => {
  const options = {
    roomId: roomId,
  };

  useEffect(() => {
    const connection = {
      connect() {
        console.log(`✅ Connecting to Room ${options.roomId}`);
      },
      disconnect() {
        console.log(`❌ Disconnected from Room ${options.roomId}`);
      },
    };

    connection.connect();

    return () => connection.disconnect();
  }, [options.roomId]);

  return (
    <div className="border-2 w-30 h-10  bg-purple-100 flex justify-center items-center flex-col  border-blue-500 rounded ">
      Room ID : {roomId}
    </div>
  );
};

export default ChatOption;
