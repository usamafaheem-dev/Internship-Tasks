import React, { useState } from "react";
import Profile from "./Profile";

const StateChange = () => {
  const [userId, setUserId] = useState(1);
  return (
    <div>
      <button
        className="bg-green-500  m-3 p-2 rounded  text-white text-xl font-bold"
        onClick={() => setUserId(1)}
      >
        button 1{" "}
      </button>

      <button
        className="bg-red-500  m-3 p-2 rounded    text-white text-xl font-bold"
        onClick={() => setUserId(2)}
      >
        button 2{" "}
      </button>

      <button
        className="bg-blue-500  m-3 p-2 rounded   text-white text-xl font-bold"
        onClick={() => setUserId(3)}
      >
        button 3{" "}
      </button>
      <Profile key={userId} userId={userId} />
      <hr />

      <p>
        Current User ID: <strong>{userId}</strong>
      </p>
    </div>
  );
};

export default StateChange;
