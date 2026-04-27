import axios from "axios";
import React, { useState } from "react";

const FakeStorePostApi = () => {
  const [loading, setLoading] = useState(false);

  const handleUploadData = async () => {
    setLoading(true);
    const newProduct = {
      title: "Usama's Awesome Watch",
      price: 250,
      description: "MERN Stack practice product",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        newProduct,
      );
      console.log("data  cala gai ", response.data);
      alert("Product successfully added! ID: " + response.data.id);
      //   setLoading(false);
    } catch (error) {
      alert("found some error");
      console.log("error aya ha " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleUploadData}
        className="bg-green-400 p-2 m-2"
        disabled={loading}
      >
        {loading ? "data uploding..." : "upload data"}
      </button>
    </div>
  );
};

export default FakeStorePostApi;
