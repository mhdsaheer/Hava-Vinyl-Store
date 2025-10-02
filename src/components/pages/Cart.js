import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    cartTotal,
    clearCart
  } = useCart();

  const changeQuantity = (id, newQuantity) => {
    updateQuantity(id, Math.max(1, newQuantity));
  };

  const handleClearCart = () => {
    clearCart();
  };

 
  return (
    <div className="cart-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; Cart
      </div>
      <h3 className="cart-page-title">Shopping Cart</h3>
      
      {cartItems.length === 0 ? (
        <div className="cart-page-empty">
          <p>Your cart is empty</p>
          <Link to="/shop" className="cart-page-continue-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-page-items">
            <div className="cart-page-header">
              <div className="cart-page-header-product">Product</div>
              <div className="cart-page-header-price">Price</div>
              <div className="cart-page-header-quantity">Quantity</div>
              <div className="cart-page-header-total">Total</div>
              <div className="cart-page-header-remove"></div>
            </div>

            {cartItems.map((item) => (
              <div className="cart-page-item" key={item.id}>
                <div className="cart-page-product-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-page-product-img"
                  />
                  <div className="cart-page-product-details">
                    <h3>{item.name}</h3>
                    <p className="cart-page-product-genre">{item.details?.genre}</p>
                  </div>
                </div>
                <div className="cart-page-price">${item.price.toFixed(2)}</div>
                <div className="cart-page-quantity-controls">
                  <button 
                    onClick={() => changeQuantity(item.id, item.quantity - 1)}
                    className="cart-page-qty-btn"
                  >
                    -
                  </button>
                  <span className="cart-page-qty">{item.quantity}</span>
                  <button 
                    onClick={() => changeQuantity(item.id, item.quantity + 1)}
                    className="cart-page-qty-btn"
                  >
                    +
                  </button>
                </div>
                <div className="cart-page-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="cart-page-remove">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="cart-page-remove-btn"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-page-actions">
            <button 
              onClick={handleClearCart}
              className="cart-page-clear-btn"
            >
              Clear Cart
            </button>
            <Link to={'/shop'} className='update-cart-btn'>
            <button
              className="cart-page-update-btn"
            >Update Cart
              
            </button>
            </Link>
          </div>

          <div className="cart-page-summary">
            <div className="cart-page-total-section">
              <h3>Cart Total</h3>
              <div className="cart-page-total-row">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-page-total-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="cart-page-total-row cart-page-grand-total">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="cart-page-checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
