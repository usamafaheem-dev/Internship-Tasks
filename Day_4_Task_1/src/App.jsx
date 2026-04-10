import React, { useRef, useState } from "react";
import Stopwatch from "./StopWatch/StopWatch";
import Dom from "./Task2/Dom";
import Scrool from "./Task2/Scrool";
import Form from "./Task2/Focus";
import Parent from "./Task2/Parent";

const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert("you clicked" + ref.current + "times");
  };

  // console.log("i am render");
  return (
    <div>
      {/* <button onClick={handleClick} className="bg-red-500 p-2 m-2">
        click me ref-button
      </button>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-red-500 p-2 m-2"
      >
        click me state-button
      </button>
      <br />
      <br />
      <br />
      <p className="text-4xl m-4 font-bold">{count}</p> */}

      <Stopwatch/>
      {/* <Dom/> */}
      {/* <Scrool/> */}
      {/* <Form/> */}
      {/* <Parent/> */}
    </div>
  );
};

export default App;
