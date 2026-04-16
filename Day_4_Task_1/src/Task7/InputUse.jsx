import React, { useState } from "react";
import useFormHook from "./FormCutomHook";

const InputUse = () => {
  const { firstName, lastName } = useFormHook();

  return (
    <div>
      <input type="text" {...firstName} />

      <input type="text" {...lastName} />
    </div>
  );
};

export default InputUse;
