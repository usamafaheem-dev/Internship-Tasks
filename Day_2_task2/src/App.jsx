import React from "react";
import Counter from "./Components/Counter";
import RealTimeTextUpdate from "./Components/RealTimeTextUpdate";
import Curd from "./Components/Curd";
import ObjectTask from "./Components/ObjectTaks";

const App = () => {
  return (
    <div className="bg-black w-screen md:h-screen p-2 flex flex-col md:justify-center md:items-center md:flex-row gap-2  ">
      <Counter />
      <RealTimeTextUpdate />
      <Curd/>
      <ObjectTask/>
    </div>
  );
};

export default App;
