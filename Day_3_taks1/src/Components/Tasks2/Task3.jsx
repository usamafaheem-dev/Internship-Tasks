import React, { useState } from "react";

const Task3 = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const [showName, setShowName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowName(name.firstName + " " + name.lastName);
  };

  const handleChange = (e) => {
    setName((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First Name : </label>
        <input
          type="text"
          placeholder="enter you first name"
          name="firstName"
          onChange={handleChange}
        />

        <label htmlFor="">Last Name : </label>
        <input
          type="text"
          placeholder="enter you Last name"
          name="lastName"
          onChange={handleChange}
        />
        <button className="bg-red-500 p-3" type="submit">
          show data
        </button>
        <p className="text-red-400">{name.firstName + " " + name.lastName}</p>
        <p className="text-green-500">{showName}</p>
      </form>
    </div>
  );
};

export default Task3;
