import React, { useRef } from "react";

const RefCount = () => {
  const ref = useRef(0);
  const inputRef = useRef();
  const scroolRef = useRef(null);

  function handleScrollToTop() {
    scroolRef.current.scrollIntoView({
      behavior: "smooth", // smooth scrolling
      block: "start", //c top pe le aaye
    });
  }

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`this number ${ref.current} of values in count `);
    console.log(ref.current);
  };

  return (
    <div>
      <button
        className="bg-pink-500 px-4 py-2 m-3 rounded"
        onClick={handleClick}
      >
        Click me{" "}
      </button>
      <br />
      <input
        type="text"
        className="bg-green-400 p-2"
        placeholder="enter any text"
        ref={inputRef}
      />
      <button
        className="bg-pink-500 px-4 py-2 m-3 rounded"
        onClick={() => inputRef.current.focus()}
      >
        Click me{" "}
      </button>
      <div className="bg-blue-300 h-[2000px] w-screen" ref={scroolRef}>
        ma scrool ref ki wjh say aya ho
      </div>
      <br />
      <button
        className="text-xl bg-red-300 fixed bottom-3 right-4 rounded-full w-20 h-20 "
        onClick={handleScrollToTop}
      >
        🔝
      </button>
    </div>
  );
};

export default RefCount;
