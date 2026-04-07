import React, { useState } from "react";

const ObjectForm = () => {
  const [artists, setArtist] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });

  const nameHandle = (e) => {
    setArtist({
      ...artists,
       [e.target.name]:e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(artists)
  };
  return (
    <div className="flex flex-col w-44 mx-auto gap-4 m-5">
      <h1 className="font-bold text-lg text-center">Sign up Form</h1>
      <input
        type="text"
        className="bg-green-300 p-2 rounded"
        placeholder="enter the firstname"
        name="firstName"
        value={artists.firstName}
        onChange={nameHandle}
        // onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        className="bg-green-300 p-2 rounded"
        placeholder="enter the secondname"
        name="secondName"
        value={artists.secondName}
        onChange={nameHandle}
        // onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="email"
        className="bg-green-300 p-2 rounded"
        placeholder="enter the email"
        name="email"
        value={artists.email}
        onChange={nameHandle}

        // onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="outline-2 outline-green-500 hover:bg-green-500 hover:outline-black  p-2 "
      >
        Add
      </button>
    </div>
  );
};

export default ObjectForm;
