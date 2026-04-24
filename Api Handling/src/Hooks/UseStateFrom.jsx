import React, { useState } from "react";

const UseStateFrom = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
    });
  };
  return (
    <div>
      <form>
        <input
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
          className="bg-green-200 p-4 m-4"
        />
        <input
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
          type="text"
          className="bg-green-200 p-4 m-4"
        />
        <button onClick={handleSubmit} className="bg-green-500 p-4 m-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseStateFrom;
