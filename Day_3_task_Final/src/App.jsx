import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./Task3/Cards";
import CartPage from "./Task3/CartPage";
import ProductDetail from "./Task3/ProductDetail";
import Navbar from "./Task3/Navbar";
import { CartProvider } from "./Task3/Context/CartContext";
import { Toaster } from "react-hot-toast";
import Dashbord from "./Task4/Dashbord";
import { Task4ContextFun } from "./Task4/Context/Task4Context";
import Form from "./Task5/Form";
import PersonalForm from "./Task2/PersonalForm";

const App = () => {
  const [toastPosition, setToastPosition] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768 ? "bottom-right" : "top-center";
  });

  useEffect(() => {
    const handleResize = () => {
      setToastPosition(window.innerWidth < 768 ? "bottom-right" : "top-center");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Toaster position={toastPosition} />
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/user-form" element={<Form />} />
          <Route path="/next-form" element={<PersonalForm/>} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
