import React, { useState } from "react";

const Profile = ({ userId }) => {
  const [count, setCount] = useState(0);
  const [commit, setCommit] = useState("");
  return (
    <div>
      <button
        className="bg-blue-500  m-3 p-2 rounded   text-white text-xl font-bold"
        onClick={() => setCount(count + 1)}
      >
        count : {count}
      </button>
      <h3>Profile of User {userId}</h3>
      <hr />
      <input
        type="text"
        className="bg-green-200 p-2 m-2 "
        placeholder="Enter you commit "
        value={commit}
        onChange={(e) => setCommit(e.target.value)}
      />

      <p className="text-2xl font-bold">{commit}</p>
    </div>
  );
};

export default Profile;
