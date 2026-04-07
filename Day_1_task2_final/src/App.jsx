import React from "react";
import Handle from "./Components/Handle";

const App = () => {
  return (
    <div>
      <div onClick={() => alert("i ma parent")}>
        <Handle onClick={() => alert("play music")}>play music</Handle>
        <Handle onClick={() => alert("play movie")}>play movie</Handle>
      </div>
    </div>
  );
};

export default App;
