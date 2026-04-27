import axios from "axios";
import React, { useEffect, useState } from "react";

const GetApi = () => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/user")
  //       .then((res) => res.json())
  //       .then((json) => setData(json))
  //       .catch((error) => console.error("Kuch ghalat hogaya!", error));
  //   }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data,console.log(res.data)))
    
      .catch((error) => console.error("kuch glat ho gia ", error));
  }, []);

  return (
    <div>{data && data.map((item) => <p key={item.key}>{item.name}</p>)}</div>
  );
};

export default GetApi;
