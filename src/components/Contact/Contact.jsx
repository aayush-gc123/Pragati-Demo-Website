// src/Contact.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import './Contact.css';
import { db } from '../../Firebase/firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    alert
    e.preventDefault();
    try {
alert
      await addDoc(collection(db, 'contacts'), formData);  
      alert('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      console.log("hahahhaaa")
      console.error('Error adding document: ', err);
      alert('Error sending message');
    }
  };
  

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-details">
          <div className="detail-item">
            <h3>Our Address</h3>
            <p>1234 School Lane, Education City, ED 56789</p>
          </div>
          <div className="detail-item">
            <h3>Phone</h3>
            <p>+1 234 567 890</p>
          </div>
          <div className="detail-item">
            <h3>Email</h3>
            <p>info@pragatisecondaryschool.com</p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.093226211835!2d144.9554313155048!3d-37.81732797975132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c5f14b2d1e1ed!2sEducation%20City!5e0!3m2!1sen!2sus!4v1620518378775!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
