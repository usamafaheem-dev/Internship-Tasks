import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const JsonPlaceHolderData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setData(res.data);
        console.log("data mil gia", res.data);
      } catch (error) {
        setError(error.message);
        console.log("error aa rha ha " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All JsonPlaceHolder Products
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.userId}
            </h2>
            <p className="text-sm mt-2 text-gray-600">
              {" "}
              <span className="font-bold">Title :</span>{" "}
              {item.title.slice(0, 20)}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-bold">Detail :</span>{" "}
              {item.body.slice(0, 45)}...
            </p>

            {/* Category */}
            <p className="text-xs bg-blue-100 text-blue-600 inline-block px-2 py-1 rounded mb-2"></p>
            <p className="text-xs bg-blue-100 text-blue-600 inline-block px-2 py-1 rounded mb-2"></p>
            <p className="text-xs bg-blue-100 text-blue-600 inline-block px-2 py-1 rounded mb-2"></p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default JsonPlaceHolderData;
