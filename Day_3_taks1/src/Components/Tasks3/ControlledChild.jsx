import React, { useState } from "react";

const ControlledChild = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <h1>{title}</h1>

      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="bg-red-400 py-2 m-4" onClick={() => setIsActive(true)}>
          show
        </button>
      )}
    </div>
  );
};

export default ControlledChild;
