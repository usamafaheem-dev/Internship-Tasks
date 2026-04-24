import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "updateValues":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "submitForm":
      return state;

    default:
      return state;
  }
};

const UseReducerForm = () => {
  const [formData, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    dispatch({
      type: "updateValues",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmi = (e) => {
    e.preventDefault();

    dispatch({
      type: "submitForm",
    });
    console.log(formData);
  };

  return (
    <div>
      <form>
        <input
          value={formData.firstName}
          name="firstName"
          type="text"
          className="bg-green-200 p-4 m-4"
          onChange={handleChange}
        />
        <input
          value={formData.lastName}
          name="lastName"
          type="text"
          className="bg-green-200 p-4 m-4"
          onChange={handleChange}
        />
        <button onClick={handleSubmi} className="bg-green-500 p-4 m-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseReducerForm;
