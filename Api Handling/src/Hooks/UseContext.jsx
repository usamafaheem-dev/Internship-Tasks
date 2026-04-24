import React, { createContext, useState } from "react";
import HelloContext from "./HelloContext";
export const themeContext = createContext();

const UseContext = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <themeContext.Provider value={{ theme, setTheme }}>
        <div
          className={`w-screen h-screen ${theme === "light" ? "bg-white" : "bg-black"}`}
        >
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`p-4 rounded m-4 ${theme === "light" ? "bg-black text-white" : "bg-white text-black "}`}
          >
            change theme
          </button>
          <HelloContext />
        </div>
      </themeContext.Provider>
    </div>
  );
};

export default UseContext;
