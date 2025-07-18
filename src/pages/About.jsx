import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import './About.css';

const About = () => {
  return (
    <div className="About">
      <Navbar />

      {/* About Section */}
      <section className="about-section">
        <div className="about-image">
          <img src="/images/family-kitchen-rice.webp" alt="Family Kitchen" />
          <div className="label">ABOUT US</div>
        </div>
        <div className="about-text">
          <p>
            <strong>At PLATEFUL,</strong> we are three passionate students united by a shared love for food, creativity, and innovation. What started as a simple idea in a classroom quickly grew into a project driven by curiosity, collaboration, and a desire to make a meaningful impact.
          </p>
          <p>
            We believe that food is more than just fuel—it's a story, a connection, and a way to bring people together. With backgrounds in <strong>[IT fields]</strong>, we combined our skills to create a platform called <strong>'PLATEFUL'</strong>.
          </p>
          <p>
            <strong>For any inquiries, call us at:</strong> 9742907479, 9765862460
          </p>
        </div>
      </section>

      {/* Why Plateful Section */}
      <section className="why-plateful-section">
        <h1 className="section-title">WHY PLATEFUL?</h1>
        <div className="cards-container">
          <div className="card">
            <h3>GHAR KO KHANA</h3>
            <p>Delicious home-style meals with minimal masala and oil.</p>
          </div>
          <div className="card">
            <h3>A LOT OF VARIETY</h3>
            <p>Enjoy a wide variety of meals. We strive not to repeat dishes within the week.</p>
          </div>
          <div className="card">
            <h3>Easy Ordering</h3>
            <p>
              Call or message us at 9765862460.<br />
              We're available on WhatsApp and Viber.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision-section">
        <div className="overlay">
          <div className="content-wrapper">
            <div className="text-block">
              <h4>Our Mission</h4>
              <p>Our mission, simply stated, is Nourishment Delivered.</p>
            </div>
            <div className="text-block">
              <h4>Our Vision</h4>
              <p>To nourish those in need and deliver assistance where and when it's needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="top-section">
        <h1 className="reviews-main-title">FOOD REVIEWS</h1>
        <p className="review-paragraph">
          <strong className="highlight">PLATEFUL - Never had a bad meal.</strong> Our menu is crafted with care, using <strong className="highlight">fresh, locally-sourced ingredients</strong> whenever possible. We are equally dedicated to service. Our goal is to make you feel at home. Whether it's a casual weekday lunch or a celebratory dinner, we ensure your visit is <strong className="highlight">enjoyable, relaxed, and memorable.</strong>
        </p>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="subscribe-form">
              <label htmlFor="email-address">Email Address</label>
              <div className="email-input-wrapper">
                <input type="email" id="email-address" placeholder="Enter your email address" />
              </div>
            </div>
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Plateful Logo" />
            </div>
          </div>

          <div className="footer-right">
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="subscribe-links">
              <h4>SUBSCRIBE TO OUR CHANNEL</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="#">Our Team</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-text">
          <p>
            Our food is fresh and cooked daily. We ensure it is hygienic and made with minimal oil. Our aim is to make your life easier while enjoying healthy, home-cooked meals. We are located in Butwal. Call us at <span className="phone-number">9765862460</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
