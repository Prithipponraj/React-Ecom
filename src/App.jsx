import React, { useEffect, useState } from 'react';

import ProductCard from './components/Productcard';
import Navbar from './components/Navbar';
import CartModal from './components/CartModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };


  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} toggleModal={toggleModal} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {isModalOpen && <CartModal cart={cart} removeFromCart={removeFromCart} toggleModal={toggleModal} />}
    </div>
  );
};

export default App;
