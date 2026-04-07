import React, { useState } from "react";

const Curd = () => {
  const arr = ["Usama", "Faheem"];
  const [text, setText] = useState("");
  const [person, setPerson] = useState(arr);

  const handleAdd = () => {
    if(text.trim() ==="" ) return;
    setPerson((prev) => [...prev, text]);
  };

  const handleDel = (index) => {
    setPerson((prev) => prev.filter((_, i) => i != index));
  };

  return (
    <div className="md:w-80 md:h-80 py-3 md:py-0  inset-ring inset-1  inset-ring-white rounded-lg  flex justify-center items-center">
      <section className="flex flex-col gap-3 max-w-70 ">
        <h1 className="font-medium text-2xl text-white text-center ">
          Add,Del Operations
        </h1>
        <section className="flex  gap-2">
          <input
            type="text"
            className="bg-white rounded p-2 outline-green-400 border-none placeholder:text-red-400 placeholder:font-bold"
            placeholder="Enter any text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 px-2 py-2 rounded-lg font-medium"
          >
            Add
          </button>
        </section>

        <ul className="h-32 bg-white p-2 rounded overflow-y-auto">
          {person.map((item, index) => {
            return (
              <li
                className="text-black bg-green-400 mb-2 rounded py-1 px-1 font-medium flex justify-between overflow-x-auto"
                key={index}
              >
                {item}

                <button
                  onClick={() => handleDel(index)}
                  className="bg-red-500 px-2 py-1 rounded text-white"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Curd;
