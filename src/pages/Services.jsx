import React from 'react';
import { Check, Phone, Mail } from 'lucide-react';
import './Services.css';
import Ecommerceimage from '../assets/ecommerce-image.png';
import plantimage from '../assets/plant-image.png';

const Services = () => {
  return (
    <div className="services-page">
      
      {/* --- HERO SECTION --- */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Core Services Overview</h1>
          <p>
            At Gemasu Paints, we combine Kenyan craftsmanship with world-class 
            technology to deliver excellence across the entire paint lifecycle.
          </p>
        </div>
      </section>

      {/* --- SECTION 1: PAINTING SERVICES --- */}
      <section className="service-section">
        <div className="container">
          <div className="content-col">
            <span className="tagline">PROFESSIONAL TRANSFORMATION</span>
            <h2 className="section-title">Painting Services</h2>
            <p className="description">
              Experience a complete interior and exterior transformation with our professional painting crews. We specialize in bringing vibrant life to residential and commercial spaces across Kenya, utilizing precision application techniques that ensure every corner reflects perfection. From detailed surface preparation to the final stroke, we guarantee a masterpiece.
            </p>
            
            <ul className="feature-list">
              <li>
                <span className="check-icon"><Check size={16} color="white" strokeWidth={3} /></span>
                Complete residential and commercial renovations
              </li>
              <li>
                <span className="check-icon"><Check size={16} color="white" strokeWidth={3} /></span>
                Expert color consultation for mood and lighting
              </li>
              <li>
                <span className="check-icon"><Check size={16} color="white" strokeWidth={3} /></span>
                Durable weather-resistant exterior coatings
              </li>
            </ul>
             <a href="/contact">
            <button className="btn btn-dark">Book an Expert</button>
            </a>
          </div>

          <div className="image-col">
            <div className="image-wrapper bg-yellow-tint">
              <img 
                src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop" 
                alt="Minimalist room with sofa" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PAINT MANUFACTURE --- */}
      <section className="service-section reverse-layout">
        <div className="container">
          <div className="content-col">
            <span className="tagline">THE SCIENCE OF COLOR</span>
            <h2 className="section-title">Paint Manufacture</h2>
            <p className="description">
              Our manufacturing process is rooted in sustainability and resilience. We produce high-performance paints that are specifically engineered for the unique Kenyan climate. By emphasizing eco-friendly formulas and high-durability polymers, we ensure that Gemasu Paints remain vibrant and protective for years to come.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <h4>Eco-Friendly</h4>
                <p>Low VOC formulations for healthier indoor air.</p>
              </div>
              <div className="info-card">
                <h4>Extreme Durability</h4>
                <p>Formulated to resist UV fading and moisture.</p>
              </div>
            </div>

           
          </div>

          <div className="image-col">
            <div className="image-wrapper bg-gray-tint">
              <img 
                src={plantimage}
                alt="White wall paint texture" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SELL PRODUCTS --- */}
      <section className="service-section">
        <div className="container">
          <div className="content-col">
            <span className="tagline">PREMIUM RETAIL EXPERIENCE</span>
            <h2 className="section-title">Sell Products</h2>
            <p className="description">
              Step into our retail spaces to explore a wide range of premium paints and accessories. Whether you're a professional contractor or a DIY enthusiast, our organized storefronts offer everything you need. From silk finishes and matte textures to specialty industrial coatings, we provide the full spectrum of Gemasu quality at your fingertips.
            </p>

            <div className="product-tags">
              <span className="tag">Emulsion Paints</span>
              <span className="tag">Wood Finishes</span>
              <span className="tag">Waterproofing</span>
              <span className="tag">Brushes & Tools</span>
            </div>

            <button className="btn btn-yellow">Shop Online</button>
          </div>

          <div className="image-col">
            <div className="image-wrapper bg-gradient-tint">
              <div className="abstract-gradient-box">
                <img 
                  src={Ecommerceimage}
                  alt="Colorful paint cans" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT STRIP --- */}
      <section className="contact-strip">
        <h3>Need custom solutions for your project?</h3>
        <div className="contact-details">
          <div className="contact-item">
            <Phone size={18} />
            <span>+254-715-268-011</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>support@gemasupaints.co.ke</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;