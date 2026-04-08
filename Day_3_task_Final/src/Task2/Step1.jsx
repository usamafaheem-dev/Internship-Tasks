import React from "react";
import Input from "../Components/Input";

const Step1 = ({ value, onChange, handleNext }) => {
  const isStepValid =
    value.firstName && value.lastName && value.country && value.city;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Step 1: Personal Info
      </h2>

      <Input
        type="text"
        value={value.firstName}
        onChange={onChange}
        name="firstName"
        placeholder="First Name"
      />
      <Input
        type="text"
        value={value.lastName}
        onChange={onChange}
        name="lastName"
        placeholder="Last Name"
      />
      <Input
        type="text"
        value={value.country}
        onChange={onChange}
        name="country"
        placeholder="Country"
      />
      <Input
        type="text"
        value={value.city}
        onChange={onChange}
        name="city"
        placeholder="City"
      />

      <button
        disabled={!isStepValid}
        onClick={handleNext}
        className={`bg-green-400 text-white font-semibold py-2 px-4 rounded transition ${
          !isStepValid ? "opacity-50 cursor-not-allowed" : "hover:bg-green-500"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
