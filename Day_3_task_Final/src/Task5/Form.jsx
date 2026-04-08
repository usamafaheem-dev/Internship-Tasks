import React, { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const isStepValid =
    userForm.firstName &&
    userForm.lastName &&
    userForm.email &&
    userForm.address &&
    userForm.city &&
    userForm.country;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log(userForm);
      toast.success("Form submitted successfully!");
      setUserForm({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        country: "",
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-sm w-80 flex flex-col gap-4"
      >
        <h2 className="text-lg font-semibold text-gray-700 text-center">
          User Form
        </h2>

        <input
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={userForm.firstName}
          onChange={handleChange}
          required
        />

        <input
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={userForm.lastName}
          onChange={handleChange}
          required
        />

        <input
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Email"
          name="email"
          value={userForm.email}
          onChange={handleChange}
          required
        />

        <input
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Address"
          name="address"
          value={userForm.address}
          onChange={handleChange}
          required
        />

        <input
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="City"
          name="city"
          value={userForm.city}
          onChange={handleChange}
          required
        />

        <input
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Country"
          name="country"
          value={userForm.country}
          onChange={handleChange}
          required
        />

        <button
          disabled={!isStepValid || isLoading}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:opacity-50 flex justify-center items-center"
          type="submit"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;