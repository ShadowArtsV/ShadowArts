import React from 'react';
import '../App.css';

const Workshops = () => {
  return (
    <div className="container">
      <h2>Upcoming Workshops</h2>
      <div className="workshop-list">
        <div className="workshop-item">
          <h3>Exploring Shadow Art</h3>
          <p>Date: June 12, 2025</p>
          <p>Instructor: Dr. Emily Ward</p>
        </div>
        <div className="workshop-item">
          <h3>Mastering Light and Dark</h3>
          <p>Date: July 8, 2025</p>
          <p>Instructor: Mark Daniels</p>
        </div>
        <div className="workshop-item">
          <h3>Sculpting Shadows</h3>
          <p>Date: August 20, 2025</p>
          <p>Instructor: Sofia Rodriguez</p>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
