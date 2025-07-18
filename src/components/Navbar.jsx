import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="top-strip"></div>
      <div className="navbar-spacer"></div>
      <header className="fixed-navbar">
        <div className="back-bt">
          <i className="fa-solid fa-arrow-left-long"></i>
          <div className="logo">
            <img src={require('../assets/logo.png')} alt="Plateful Logo" />
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>
                MENU
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/menu" className="order-button">
                ORDER ONLINE
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
