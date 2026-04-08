import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Products from './Products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = Products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-96 object-contain bg-gray-100 rounded-2xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-blue-600 mb-8">${product.price}</p>

          <button 
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;