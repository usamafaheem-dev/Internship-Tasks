import React, { useEffect, useEffectEvent } from "react";

const ServerCheck = ({ roomId, setTheme, theme }) => {
  // ✅ useEffectEvent ka sahi aur clean use
  const logLatestTheme = useEffectEvent(() => {
    console.log(`The theme color is : ${theme}`);
  });

  useEffect(() => {
    const connection = {
      connect() {
        console.log(`✅ Connecting to Room "${roomId}"`);
        logLatestTheme(); // ← function call
      },
      disconnect() {
        console.log(`❌ Disconnected from Room "${roomId}"`);
      },
    };

    connection.connect();

    return () => connection.disconnect();
  }, [roomId]); // ← latestTheme ko dependency mein rakha (sahi hai)

  return (
    <div
      className={`border-2 w-50 h-50 ${theme === "green" ? "bg-green-100" : "bg-blue-100"} 
        flex justify-center items-center flex-col border-blue-500 rounded `}
    >
      <span className="font-medium text-lg">Room No : {roomId}</span>

      <button
        className="bg-blue-500 px-5 py-2 mt-4 rounded text-white font-medium"
        onClick={() => setTheme(theme === "green" ? "blue" : "green")}
      >
        Change Theme
      </button>

      <span className="font-medium mt-2"> Theme Color is : {theme}</span>
    </div>
  );
};

export default ServerCheck;
