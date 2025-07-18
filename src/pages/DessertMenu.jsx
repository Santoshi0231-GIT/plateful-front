import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './DessertMenu.css';

const DessertMenu = () => {
  const dessertItems = [
    { day: 'SUNDAY', description: 'Hot Chocolate', price: 150 },
    { day: 'Monday', description: 'Gulab jamun', price: 50 },
    { day: 'Tuesday', description: 'Cupcakes', price: 50 },
    { day: 'Wednesday', description: 'Icecream', price: 70 },
    { day: 'Thursday', description: 'Chocolate cakes', price: 150 },
    { day: 'Friday', description: 'Chocolate Bar', price: 150 }
  ];

  return (
    <div className="DessertMenu">
      <Navbar />
      
      <div className="dessert-section">
        <div className="background-overlay"></div>
        <h2 className="section-title">Daily Dessert items</h2>
        
        <div className="meal-list-container">
          {dessertItems.map((item, index) => (
            <div key={index} className="meal-item">
              <div className="day-button orange-btn">{item.day}</div>
              <div className="meal-description">{item.description}</div>
              <div className="meal-price green-price-box">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DessertMenu;
