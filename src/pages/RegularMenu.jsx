import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './RegularMenu.css';

const RegularMenu = () => {
  const dailyMealItems = [
    { day: 'Sunday', description: 'Tandoori chicken, sandwich, chips, ketchup', price: 185 },
    { day: 'Monday', description: 'Chicken Tikka Masala, Rice/Roti Achar', price: 185 },
    { day: 'Tuesday', description: 'Chicken Roll', price: 185 },
    { day: 'Wednesday', description: 'Chicken Biryani', price: 185 },
    { day: 'Thursday', description: 'Egg Bara, Tomato ko achar', price: 185 },
    { day: 'Friday', description: 'Chicken kothey Mo:MO', price: 185 }
  ];

  return (
    <div className="RegularMenu">
      <Navbar />
      
      <div className="daily-meal-section">
        <div className="background-overlay"></div>
        <h2 className="section-title">Daily Meal Price</h2>
        
        <div className="meal-list-container">
          {dailyMealItems.map((item, index) => (
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

export default RegularMenu;
