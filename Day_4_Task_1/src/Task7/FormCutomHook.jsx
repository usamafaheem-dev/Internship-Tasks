import { useState } from "react";

const useFormHook = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const firstName = {
    name: "firstName",
    value: values.firstNmae,
    onChange: handleChange,
  };
  const lastName = {
    name: "lastName",
    value: values.firstNmae,
    onChange: handleChange,
  };

  return { firstName, lastName };
};

export default useFormHook;
