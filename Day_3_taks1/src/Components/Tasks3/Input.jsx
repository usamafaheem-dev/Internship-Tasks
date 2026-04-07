import React, { useState } from "react";

const Input = ({ label, value, onChange }) => {
  return (
    <div>
      <label>
        {label} :
        <input
          className="bg-blue-500 m-4"
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;
