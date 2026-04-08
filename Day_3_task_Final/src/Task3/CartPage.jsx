import React from 'react';
import { useCart } from './Context/CartContext';
import { Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';   // agar routing use kar rahe ho

const CartPage = () => {
  const { cart, addToCart, removeFromCart, removeItem, clearCart } = useCart(); // remove aur clear function baad mein add karenge

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything yet.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-2xl shadow-sm border">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full max-w-[160px] h-auto md:w-28 md:h-28 object-contain bg-gray-100 rounded-2xl mx-auto md:mx-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg truncate">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">${item.price} × {item.quantity}</p>
                
                <div className="flex items-center gap-3 mt-4">
                  <button 
                    onClick={() => addToCart(item)} 
                    className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-lg"
                  >
                    +
                  </button>
                  <span className="font-medium w-8 h-8 text-center rounded-full bg-black text-white flex items-center justify-center">{item.quantity}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-lg"
                  >
                    −
                  </button>
                </div>
              </div>

              <div className="flex w-full items-center justify-between md:flex-col md:items-end gap-3 mt-3 md:mt-0">
                <p className="font-bold text-lg md:text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border">
            <h3 className="font-semibold text-lg md:text-xl mb-5">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-4">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Proceeding to checkout...')}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 md:py-4 rounded-xl font-medium text-base md:text-lg"
            >
              Proceed to Checkout
            </button>

            <button 
              onClick={clearCart}
              className="w-full mt-3 text-red-500 hover:text-red-600 py-3"
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