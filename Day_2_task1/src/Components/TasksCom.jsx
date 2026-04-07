import React, { useState } from "react";

const TasksCom = () => {
  const [user, setUser] = useState(0);

  const handleAgeChange = () => {
    setUser((item) => item + 1);
    setUser((item) => item + 1);
    setUser((item) => item + 1);
    setUser((item) => item + 1);
    setUser((item) => item + 1);
  };

  return (
    <div>
      <button
        className="bg-blue-600 text-white p-4 m-4 rounded-lg font-bold"
        onClick={handleAgeChange}
      >
        Increase by 5 {user}
      </button>
    </div>
  );
};

export default TasksCom;
