import React, { useState } from "react";
import Items from "./Items";

const App = () => {
  "use memo";
  const [count, setCount] = useState(0);

  // const items = [
  //   { id: 1, name: "Apple" },
  //   { id: 2, name: "Banana" },
  //   { id: 3, name: "Mango" },
  // ];

  console.log("i am parent");

  return (
    <div>
      <h1>count : {count}</h1>
      <button
        className="bg-red-400 p-3 m-3"
        onClick={() => setCount(count + 1)}
      >
        increase me{" "}
      </button>

      {/* Pass a static prop to Items to show memoization effect */}
      <Items label="Static Child sd" />
    </div>
  );
};

export default App;
