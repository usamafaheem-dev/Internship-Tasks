import axios from "axios";
import React, { useEffect, useState } from "react";

const FakeStoreGetApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("kuch error ha ", error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>loading ....</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1>Our Products</h1>
      <br />
      <div className="flex flex-wrap ">
        {data.map((item) => (
          <ul key={item.id} className="border p-4 m-2 ">
            <li>
              {" "}
              <span className="text-lg font-bold">Name :</span>{" "}
              {item.title}{" "}
            </li>
            <li>
              {" "}
              <span className="text-lg font-bold">Price :</span> {item.price}
            </li>
            <li className="w-22 ">
              <img src={item.image} alt="" />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FakeStoreGetApi;
