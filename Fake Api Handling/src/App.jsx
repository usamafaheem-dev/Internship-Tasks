import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./Apis/AllProducts";
import Navbar from "./components/Navbar/Navbar";
import JsonPlaceHolderData from "./Apis/JsonPlaceHolderData";
import PlaceHolderPostApi from "./Apis/PlaceHolderPostApi";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Home</h1>
      <p className="mt-2 text-gray-600">Add your sections here.</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/jsonplaceholder" element={<JsonPlaceHolderData />} />
        <Route path="/jsonholderpost" element={<PlaceHolderPostApi />} />
      </Routes>
    </div>
  );
};

export default App;
