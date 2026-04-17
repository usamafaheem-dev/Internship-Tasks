import { useEffect, useState } from "react";

export const usePointerPosition = () => {
  const [position, setposition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMOveHandler = (e) => {
      setposition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMOveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMOveHandler);
    };
  }, []);

  return { position };
};
