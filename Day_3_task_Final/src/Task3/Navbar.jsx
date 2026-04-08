import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react"; // Optional: agar lucide icons use karna chahte ho
import { useCart } from "./Context/CartContext";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const goToCart = () => {
    navigate("/cart");
  };
  const { cartCount } = useCart();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700"
            >
              MyShop
            </Link>
          </div>

          {/* Center - Cart (visible on mobile) */}
          <div className="md:hidden flex items-center relative">
            <button
              onClick={goToCart}
              className="relative p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Right Side - Menu Button for mobile, Links for desktop */}
          <div className="flex items-center gap-4">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Products
              </Link>
              <Link
                to="/user-form"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                User Form
              </Link>
                <Link
                to="/next-form"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Next Form
              </Link>
            </div>

            {/* Desktop Cart */}
            <div className="hidden md:flex items-center">
              <button
                onClick={goToCart}
                className="relative p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
                    <Link
                to="/user-form"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                User Form
              </Link>
                <Link
                to="/next-form"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Next Form
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
