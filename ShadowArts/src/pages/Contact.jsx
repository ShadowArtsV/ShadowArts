import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>
        Have questions? Interested in collaborating? Reach out to us!
      </p>
      <div className="contact-form">
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />
          
          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />
          
          <label>Message:</label>
          <textarea placeholder="Your Message" rows="4" required></textarea>
          
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
