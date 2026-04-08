import React, { useContext, useState } from "react";
import { Task4Context } from "./Context/Task4Context";

const UserProfile = () => {
  const { name, setName } = useContext(Task4Context);
  const [changeName, setChaneName] = useState("");

  const handleChangeButton = () => {
    setName(changeName);
  };
  return (
    <div>
      <h1>My Name is {name}</h1>
      <input className="bg-green-500 p-2 m-2" type="text" onChange={(e) => setChaneName(e.target.value)} />

      <button onClick={handleChangeButton} className="bg-red-400 p-2">
        pass data to context
      </button>
    </div>
  );
};

export default UserProfile;
