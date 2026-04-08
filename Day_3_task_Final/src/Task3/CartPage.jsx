import React from "react";
import { useCart } from "./Context/CartContext";
import { Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, removeItem, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Empty Cart UI
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-3">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft size={18} />
        Back to Products
      </Link>

      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        
        {/* Cart Items */}
        <div className="lg:col-span-3 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full max-w-[140px] h-32 object-contain bg-gray-100 rounded-xl"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 mt-1">
                  ${item.price} × {item.quantity}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => addToCart(item)}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-lg"
                  >
                    +
                  </button>

                  <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-lg"
                  >
                    −
                  </button>
                </div>
              </div>

              {/* Price + Delete */}
              <div className="flex md:flex-col justify-between md:items-end items-center gap-4">
                <p className="text-xl font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => {
                    removeItem(item.id);
                    toast.success("Product deleted!");
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-2xl border shadow-sm lg:sticky lg:top-24">
            <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold border-t pt-4">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => toast.success("Proceeding to checkout...")}
              
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-4 text-red-500 hover:text-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default CartPage;