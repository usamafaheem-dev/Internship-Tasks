import React, { useEffect, useState } from "react";

const FullName = () => {
  const [firstName, setFirstName] = useState("Tayls");
  const [lastName, setLastName] = useState("Swf");
  const [fullName, setFullName] = useState("fullam");
//   console.log(fullName);

  useEffect(() => {
    console.log("i am render effect");
  },[firstName]);
  //   console.log(fullName);

  return <div></div>;
};

export default FullName;
