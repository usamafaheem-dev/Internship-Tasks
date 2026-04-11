import React, { useEffect } from "react";

// Mock createConnection function for demonstration
function createConnection() {
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}

const Effects = () => {

  useEffect(() => {
    const connection = createConnection();
  

    return () => {
      connection.disconnect(); // ❌ Disconnected.
    };
  }, []);

  return <div>hello</div>;
};

export default Effects;
