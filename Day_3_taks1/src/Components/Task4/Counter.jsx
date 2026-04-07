import { useState } from "react";

function Counter() {
  const [score, setScore] = useState(0); // state yahan hai

  return (
    <div>
      <h1>{score}</h1>
      <button className="bg-green-400 m-4 p-2"  onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

export default Counter;
