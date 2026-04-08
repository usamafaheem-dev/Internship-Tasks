// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Add to Cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Agar wohi product already cart mein hai to quantity badhao
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // Naya product add karo with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from Cart function (decrease quantity or remove if 1)
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null // Will be filtered out
            : item,
        )
        .filter((item) => item !== null);
    });
  };

  // Remove entire item from cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear Cart function
  const clearCart = () => {
    setCart([]);
    
  };

  // Cart mein total items count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          removeItem,
          clearCart,
          cartCount,
          isLoading,
          setIsLoading,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => useContext(CartContext);
