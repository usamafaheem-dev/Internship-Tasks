import React from "react";

const Handle = ({ onClick, children }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          (e.stopPropagation(), onClick());
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Handle;
