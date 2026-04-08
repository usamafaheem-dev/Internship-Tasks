import React from "react";

const Input = ({ type, value, onChange, name, placeholder }) => {
  return (
    <div className="my-2 w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
      />
    </div>
  );
};

export default Input;
