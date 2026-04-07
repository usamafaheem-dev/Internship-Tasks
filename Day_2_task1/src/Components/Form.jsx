import React, { useState } from "react";

const Form = () => {
  const [type, setType] = useState("");
  return (
    <div>
      <form>
        <input className="bg-green-400" type="text" onChange={(e) => {
            setType(e.target.value),
            console.log(e.target.value)
        }} placeholder="Enter any text"/>
        <p>{type}</p>
      </form>
    </div>
  );
};

export default Form;
