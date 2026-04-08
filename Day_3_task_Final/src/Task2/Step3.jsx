import React from "react";
import Input from "../Components/Input";

const Step3 = ({ value, onChange, handleBack, handleSubmit }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Step 3: Contact Info</h2>

      <Input type="email" value={value.email} onChange={onChange} name="email" placeholder="Email" />

      <div className="flex justify-between gap-4">
        <button
          onClick={handleBack}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded transition"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;