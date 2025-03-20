import React, { useState } from 'react';

const ShadowArts = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  // Sample data for artworks
  const artworks = [
    { id: 1, title: 'Abstract Shadows', artist: 'Elena Myers', year: 2023, image: '/api/placeholder/400/300', category: 'abstract' },
    { id: 2, title: 'Urban Reflections', artist: 'James Chen', year: 2024, image: '/api/placeholder/400/300', category: 'urban' },
    { id: 3, title: 'Ethereal Forms', artist: 'Sofia Rodriguez', year: 2022, image: '/api/placeholder/400/300', category: 'sculpture' },
    { id: 4, title: 'Midnight Silhouettes', artist: 'Marcus Johnson', year: 2023, image: '/api/placeholder/400/300', category: 'photography' },
    { id: 5, title: 'Luminous Void', artist: 'Amara Khan', year: 2024, image: '/api/placeholder/400/300', category: 'installation' },
    { id: 6, title: 'Cascading Darkness', artist: 'Leo Park', year: 2023, image: '/api/placeholder/400/300', category: 'abstract' }
  ];
  
  // Sample data for upcoming exhibitions
  const exhibitions = [
    { id: 1, title: 'Shadows & Light', date: 'April 15 - May 30, 2025', location: 'Main Gallery' },
    { id: 2, title: 'Contemporary Visions', date: 'June 10 - July 25, 2025', location: 'East Wing' },
    { id: 3, title: 'Emerging Artists Showcase', date: 'August 5 - September 20, 2025', location: 'New Talent Space' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-black p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-700 rounded-full shadow-inner"></div>
            </div>
            <h1 className="text-2xl font-bold tracking-wider">SHADOW ARTS</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => setActiveTab('home')}
                  className={`hover:text-gray-300 transition ${activeTab === 'home' ? 'text-purple-400 font-semibold' : ''}`}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('gallery')}
                  className={`hover:text-gray-300 transition ${activeTab === 'gallery' ? 'text-purple-400 font-semibold' : ''}`}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('exhibitions')}
                  className={`hover:text-gray-300 transition ${activeTab === 'exhibitions' ? 'text-purple-400 font-semibold' : ''}`}
                >
                  Exhibitions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('about')}
                  className={`hover:text-gray-300 transition ${activeTab === 'about' ? 'text-purple-400 font-semibold' : ''}`}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className={`hover:text-gray-300 transition ${activeTab === 'contact' ? 'text-purple-400 font-semibold' : ''}`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center z-20 px-10">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">Where Shadows Come to Life</h2>
                  <p className="text-xl mb-8">Explore the interplay of light and darkness through contemporary art</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition">
                    Explore Gallery
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 bg-gray-800"></div>
            </section>

            {/* Featured Works */}
            <section>
              <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-2">Featured Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artworks.slice(0, 3).map(artwork => (
                  <div key={artwork.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                    <img src={artwork.image} alt={artwork.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                      <p className="text-gray-400">{artwork.artist}, {artwork.year}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setActiveTab('gallery')}
                  className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold py-2 px-6 rounded-full transition"
                >
                  View All Artworks
                </button>
              </div>
            </section>

            {/* Upcoming Exhibitions */}
            <section>
              <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-2">Upcoming Exhibitions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exhibitions.map(exhibition => (
                  <div key={exhibition.id} className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{exhibition.title}</h3>
                    <p className="text-purple-400 mb-2">{exhibition.date}</p>
                    <p className="text-gray-400 mb-4">{exhibition.location}</p>
                    <button className="text-sm text-gray-300 hover:text-purple-400 transition">Learn more →</button>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <section className="bg-gray-800 rounded-lg p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay in the Loop</h2>
                <p className="text-gray-300 mb-6">Subscribe to our newsletter for exhibition announcements, artist spotlights, and special events.</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-2">Art Gallery</h2>
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">All</button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition">Abstract</button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition">Photography</button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition">Sculpture</button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition">Installation</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map(artwork => (
                <div key={artwork.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                  <img src={artwork.image} alt={artwork.title} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                    <p className="text-gray-400 mb-2">{artwork.artist}, {artwork.year}</p>
                    <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm">{artwork.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exhibitions Tab */}
        {activeTab === 'exhibitions' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-2">Exhibitions</h2>
            <div className="space-y-8">
              {exhibitions.map(exhibition => (
                <div key={exhibition.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-64 md:h-full bg-gray-700">
                        <img src="/api/placeholder/400/300" alt={exhibition.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2">{exhibition.title}</h3>
                      <p className="text-purple-400 mb-4">{exhibition.date}</p>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Location:</span> {exhibition.location}</p>
                      <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md transition">
                        Event Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-2">About Shadow Arts</h2>
            <div className="md:flex gap-12 mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="h-80 bg-gray-800 rounded-lg overflow-hidden">
                  <img src="/api/placeholder/600/400" alt="Gallery space" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                <p className="text-gray-300 mb-4">
                  Founded in 2020, Shadow Arts has established itself as a premier destination for contemporary art that explores the boundaries between light and darkness, form and void, presence and absence.
                </p>
                <p className="text-gray-300 mb-4">
                  Our gallery represents both established and emerging artists who work across various media but share a fascination with shadows, negative space, and the interplay of contrasts.
                </p>
                <p className="text-gray-300">
                  We are committed to fostering dialogue between artists, collectors, and the public through thought-provoking exhibitions, artist talks, and educational programs.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-6">Our Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src="/api/placeholder/200/200" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-semibold">Alexandra Foster</h4>
                <p className="text-purple-400">Founder & Curator</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src="/api/placeholder/200/200" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-semibold">David Chen</h4>
                <p className="text-purple-400">Gallery Director</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src="/api/placeholder/200/200" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-semibold">Nadia Patel</h4>
                <p className="text-purple-400">Events Coordinator</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-2">Contact Us</h2>
            <div className="md:flex gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-300 mb-6">
                  We'd love to hear from you! Whether you're an artist interested in exhibiting, a collector looking for specific works, or simply a visitor with questions, please reach out.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="text-purple-400 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-300">123 Art District, Suite 456<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-purple-400 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">info@shadowarts.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-purple-400 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-300">(212) 555-7890</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Gallery Hours</h4>
                  <p className="text-gray-300">Tuesday - Saturday: 11am - 6pm<br />Sunday - Monday: Closed</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
                  <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows="5" 
                      className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="mr-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-700 rounded-full shadow-inner"></div>
                </div>
                <h2 className="text-xl font-bold tracking-wider">SHADOW ARTS</h2>
              </div>
              <p className="text-gray-400 mt-2 max-w-md">Exploring the interplay of light and darkness through contemporary art since 2020.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="text-gray-400 space-y-2">
                  <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Gallery</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Exhibitions</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="text-gray-400 space-y-2">
                  <li><a href="#" className="hover:text-purple-400 transition">For Artists</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">For Collectors</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Press Kit</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-800" />
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 Shadow Arts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShadowArts;
