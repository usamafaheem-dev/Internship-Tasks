import React, { useState, useReducer } from "react";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: Date.now(),
          text: action.text,
          done: false,
        },
      ];

    case "edited":
      return tasks.map((item) =>
        item.id === action.id ? { ...item, text: action.text } : item
      );

    case "deleted":
      return tasks.filter((item) => item.id !== action.id);

    default:
      return tasks;
  }
}

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (input.trim() === "") return;

    if (editId) {
      // Edit mode
      dispatch({
        type: "edited",
        id: editId,
        text: input,
      });
      setEditId(null);
    } else {
      // Add new task
      dispatch({
        type: "added",
        text: input,
      });
    }

    setInput("");
  };

  const handleEdit = (task) => {
    setInput(task.text);
    setEditId(task.id);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "deleted",
      id: id,
    });

    // Agar editing chal rahi thi aur wohi task delete ho gaya to editing cancel
    if (editId === id) {
      setEditId(null);
      setInput("");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
      <section className="border border-green-400 p-6 rounded-xl shadow-lg bg-white w-96">
        <h1 className="text-red-500 font-bold text-2xl text-center mb-6">
          Task Handler
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Enter any task..."
            className="bg-green-100 rounded-lg p-3 border-none outline-none flex-1"
          />

          <button
            onClick={handleAdd}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-bold text-white"
          >
            {editId ? "Save" : "Add"}
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((item) => (
            <li
              key={item.id}
              className="font-medium flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <span>{item.text}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TaskApp;