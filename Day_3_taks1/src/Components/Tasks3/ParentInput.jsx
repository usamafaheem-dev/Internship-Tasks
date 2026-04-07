import React, { useState } from "react";
import Input from "./Input";

const ParentInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <Input
        label="Name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Input
        label="Email"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ParentInput;
