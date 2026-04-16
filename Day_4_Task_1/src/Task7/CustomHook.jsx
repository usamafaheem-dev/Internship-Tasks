import { useEffect, useState } from "react";

const useOnlineCheck = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

const StatusOnline = () => {
  const isOnline = useOnlineCheck();
  return (
    <h1 className="text-4xl font-bold">
      {isOnline ? "✅ Online" : "❌ Disconnected"}
    </h1>
  );
};

const SaveButton = () => {
  const isOnline = useOnlineCheck();


  function handleSaveClick() {
    console.log("✅ Progress saved");
  }
  return (
    <button
      disabled={!isOnline}
      onClick={handleSaveClick}
      className={`bg-green-500 text-xl p-2 font-bold rounded *:
         ${!isOnline && "opacity-55 cursor-not-allowed"}
        
        `}
    >
      {" "}
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
};

export { SaveButton, StatusOnline };
