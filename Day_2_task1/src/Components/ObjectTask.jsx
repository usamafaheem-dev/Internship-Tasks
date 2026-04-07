import React, { useState } from "react";

const ObjectTask = () => {
  const [user, setUser] = useState({ name: "Ali", age: 20 });
  console.log(user.age);
  const objectHandle = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 5,
    }));
  };

  return (
    <div>
      <button className="bg-fuchsia-500 p-4 m-4" onClick={objectHandle}>
        user age : {user.age}
      </button>
    </div>
  );
};

export default ObjectTask;
