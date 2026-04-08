import { createContext, useState } from "react";

export const Task4Context = createContext();

export const Task4ContextFun = ({ children }) => {
  const [name, setName] = useState("Usama");
  return (
    <div>
      <Task4Context value={{ name, setName }}>{children}</Task4Context>
    </div>
  );
};
