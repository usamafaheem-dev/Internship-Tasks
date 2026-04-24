import React, { act, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "deposit":
      return {
        balance: state.balance + 10,
      };
    case "withdraw":
      return {
        balance: state.balance > 0 ? state.balance - 10 : 0,
      };
    default:
      return state.balance;
  }
};

// for counter:

const reducerCount = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [count, dispatchCount] = useReducer(reducerCount, 0);

  // const [balance, setBalance] = useState({ balance: 0 });

  const handleDeposit = () => {
    dispatch({ type: "deposit" });
    // setBalance({ balance: balance.balance + 10 });
  };

  const handleWidhdraw = () => {
    dispatch({ type: "withdraw" });
  };

  const handleIncrese = () => {
    dispatchCount({ type: "increase" });
  };

  return (
    <div className="m-4">
      <button className="bg-green-500 p-4 rounded mb-4" onClick={handleDeposit}>
        Deposit
      </button>
      <br />
      <button className="bg-red-500 p-4 rounded" onClick={handleWidhdraw}>
        widthdraw
      </button>

      <h1 className="text-4xl">The balance is : {state.balance}</h1>

      <br />
      <br />
      <button onClick={handleIncrese}>increase</button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseReducer;
