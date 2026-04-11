import React, { useEffect, useState } from "react";

const EffectExapmle = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log('🔵 Schedule ' + text + '" log');

    const timerId = setTimeout(() => {
      console.log("⏰ " + text);
    }, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timerId);
    };
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        className="bg-red-400 p-4"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      {text}
    </div>
  );
};

export default EffectExapmle;
