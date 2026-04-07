import React, { useReducer } from "react";
import CounterDriling from "./CounterDriling";
import Increase from "./Increase";
import Decrease from "./Decrease";
import Reset from "./Reset";
import { CounterContext } from "./CounterContext";
// const reducer = (count, action) => {
//   switch (action.type) {
//     case "increment":
//       return count + 1;
//     case "decrement":
//       return count - 1;
//     case "reset":
//       return 0;
//     default:
//       return count;
//   }
// };

const Counter = () => {
  // const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <CounterContext>
        <CounterDriling  />
        <Increase />
        <Decrease />
        <Reset />
      </CounterContext>
    </div>
  );
};

export default Counter;
