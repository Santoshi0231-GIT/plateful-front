import React from 'react';
import { useCart } from '../context/CartContext';
import './CartModal.css';

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Here you would integrate with your backend API
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Your Cart</h2>
        <ul id="cart-items-list">
          {cart.items.length === 0 ? (
            <li>Your cart is empty.</li>
          ) : (
            cart.items.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <span>{item.title}</span>
                  <div className="cart-item-actions">
                    <span>Rs.{item.price}/-</span>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
        <p>Total: Rs.<span id="cart-total">{cart.total}</span>/-</p>
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartModal;
