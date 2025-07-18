import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './NonVegMenu.css';

const NonVegMenu = () => {
  const dailyLunchItems = [
    { day: 'Sunday', description: 'Aloo fry, Rice, kalo dal, Mix Achar salad', price: 275 },
    { day: 'Monday', description: 'Mushroom Rice, Yellow Dal, Roti, salad', price: 275 },
    { day: 'Tuesday', description: 'Kheer, pulao, kabuli chana, puri/roti, aam ko achar, salad', price: 275 },
    { day: 'Wednesday', description: 'Kauli mattar rice, roti tomato ko achar', price: 275 },
    { day: 'Thursday', description: 'Soyabean, Jeera Rice, aloo kalo chana ko jhol, mula kakro ko achar', price: 275 },
    { day: 'Friday', description: 'Sahi Paneer Rice, Chana ko Dal, roti, Pyazz ko achar, salad', price: 275 }
  ];

  return (
    <div className="NonVegMenu">
      <Navbar />
      
      <div className="menu-section-container">
        <h1 className="main-title">REGULAR LUNCH</h1>
        
        <div className="daily-lunch-menu-area">
          <div className="background-overlay"></div>
          <h2 className="section-subtitle">Daily lunch items</h2>
          
          <div className="meal-list-wrapper">
            {dailyLunchItems.map((item, index) => (
              <div key={index} className="meal-item">
                <div className="day-button">{item.day}</div>
                <div className="meal-description">{item.description}</div>
                <div className="meal-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonVegMenu;
