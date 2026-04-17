import { useEffect, useState } from "react";

export const useDelayedHook = (value, delay) => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const helper = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return ()=>clearTimeout(helper);
  }, [delay, value]);

  return delayedValue;
};
