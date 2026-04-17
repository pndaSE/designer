import React from 'react';
import './styles.css'; // Optional: CSS file for custom styles

const LandingPage: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="hero">
        <h1>Welcome to Our Web Design Service</h1>
        <p>Your partner in creating stunning websites tailored to your needs.</p>
        <button onClick={() => alert('Get Started!')}>Get Started</button>
      </section>
      <section id="features">
        <h2>Our Features</h2>
        <ul>
          <li>Responsive Design</li>
          <li>SEO Friendly</li>
          <li>E-commerce Solutions</li>
          <li>24/7 Support</li>
        </ul>
      </section>
      <footer>
        <p>© {new Date().getFullYear()} Web Design Service. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;