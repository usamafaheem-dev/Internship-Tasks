import React, { useContext } from "react";
import { themeContext } from "./UseContext";
import { useFormStatus } from "react-dom";

const HelloContext = () => {
  const { pending } = useFormStatus();
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`${theme === "light" ? "bg-black text-white" : "text-black bg-white"}`}
    >
      <button>{pending ? "Submitting..." : "Submit Now"}</button>
    </div>
  );
};

export default HelloContext;
