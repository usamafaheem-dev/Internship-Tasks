import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      setError(null);
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setData(res.data.products);
        console.log("data mil gia", res.data.products);
      } catch (error) {
        setError(error.message);
        console.log("error aa rha ha " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="h-screen flex justify-center items-center">
<Loader/>
  </div>
  if (error) return <p className="text-red-500">{error}</p>;

return (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-2xl font-bold mb-6 text-center">
      All Products
    </h1>

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4"
        >
          {/* Image */}
          <div className="flex justify-center mb-3">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-32 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {item.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 mb-2">
            {item.description.slice(0, 45)}...
          </p>

          {/* Category */}
          <p className="text-xs bg-blue-100 text-blue-600 inline-block px-2 py-1 rounded mb-2">
            {item.category}
          </p>

          {/* Price + Discount */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-bold text-green-600">
              ${item.price}
            </span>
            <span className="text-sm text-red-500">
              -{item.discountPercentage}%
            </span>
          </div>

          {/* Stock */}
          <p className="text-sm mt-2 text-gray-600">
            Stock: {item.stock}
          </p>
        </div>
      ))}
    </ul>
  </div>
);
};

export default AllProducts;
