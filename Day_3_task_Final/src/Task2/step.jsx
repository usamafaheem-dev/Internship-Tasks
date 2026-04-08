import React from "react";
import Input from "../Components/Input";

const Step1 = ({ value, onChange ,handleNext}) => {
  return (
    <div className="flex flex-col gap-2 m-2">
      {/* <input type="text" value={value} /> */}
      <Input
        type="text"
        value={value.firstName}
        onChange={onChange}
        name="firstName"
        placeholder="Enter your FirstName"
      />
      <Input
        type="text"
        value={value.lastName}
        onChange={onChange}
        name="lastName"
        placeholder="Enter your LastName"
      />
      <Input
        type="text"
        value={value.country}
        onChange={onChange}
        name="country"
        placeholder="Enter your Country"
      />
      <Input
        type="text"
        value={value.city}
        onChange={onChange}
        name="city"
        placeholder="Enter your City"
      />


      <button onClick={handleNext} className="bg-green-400">Next</button>
    </div>
  );
};

export default Step1;


import React from "react";
import Input from "../Components/Input";

const Step2 = ({ value, onChange, handleNext, handleBack }) => {
  return (
    <div className="flex flex-col gap-2 m-2">
      {/* <input type="text" value={value} /> */}
      <Input
        type="text"
        value={value.address}
        onChange={onChange}
        name="address"
        placeholder="Enter your Address"
      />
      <button onClick={handleBack} className="bg-green-400">
        Prev
      </button>
      <button onClick={handleNext} className="bg-green-400">
        Next
      </button>
    </div>
  );
};

export default Step2;


import React from "react";
import Input from "../Components/Input";

const Step3 = ({ value, onChange, handleBack, handleSubmit }) => {
  return (
    <div className="flex flex-col gap-2 m-2">
      {/* <input type="text" value={value} /> */}
      <Input
        type="email"
        value={value.email}
        onChange={onChange}
        name="email"
        placeholder="Enter your Email"
      />
      <button onClick={handleBack} className="bg-green-400">
        back
      </button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;

import React from "react";

const Input = ({ type, value, onChange ,name,placeholder}) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-red-400"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const PersonalForm = () => {
  // state for step
  const [step, setStep] = useState(1);
  //   state for form data
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  //   function for the change the input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };

  //   function for the submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submit");
    setUserForm({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      country: "",
    });
  };

  if (step === 1) {
    return (
      <Step1
        value={userForm}
        onChange={handleChange}
        handleNext={() => setStep(2)}
      />
    );
  }

  if (step === 2) {
    return (
      <Step2
        value={userForm}
        onChange={handleChange}
        handleNext={() => setStep(3)}
        handleBack={() => setStep(1)}
      />
    );
  }

  if (step === 3) {
    return (
      <Step3
        value={userForm}
        onChange={handleChange}
        handleBack={() => setStep(2)}
        handleSubmit={handleSubmit}
      />
    );
  }
};

export default PersonalForm;
