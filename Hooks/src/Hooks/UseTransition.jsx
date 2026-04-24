import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      const lists = [];
      for (let i = 0; i < 10000; i++) {
        lists.push(e.target.value + "item" + i);
      }
      setList(lists);
    });
  };

  return (
    <div>
      <input
        value={input}
        type="text"
        placeholder="enter your name"
        className="border p-4 rounded"
        onChange={handleChange}
      />

      <br />
      {isPending ? (
        <p>loading....</p>
      ) : (
        <>
          <ul>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UseTransition;
