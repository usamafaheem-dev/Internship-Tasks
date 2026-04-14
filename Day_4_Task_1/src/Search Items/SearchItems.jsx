import React, { useMemo, useState } from "react";

const SearchItems = () => {
  const [searchText, setSearchText] = useState("");

  const todos = [
    { id: 1, text: "Apple kharido" },
    { id: 2, text: "Doodh lao" },
    { id: 3, text: "Exercise karo" },
    { id: 4, text: "React seekho" },
    { id: 5, text: "Ghar saaf karo" },
  ];

  const filterItems = useMemo(() => {
    console.log("filter ho rha ha ");
    return todos.filter((item) =>
      item.text.toLowerCase().includes(searchText.toLocaleLowerCase()),
    );
  }, [todos, searchText]);
  return (
    <div>
      <input
        type="text"
        className="bg-green-300 p-3 m-4 "
        placeholder="Search anything"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <p>The lenght of the items is : {filterItems.length}</p>

      <ul>
        {filterItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItems;
