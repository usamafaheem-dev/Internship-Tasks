import React, { useImperativeHandle, useRef } from "react";

const Child = ({ ref }) => {
  const childRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      childRef.current.focus();
    },
    clear() {
      childRef.current.vlaue = "";
    },
  }));

  return (
    <div>
      <input
        type="text"
        ref={childRef}
        className="bg-red-400 p-4"
        placeholder="Enter your name..."
      />
    </div>
  );
};

export default Child;
