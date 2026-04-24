import React, { useState, useMemo } from 'react';

const CounterExample = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  // 1. Aik bohat "Bhari" function (Slow Function)
  // Ye function jaan bhoojh kar slow kiya gaya hai
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++; // Loop jo waqt leta hai
    return counterOne % 2 === 0;
  }, [counterOne]); // <--- SIRF counterOne badalne par dobara chalo!

  return (
    <div className="p-10 text-center">
      <div>
        <button 
          onClick={() => setCounterOne(counterOne + 1)} 
          className="bg-blue-500 p-2 m-2 text-white"
        >
          Counter One: {counterOne}
        </button>
        <span>{isEven ? ' Even' : ' Odd'}</span>
      </div>

      <div>
        <button 
          onClick={() => setCounterTwo(counterTwo + 1)} 
          className="bg-green-500 p-2 m-2 text-white"
        >
          Counter Two: {counterTwo}
        </button>
        <p>Simple Counter: {counterTwo}</p>
      </div>
    </div>
  );
};

export default CounterExample;