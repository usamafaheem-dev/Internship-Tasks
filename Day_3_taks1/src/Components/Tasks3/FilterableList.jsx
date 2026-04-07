import React, { useState } from "react";
import Searchbar from "./Searchbar";
import List from "./List";
const foods = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
];

const FilterableList = () => {
  const [query, setQuery] = useState("");
  const result = filterItems(foods, query);
  return (
    <div>
      <Searchbar value={query} onChange={(e) => setQuery(e.target.value)} />
      <hr />
      <List items={result} />
    </div>
  );
};

export default FilterableList;

const filterItems = (item, query) => {
//   if (!query) return item;
  query = query.toLowerCase();

  return item.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query)),
  );
};
  