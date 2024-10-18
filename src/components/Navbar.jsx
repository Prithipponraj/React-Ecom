import React from 'react';

const Navbar = ({ cartCount, toggleModal }) => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex justify-between">
      <h1 className="text-2xl">Online Shopping</h1>
      <button onClick={toggleModal} className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded">
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
