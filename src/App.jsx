import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import Contact from './pages/Contact.jsx';
import NonVegMenu from './pages/NonVegMenu.jsx';
import RegularMenu from './pages/RegularMenu.jsx';
import DessertMenu from './pages/DessertMenu.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nonveg" element={<NonVegMenu />} />
            <Route path="/regular" element={<RegularMenu />} />
            <Route path="/dessert" element={<DessertMenu />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
