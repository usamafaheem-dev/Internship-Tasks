import React, { useState } from "react";

const ButtonTasks = () => {
  const users = ["Ali", "Sara", "Ahmed"];
  const [message, setMessage] = useState("");

  const handleClick = (name) => {
    setMessage(`you click the ${name}`);
  };

  return (
    <div>
      {users.map((item, index) => {
        return (
          <button
            onClick={() => handleClick(item)}
            className="bg-red-500 px-4 py-1 rounded-lg ml-2 mt-4 text-white font-bold"
          >
            {item}
          </button>
        );
      })}

      {message && (
        <>
          <p className="font-bold">{message}</p>
        </>
      )}
    </div>
  );
};

export default ButtonTasks;
