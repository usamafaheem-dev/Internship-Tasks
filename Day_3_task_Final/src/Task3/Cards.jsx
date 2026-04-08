import React, { useState } from "react";
import Products from "./Products"; // apna products array
import { ShoppingCart } from "lucide-react";
import { useCart } from "./Context/CartContext";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const [products, setProducts] = useState(Products); // setProduct ki zarurat nahi agar sirf display karna hai

  const {addToCart} = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Optional Heading */}
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h2>

      {/* Cards Container - Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Product Image */}
            <div className="h-56 bg-gray-100 flex items-center justify-center p-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-3">
              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3.5rem]">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-2 min-h-[2.8rem]">
                {item.description}
              </p>

              {/* Price */}
              <div className="pt-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${item.price}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2 md:py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-4 text-sm md:text-base"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
