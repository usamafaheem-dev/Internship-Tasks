import React, { useState } from "react";

let next_id = 3;

const Task_1 = () => {
  const [name, setName] = useState("");

  const [artists, setArtists] = useState([
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ]);

  // ➕ Add Artist
  const handleAdd = () => {
    if (!name.trim()) return;

    setArtists((prev) => [
      { id: next_id++, name: name },
      ...prev,
    ]);

    setName("");
  };

  // ❌ Delete Artist
  const handleDelete = (id) => {
    setArtists((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        
        <h2 className="text-xl font-bold mb-4 text-center">
          🎨 Artist Manager
        </h2>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter artist name"
            className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-3 rounded-lg hover:bg-blue-600"
          >
            Add 
          </button>  
        </div>

        {/* List */}
        <ul className="space-y-2">
          {artists.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
            >
              <span>{item.name}</span>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task_1;