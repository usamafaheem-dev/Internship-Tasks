import React, { useEffect } from "react";

const FullNameGen = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  //   const [fullName, setFullName] = React.useState("");

  const fullName = firstName + " " + lastName;
  //   console.log(fullName);
  //   useEffect(() => {
  //     setFullName(firstName + " " + lastName);
  //   }, [firstName, lastName]);
  //   console.log(fullName);

  return (
    <div className="border-2 w-75 h-85  bg-yellow-100 flex justify-center items-center flex-col  border-blue-500 rounded ">
      <span className="font-medium text-md    ">Full Name : {fullName}</span>
      <input
        type="text"
        className="bg-green-400 p-2 rounded focus:outline-yellow-600 mb-2 mt-2"
        placeholder="Enter any text "
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        className="bg-green-400 p-2 rounded focus:outline-yellow-600 mb-2"
        placeholder="Enter any text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
};

export default FullNameGen;
