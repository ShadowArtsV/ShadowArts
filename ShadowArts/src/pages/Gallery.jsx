import React from 'react';
import '../App.css';

const artworks = [
  { id: 1, title: 'Abstract Shadows', artist: 'Elena Myers', year: 2023, image: '/api/placeholder/400/300' },
  { id: 2, title: 'Urban Reflections', artist: 'James Chen', year: 2024, image: '/api/placeholder/400/300' },
  { id: 3, title: 'Ethereal Forms', artist: 'Sofia Rodriguez', year: 2022, image: '/api/placeholder/400/300' }
];

const Gallery = () => {
  return (
    <div className="container">
      <h2 className="section-title">Art Gallery</h2>
      <div className="grid grid-3">
        {artworks.map((art) => (
          <div key={art.id} className="card">
            <img src={art.image} alt={art.title} />
            <div className="card-content">
              <h3 className="card-title">{art.title}</h3>
              <p className="card-subtitle">{art.artist}, {art.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
