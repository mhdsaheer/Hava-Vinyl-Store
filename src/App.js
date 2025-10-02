import React from 'react';
import Navbar from './components/inc/Navbar/Navbar.js';
import Topcontext from './components/inc/Navbar/Topcontext.js';
import Home from './components/pages/Home.js';
import Shop from './components/pages/Shop.js';
import Cart from './components/pages/Cart.js';
import ProductDetails from './components/pages/ProductDetails.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/contexts/CartContext.js';
import Footer from './components/inc/Footer/Footer.js';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="app-container">
          <Topcontext />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
