import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_4d98v32',   //  EmailJS Service ID
        'template_hukxa0v',  //  EmailJS Template ID
        formRef.current,
        'pPnzpy_gXDeE0HGhx'       //  EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Professional Painting Services</h1>
          <p className='mission'>
            Transforming spaces with precision, passion, and the finest Kenyan paints.
          </p>
          <div className="hero-service-card">
            <h3>Residential & Commercial Painting</h3>
            <p>
              Extensive home-to-large-scale commercial projects. We apply latest trends
              in painting and design to create warm and beautiful spaces of living.
            </p>
            <button className="quote-button">Get a Quote</button>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and we'll respond within 24 hours
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="from_name" // match EmailJS template variable
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="from_email" // match EmailJS template variable
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone" // optional, match EmailJS template variable
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message" // match EmailJS template variable
                  placeholder="Tell us what you need..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
            {status && <p className="form-status">{status}</p>}
          </div>

          <div className="contact-details-wrapper">
            <div className="contact-info-card">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <h3>Visit Us</h3>
              <p>Kondele Flyover</p>
              <p>Kisumu, Kenya</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon"><FaPhone /></div>
              <h3>Call Us</h3>
              <p>+254-715-268-011 / 0718677664</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon"><FaEnvelope /></div>
              <h3>Email Us</h3>
              <p>support@gemasupaint.co.ke</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon"><FaClock /></div>
              <h3>Business Hours</h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Sun: 9:00 AM - 4:00 PM</p>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7054.9057434337765!2d34.771134!3d-0.082876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa47706357fbf%3A0x2d47fbd6d59ecb90!2sGemasu%20Paints!5e1!3m2!1sen!2ske!4v1763462679692!5m2!1sen!2ske"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gemasu Paints Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;