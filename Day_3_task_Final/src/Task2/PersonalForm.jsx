import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const PersonalForm = () => {
  const [step, setStep] = useState(1);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setUserForm({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      country: "",
    });
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {step === 1 && (
        <Step1
          value={userForm}
          onChange={handleChange}
          handleNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <Step2
          value={userForm}
          onChange={handleChange}
          handleBack={() => setStep(1)}
          handleNext={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <Step3
          value={userForm}
          onChange={handleChange}
          handleBack={() => setStep(2)}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default PersonalForm;
