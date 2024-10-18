import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button onClick={() => addToCart(product)} className="hover:bg-gradient-to-r from-purple-500 to-pink-500 bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
