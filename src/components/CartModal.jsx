import React from 'react';

const CartModal = ({ cart, removeFromCart, toggleModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.title}</span>
              <button onClick={() => removeFromCart(item.id)} className="bg-gradient-to-r from-purple-500 to-pink-500  text-white px-2 rounded">
                Remove
              </button>
            </div>
          ))
        )}
        <button onClick={toggleModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
