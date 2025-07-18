import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import CartModal from '../components/CartModal.jsx';
import { useCart } from '../context/CartContext';
import './Menu.css';

const Menu = () => {
  const { cart, addToCart } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);

  const vegSnacks = [
    { id: 'puri-sabji', title: 'Puri Tarkari', price: 80, image: require('../assets/Puri-sabji.png'), rating: '★★★★☆' },
    { id: 'chukauni', title: 'Chukauni', price: 80, image: require('../assets/chukani.jpg'), rating: '★★★★☆' },
    { id: 'selroti', title: 'Selroti', price: 20, image: require('../assets/sel-roti.jpeg'), rating: '★★★★☆' },
    { id: 'alu-paratha', title: 'Aloo Paratha', price: 80, image: require('../assets/alo parautha.webp'), rating: '★★★★☆' }
  ];

  const nonVegSnacks = [
    { id: 'momo', title: 'MO:MO', price: 120, image: require('../assets/chicken momo.jpg'), rating: '★★★★★' },
    { id: 'chowmein', title: 'Chowmein', price: 60, image: require('../assets/chowmein (1).png'), rating: '★★★☆☆' }
  ];

  const regularLunch = [
    { id: 'thakali-set', title: 'Thakali Set', price: 200, image: require('../assets/thakali khana.webp'), rating: '★★★★☆' },
    { id: 'khaja-set', title: 'Khaja Set', price: 170, image: require('../assets/khaja-set (1) (1).png'), rating: '★★★★☆' }
  ];

  const desserts = [
    { id: 'gulabjamun', title: 'Gulabjamun', price: 40, image: require('../assets/rasberry (1).png'), rating: '★★★★☆' }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const MenuSection = ({ title, items }) => (
    <div className="menu-section">
      <h2>{title}</h2>
      <div className="menu-grid">
        {items.map(item => (
          <div key={item.id} className="menu-item-card">
            <div className="menu-item-image">
              <img src={item.image} alt={item.title} />
              <span 
                className="add-to-cart-btn" 
                onClick={() => handleAddToCart(item)}
              >
                +
              </span>
            </div>
            <div className="menu-item-info">
              <div className="rating">{item.rating}</div>
              <div className="price">Rs.{item.price}/-</div>
              <div className="title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="Menu">
      <Navbar />
      
      <div className="menu-container">
        <div className="menu-header">
          <h1>Our Menu</h1>
          <div className="cart-info">
            Cart: <span>{cart.items.length}</span> items
            <button 
              className="view-cart-btn"
              onClick={() => setShowCartModal(true)}
            >
              View Cart
            </button>
          </div>
        </div>

        <div className="menu-categories">
          <Link to="/regular" className="category-link">
            <div className="category-card">
              <img src={require('../assets/chicken momo.jpg')} alt="Non-veg" />
              <h3>Non-veg Snacks</h3>
            </div>
          </Link>
          
          <Link to="/nonveg" className="category-link">
            <div className="category-card">
              <img src={require('../assets/thakali khana.webp')} alt="Regular Lunch" />
              <h3>Regular Lunch</h3>
            </div>
          </Link>
          
          <Link to="/dessert" className="category-link">
            <div className="category-card">
              <img src={require('../assets/rasberry (1).png')} alt="Dessert" />
              <h3>Desserts</h3>
            </div>
          </Link>
        </div>

        <MenuSection title="Vegetarian Snacks" items={vegSnacks} />
        <MenuSection title="Non-Vegetarian Snacks" items={nonVegSnacks} />
        <MenuSection title="Regular Lunch" items={regularLunch} />
        <MenuSection title="Desserts" items={desserts} />
      </div>

      {showCartModal && (
        <CartModal 
          onClose={() => setShowCartModal(false)} 
        />
      )}
    </div>
  );
};

export default Menu;
