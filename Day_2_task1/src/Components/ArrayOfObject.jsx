import React, { useState } from "react";

const ArrayOfObject = () => {
  const initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ];

  const [input, setInput] = useState("");
  const [artists, setArtist] = useState(initialArtists);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setArtist((prev) => [
      ...prev,
      { id: Date.now(), name: input },
    ]);
    setInput("");
  };

  const handleRemove = (id) => {
    setArtist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
      
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          🎨 Artist Manager
        </h1>

        {/* Form */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter artist name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white px-3 rounded-lg hover:bg-purple-600 transition"
          >
            Add
          </button>
        </form>

        {/* List */}
        <ul className="space-y-3 max-h-60 overflow-y-auto">
          {artists.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-purple-100 p-2 rounded-lg shadow-sm"
            >
              <span className="text-gray-700 font-medium">
                {item.name}
              </span>

              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ArrayOfObject;