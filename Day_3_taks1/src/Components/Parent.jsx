import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [content, setContent] = useState(0);
  
  console.log("parent", content)
  // const dataWePass = (data) => {
  //   setContent(data);
  // };
  return (
    <div>
      {/* <Child sendData={dataWePass} /> */}
      <Child state={content} contentFun={setContent} />
      {/* <h1>My name is {content}</h1> */}
    </div>
  );
};

export default Parent;
