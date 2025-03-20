import React, { useState } from 'react';
import './ShadowArts.css'; // Import the new CSS file

const ShadowArts = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Sample data for artworks
  const artworks = [
    { id: 1, title: 'Abstract Shadows', artist: 'Elena Myers', year: 2023, image: '/api/placeholder/400/300', category: 'abstract' },
    { id: 2, title: 'Urban Reflections', artist: 'James Chen', year: 2024, image: '/api/placeholder/400/300', category: 'urban' },
    { id: 3, title: 'Ethereal Forms', artist: 'Sofia Rodriguez', year: 2022, image: '/api/placeholder/400/300', category: 'sculpture' }
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-circle">
            <div className="logo-inner"></div>
          </div>
          <h1 className="site-title">SHADOW ARTS</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active-tab' : ''}>Home</button></li>
            <li><button onClick={() => setActiveTab('gallery')} className={activeTab === 'gallery' ? 'active-tab' : ''}>Gallery</button></li>
            <li><button onClick={() => setActiveTab('exhibitions')} className={activeTab === 'exhibitions' ? 'active-tab' : ''}>Exhibitions</button></li>
            <li><button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active-tab' : ''}>About</button></li>
            <li><button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'active-tab' : ''}>Contact</button></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {activeTab === 'home' && (
          <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h2>Where Shadows Come to Life</h2>
              <p>Explore the interplay of light and darkness through contemporary art</p>
              <button className="btn">Explore Gallery</button>
            </div>
          </section>
        )}

        {activeTab === 'gallery' && (
          <section>
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
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Shadow Arts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShadowArts;
