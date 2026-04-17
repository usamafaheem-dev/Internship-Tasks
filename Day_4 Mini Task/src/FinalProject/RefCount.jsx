import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { LiaAutoprefixer } from "react-icons/lia";

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
    toast.success(`this number ${ref.current} of values in count `);
    console.log(ref.current);
  };

  const handleFocusAndClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className="border-2 w-75 h-85  bg-green-100 flex justify-center items-center flex-col  border-blue-500 rounded ">
      <button
        className="bg-pink-500 px-4 py-2  rounded text-bold text-white font-medium "
        onClick={handleClick}
      >
        I am persist value button{" "}
      </button>
      <br />
      <div className="f">
        <input
          type="text"
          className="bg-green-400 p-2 rounded focus:outline-pink-600"
          placeholder="Enter any text"
          ref={inputRef}
        />
        <div className="flex gap-3 mt-4">
          <button
            className="bg-pink-500 px-4 py-2 rounded text-bold text-white font-medium "
            onClick={() => inputRef.current.focus()}
          >
            Focus{" "}
          </button>
          <button
            className="bg-red-500 px-4 py-2 rounded text-bold text-white font-medium "
            onClick={handleFocusAndClear}
          >
            Clear & Focus
          </button>
        </div>
      </div>

      <br />
      {/* <button
        className="text-xl bg-indigo-600 fixed bottom-3 right-4 rounded-full w-15 h-15  "
        onClick={handleScrollToTop}
      >
       <span>❤️</span>
      </button> */}
      {/* <LiaAutoprefixer /> */}
      <Toaster />
    </div>
  );
};

export default RefCount;
