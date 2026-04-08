import React from "react";
import Input from "../Components/Input";

const Step2 = ({ value, onChange, handleNext, handleBack }) => {
  // Step validation: address must be filled
  const isStepValid = value.address;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Step 2: Address Info
      </h2>

      <Input
        type="text"
        value={value.address}
        onChange={onChange}
        name="address"
        placeholder="Enter your Address"
      />

      <div className="flex justify-between gap-4">
        <button
          onClick={handleBack}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded transition"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={!isStepValid}
          className={`bg-green-400 text-white font-semibold py-2 px-4 rounded transition ${
            !isStepValid
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
