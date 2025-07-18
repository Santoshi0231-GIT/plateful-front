import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar.jsx';
import CartModal from '../components/CartModal.jsx';

const Home = () => {
  const { cart, addToCart } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const menuItems = [
    {
      id: 'puri-sabji-1',
      title: 'Puri Tarkari',
      price: 80,
      image: '/images/Puri-sabji.png',
      rating: '★★★★☆'
    },
    {
      id: 'momo',
      title: 'MO:MO',
      price: 120,
      image: '/images/chicken momo.jpg',
      rating: '★★★★★'
    },
    {
      id: 'chowmein',
      title: 'Chowmein',
      price: 60,
      image: '/images/chowmein (1).png',
      rating: '★★★☆☆'
    },
    {
      id: 'thakali-set',
      title: 'Thakali Set',
      price: 200,
      image: '/images/thakali khana.webp',
      rating: '★★★★☆'
    },
    {
      id: 'khaja-set',
      title: 'Khaja Set',
      price: 170,
      image: '/images/khaja-set (1) (1).png',
      rating: '★★★★☆'
    },
    {
      id: 'gulabjamun',
      title: 'Gulabjamun',
      price: 40,
      image: '/images/rasberry (1).png',
      rating: '★★★★☆'
    },
    {
      id: 'chukauni',
      title: 'Chukauni',
      price: 80,
      image: '/images/chukani.jpg',
      rating: '★★★★☆'
    },
    {
      id: 'selroti',
      title: 'Selroti',
      price: 20,
      image: '/images/sel-roti.jpeg',
      rating: '★★★★☆'
    },
    {
      id: 'alu-parautha',
      title: 'Aloo Paratha',
      price: 80,
      image: '/images/alo parautha.webp',
      rating: '★★★★☆'
    }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const scrollSlider = (direction) => {
    const cardWidth = 240;
    const scrollAmount = cardWidth * 3;
    
    if (direction === 'next') {
      setSliderPosition(prev => prev + scrollAmount);
    } else {
      setSliderPosition(prev => prev - scrollAmount);
    }
  };

  return (
    <div className="Home">
      <Navbar />
      
      <div className="bg">
        <div className="hero-text">
          <h1 className="welcome">WELCOME</h1>
          <h2 className="to">TO</h2>
          <h1 className="plateful">PLATEFUL</h1>
          <p><em>"Plateful of <span className="highlight">home</span> in every <span className="highlight">bite</span>."</em></p>
          <br /><br />
          <Link to="/menu" className="order-btn">ORDER NOW</Link>
        </div>
      </div>

      <div className="container">
        <div className="text">
          <h2>BRINGING THE COMFORT OF HOME TO YOUR PLATE</h2>
          <p><strong>At plateful</strong>, we believe there's nothing quite like the taste of home-cooked food. Our meals are lovingly prepared using traditional recipes, fresh ingredients, and a touch of care that only a home kitchen can offer.</p>
        </div>
        <div className="para">
          <p>Whether it's a family favourite or a regional classic, each dish is crafted to nourish your body and soul. No artificial flavours, no shortcuts—just real food, made the way it should be.</p>
        </div>
      </div>

      <div className="heading">
        <h2>OUR ITEMS</h2>
      </div>

      <header className="cart-header">
        <div className="cart-info">
          Cart: <span id="cart-item-count">{cart.items.length}</span> items
          <button 
            id="view-cart-btn" 
            onClick={() => setShowCartModal(true)}
          >
            View Cart
          </button>
        </div>
      </header>

      <main>
        <section className="menu-slider-section">
          <h2>Popular Dishes</h2>
          <div className="slider-wrapper">
            <button 
              className="nav-btn prev-btn" 
              onClick={() => scrollSlider('prev')}
            >
              &lt;
            </button>
            <div className="slider-container" style={{ transform: `translateX(-${sliderPosition}px)` }}>
              {menuItems.map(item => (
                <div key={item.id} className="item-card">
                  <div className="image-container">
                    <img src={item.image} alt={item.title} />
                    <span 
                      className="add-icon" 
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </span>
                  </div>
                  <div className="info">
                    <div className="rating">{item.rating}</div>
                    <div className="price" data-price={item.price}>Rs.{item.price}/-</div>
                    <div className="title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="nav-btn next-btn" 
              onClick={() => scrollSlider('next')}
            >
              &gt;
            </button>
          </div>
        </section>
      </main>

      <div className="top-menu-selector">
        <h1 className="main-heading">Pick your favourite</h1>
        <p className="subtitle">(We will be open at 10AM-6PM.)</p>
        <div className="category-buttons">
          <button className="category-btn green-btn">Veg snacks</button>
          <Link to="/regular" className="category-btn green-btn">Non-veg snacks</Link>
          <Link to="/nonveg" className="category-btn green-btn">Regular Lunch</Link>
          <Link to="/dessert" className="category-btn green-btn">Dessert</Link>
        </div>
      </div>

      <div className="daily-meal-section">
        <div className="background-overlay"></div>
        <h2 className="section-title">Daily meal Price</h2>
        <div className="meal-list-container">
          <div className="meal-item">
            <div className="day-button orange-btn">SUNDAY</div>
            <div className="meal-description">ALOO PARATHA, DAHI</div>
            <div className="meal-price green-price-box">175</div>
          </div>
          <div className="meal-item">
            <div className="day-button orange-btn">MONDAY</div>
            <div className="meal-description">VEG PASTA,GARLIC BREAD</div>
            <div className="meal-price green-price-box">175</div>
          </div>
          <div className="meal-item">
            <div className="day-button orange-btn">TUESDAY</div>
            <div className="meal-description">VEG FRIED RICE,MANCHURIAN</div>
            <div className="meal-price green-price-box">175</div>
          </div>
          <div className="meal-item">
            <div className="day-button orange-btn">WEDNESDAY</div>
            <div className="meal-description">SAMOSA TARKARI</div>
            <div className="meal-price green-price-box">175</div>
          </div>
          <div className="meal-item">
            <div className="day-button orange-btn">THURSDAY</div>
            <div className="meal-description">MUSHROOM CHOILA CHIURA,ALOO KO ACHAR</div>
            <div className="meal-price green-price-box">175</div>
          </div>
          <div className="meal-item">
            <div className="day-button orange-btn">FRIDAY</div>
            <div className="meal-description">PANEER CURRY,KULCHA ACHAR</div>
            <div className="meal-price green-price-box">175</div>
          </div>
        </div>
        <div className="weekly-monthly-prices">
          <div className="price-line">
            <span className="price-label">Weekly meal price</span>
            <span className="price-dots"></span>
            <span className="price-value">170</span>
          </div>
          <div className="price-line">
            <span className="price-label">Monthly meal Price</span>
            <span className="price-dots"></span>
            <span className="price-value">165</span>
          </div>
        </div>
      </div>

      <div className="top-section">
        <h1 className="reviews-main-title">FOOD REVIEWS</h1>
        <p className="review-paragraph">
          <strong className="highlight">PLATEFUL-Never had a bad meal.</strong> Our menu is crafted with care, using <strong className="highlight">fresh, locally-sourced ingredients</strong> whenever possible. We are equally dedicated to services. Our goal is to make you feel at home. Our team works hard to ensure that every visit-whether a casual weekday lunch or a celebratory dinner-is <strong className="highlight">enjoyable,relaxed, and memorable.</strong>
        </p>
      </div>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="subscribe-form">
              <label htmlFor="email-address">Email Address</label>
              <div className="email-input-wrapper">
                <input type="email" id="email-address" placeholder="Please Enter your valid email address" />
              </div>
            </div>
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Plateful Logo" />
            </div>
          </div>
          <div className="footer-right">
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f">Facebook</i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram">Instagram</i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube">YouTube</i></a>
            </div>
            <div className="subscribe-links">
              <h4>SUBSCRIBE OUR CHANNEL</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="#">Our Team</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom-text">
          <p>Our food is totally fresh and cooked daily. We make sure our food is very hygienic and cooked with very less oil. Our aim is to make your life easier and in the process enjoy healthy home cooked meals. We are located at Butwal or call us at <span className="phone-number">9765862460</span> or Mail us at <span className="Email">Plateful@gmail.com</span>.</p>
        </div>
      </footer>

      {showCartModal && (
        <CartModal 
          onClose={() => setShowCartModal(false)} 
        />
      )}
    </div>
  );
};

export default Home;

