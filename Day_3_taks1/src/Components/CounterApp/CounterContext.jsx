import { createContext, useContext, useReducer } from "react";

const CountContext = createContext(null);
const DispatchContext = createContext(null);

const reducer = (count, action) => {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return 0;
    default:
      return count;
  }
};

export const CounterContext = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <CountContext value={count}>
        <DispatchContext value={dispatch}>{children}</DispatchContext>
      </CountContext>
    </div>
  );
};

export const useCount = () => {
  return useContext(CountContext);
};

export const useDispatch = () => {
  return useContext(DispatchContext);
};
