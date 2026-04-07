import React, { useState } from "react";

const ObjectTask = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="md:w-80 md:h-80 py-3 md:py-0 inset-ring inset-1 inset-ring-white rounded-lg flex justify-center items-center">
      <section className="flex flex-col gap-4 w-full px-3">
        <h1 className="font-medium text-2xl text-white text-center">
          Object Task
        </h1>

        {/* Inputs */}
        <section className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={user.name}
            onChange={handleChange}
            className="bg-white rounded p-2 outline-green-400 border-none placeholder:text-red-400 placeholder:font-bold"
          />

          <input
            type="number"
            name="age"
            placeholder="Enter age"
            value={user.age}
            onChange={handleChange}
            className="bg-white rounded p-2 outline-green-400 border-none placeholder:text-red-400 placeholder:font-bold"
          />
        </section>

        {/* Display */}
        <div className="bg-white p-3 rounded text-black font-medium">
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      </section>
    </div>
  );
};

export default ObjectTask;