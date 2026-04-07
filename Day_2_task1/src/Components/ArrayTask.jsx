import React, { useState } from "react";

const ArrayTask = () => {
  const arr = ["Usama"];
  const [input, setInput] = useState("");
  const [artists, setArtist] = useState(arr);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setArtist((prev) => [...prev, input]);
    setInput("");
  };

  const HandleDel = (indexToDel) => {
    setArtist((item) => item.filter((_, index) => index !== indexToDel));
  };

  return (
    <div>
      <form className="flex flex-col w-44 gap-3 m-4" onSubmit={handleAdd}>
        <input
          type="text"
          className="bg-green-300 p-2 rounded"
          placeholder="enter the text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-red-500 p-2 ">
          Add
        </button>
      </form>

      <ul className="m-4">
        {artists.map((item, index) => (
          <li
            key={index}
            className="bg-pink-500 mb-3 mt-3 w-44 p-2 text-center font-bold text-white"
          >
            {item}
            <button
              className="bg-red-900 text-white ml-4 rounded p-2"
              onClick={() => HandleDel(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayTask;
