"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Coffee, Star, MapPin, Clock, ShoppingBag, ChevronRight, Info } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Breads');

  const products = [
    { id: 1, name: 'Whole Grain Spelt', price: 'Rs. 450', weight: '950g', category: 'Breads', image: '/images/fav-whole-grain.png', isNew: true },
    { id: 2, name: 'Milo Multigrain', price: 'Rs. 380', weight: '800g', category: 'Breads', image: '/images/fav-multigrain.png', isHot: true },
    { id: 3, name: 'Four Seed Whole Wheat', price: 'Rs. 420', weight: '423g', category: 'Breads', image: '/images/fav-whole-grain.png' },
    { id: 4, name: 'Bagel Multigrain', price: 'Rs. 150', weight: '100g', category: 'Specialty', image: '/images/fav-bagel.png' },
    { id: 5, name: 'French Baguette', price: 'Rs. 220', weight: '300g', category: 'Breads', image: '/images/fav-baguette.png' },
    { id: 6, name: 'Strawberry Delight', price: 'Rs. 280', weight: '150g', category: 'Pastry', image: '/images/fav-strawberry.png' },
    { id: 7, name: 'Raspberry Dream', price: 'Rs. 310', weight: '150g', category: 'Pastry', image: '/images/fav-raspberry.png' },
    { id: 8, name: 'Classic Sourdough', price: 'Rs. 480', weight: '900g', category: 'Breads', image: '/images/fav-whole-grain.png' },
  ];

  const categories = ['Breads', 'Pastry', 'Specialty'];
  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Discover the Art of <span className="text-gradient">Relaxation</span></h1>
          <p className="hero-subtitle">Premium artisanal coffee and exquisite pastries crafted for the connoisseur.</p>
          <div className="hero-btns">
            <button className="btn-primary">View Menu</button>
            <button className="btn-secondary">Our Story</button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* What Fuels the Bold Section (Replaces Featured Menu) */}
      <section id="menu" className="bold-section">
        <div className="container">
          <div className="bold-header">
            <h2 className="bold-title">What Fuels the Bold</h2>
            <p className="bold-subtitle">Not Just Drinks — These Are Liquid Chapters</p>
          </div>

          <div className="bold-grid">
            <div className="bold-card-container">
              <div className="cup-overlay">
                <Image src="/images/espresso-top.png" alt="The Espresso Manifesto" fill style={{objectFit: 'cover'}} className="cup-img" />
              </div>
              <div className="bold-card">
                <div className="card-splash">
                  <Image src="/images/coffee-splash.png" alt="Splash" fill style={{objectFit: 'cover', opacity: 0.4}} />
                </div>
                <div className="bold-card-content">
                  <h3>The Espresso Manifesto</h3>
                  <p>A double shot of courage for your blank page moments. Intense. Pure. Unapologetic.</p>
                </div>
              </div>
            </div>

            <div className="bold-card-container">
              <div className="cup-overlay">
                <Image src="/images/latte-top.png" alt="Velvet Chaos Latte" fill style={{objectFit: 'cover'}} className="cup-img" />
              </div>
              <div className="bold-card">
                <div className="card-splash">
                  <Image src="/images/coffee-splash.png" alt="Splash" fill style={{objectFit: 'cover', opacity: 0.4}} />
                </div>
                <div className="bold-card-content">
                  <h3>Velvet Chaos Latte</h3>
                  <p>Creamy espresso layered with spiced oat milk, cinnamon dust, and a hint of rebellion.</p>
                </div>
              </div>
            </div>

            <div className="bold-card-container">
              <div className="cup-overlay">
                <Image src="/images/latte-top.png" alt="The Midnight Brew" fill style={{objectFit: 'cover'}} className="cup-img" />
              </div>
              <div className="bold-card">
                <div className="card-splash">
                  <Image src="/images/coffee-splash.png" alt="Splash" fill style={{objectFit: 'cover', opacity: 0.4}} />
                </div>
                <div className="bold-card-content">
                  <h3>The Midnight Brew</h3>
                  <p>A bold, dark roast with notes of smoke and mystery for the late-night thinkers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Favourites Section */}
      <section className="favourites-section">
        <div className="container">
          <div className="favourites-header">
            <div className="category-filter">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <h2 className="favourites-title">CUSTOMER FAVOURITES</h2>
            <div className="header-info">
              <div className="info-icon"><Info size={16} /></div>
              <span>All orders for Tuesday pick-up must be placed by 8:30pm Sunday evening.</span>
            </div>
          </div>

          <div className="favourites-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="fav-card">
                <div className="fav-card-visual">
                  {product.isNew && <span className="badge new">New</span>}
                  {product.isHot && <span className="badge hot">Hot</span>}
                  <div className="fav-image-wrapper">
                    <Image src={product.image} alt={product.name} fill style={{objectFit: 'contain'}} />
                  </div>
                  <div className="fav-details-overlay">
                    <div className="info-trigger"><Info size={18} /></div>
                  </div>
                </div>
                <div className="fav-card-content">
                  <div className="fav-meta">
                    <span className="fav-price">{product.price}</span>
                    <span className="fav-weight">{product.weight}</span>
                  </div>
                  <div className="fav-footer">
                    <h3 className="fav-name">{product.name}</h3>
                    <button className="btn-add">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container about-grid">
          <div className="about-image-container">
             <Image src="/images/hero.png" alt="Cafe Interior" fill style={{objectFit: 'cover'}} className="rounded-2xl" />
          </div>
          <div className="about-content">
            <h2 className="section-title">Beyond Just Coffee</h2>
            <div className="about-text">
              <p>
                At DND Cafe, we believe that coffee is more than a beverage—it's an experience. Founded in 2024, our mission is to provide a sanctuary for those who appreciate the finer things in life.
              </p>
              <p>
                Every bean is ethically sourced and roasted to perfection, ensuring that every cup tells a story of craftsmanship and passion.
              </p>
            </div>
            <div className="stats-container">
              <div className="stat-item"><Star className="text-gold" size={20} /> <span>Premium Quality</span></div>
              <div className="stat-item"><Coffee className="text-gold" size={20} /> <span>Expert Baristas</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="features" className="dnd-is-section">
        <div className="container">
          <h2 className="section-title text-center mb-12">DND CAFE <span className="text-gradient">IS</span></h2>
          
          <div className="features-container">
            {/* Left Column */}
            <div className="features-col">
              <div className="feature-item left">
                <span className="feature-num">01</span>
                <div className="feature-text">
                  <h3>Premium Bean Quality</h3>
                  <p>Our journey to the perfect cup begins with selecting only the finest beans. We pay attention to every detail so that in every cup you find uncompromising quality and pleasure.</p>
                </div>
              </div>
              <div className="feature-item left">
                <span className="feature-num">02</span>
                <div className="feature-text">
                  <h3>Atmosphere and Comfort</h3>
                  <p>Our cozy interior is filled with an atmosphere of warmth. Here, surrounded by the aroma of freshly roasted beans, you can relax, enjoy your coffee, and indulge in pleasant conversation.</p>
                </div>
              </div>
            </div>

            {/* Middle Column - Cup */}
            <div className="features-cup">
              <div className="cup-wrapper">
                <Image src="/images/coffee-cup-feature.png" alt="DND Coffee Cup" width={400} height={600} style={{objectFit: 'contain'}} />
              </div>
              <Image src="/images/coffee-beans-decorative.png" alt="Scattered Coffee Beans" width={150} height={150} className="bean bean-1" />
              <Image src="/images/coffee-bean-single.png" alt="Single Roasted Coffee Bean" width={120} height={120} className="bean bean-2" />
            </div>

            {/* Right Column */}
            <div className="features-col">
              <div className="feature-item right">
                <span className="feature-num">03</span>
                <div className="feature-text">
                  <h3>Individual Approach</h3>
                  <p>We prepare coffee that reflects your preferences, creating unique drinks specifically for you. It's not just coffee, it's a personalized experience to make your day special.</p>
                </div>
              </div>
              <div className="feature-item right">
                <span className="feature-num">04</span>
                <div className="feature-text">
                  <h3>Professional Baristas</h3>
                  <p>Our baristas have extensive experience in the world of coffee and are ready to demonstrate all their skills in preparing your perfect cup.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary" style={{padding: '1rem 3rem'}}>Order Now</button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="glass-card contact-card">
             <div className="contact-info">
                <h2 className="text-gradient">Visit Us</h2>
                <p className="mb-6">Experience the tranquility first hand.</p>
                
                <div className="info-list">
                  <div className="info-item">
                    <MapPin size={20} className="text-gold" />
                    <span>123 Elite Avenue, Luxury District, NY</span>
                  </div>
                  <div className="info-item">
                    <Clock size={20} className="text-gold" />
                    <span>Open Daily: 7am - 10pm</span>
                  </div>
                </div>
             </div>
             <div className="contact-action">
                <button className="btn-primary">Get Directions</button>
             </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 10%;
          background: url('/images/hero.png') center/cover no-repeat;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(18, 18, 18, 0.9), transparent);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
        }
        .hero-title {
          font-size: clamp(3rem, 8vw, 4.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }
        .btn-secondary {
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
        }

        .bold-section {
          padding: 8rem 0;
          background: #fdfaf5;
          position: relative;
          overflow: hidden;
        }
        .bold-header {
          text-align: center;
          margin-bottom: 8rem;
        }
        .bold-title {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          margin-bottom: 0.5rem;
          color: #4a3427;
        }
        .bold-subtitle {
          color: #8c7365;
          font-style: italic;
          font-size: 1.1rem;
        }

        .bold-grid {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 3rem;
          padding: 0 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .bold-card-container {
          position: relative;
          flex: 1;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 50px;
        }

        .cup-overlay {
          position: absolute;
          top: -30px;
          width: 160px;
          height: 160px;
          z-index: 20;
          border-radius: 50%;
          overflow: hidden;
          background: #fdfaf5; /* Clean background for the cutout area */
          border: 6px solid #fdfaf5;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .cup-img {
          position: relative !important;
        }

        .bold-card-container:hover .cup-overlay {
          transform: translateY(-8px) scale(1.05);
        }

        .bold-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1.2; /* Smaller cards */
          background: linear-gradient(180deg, #9e6d4c 0%, #4a3427 100%);
          border-radius: 35px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem 1.5rem;
          box-shadow: 0 25px 50px rgba(74, 52, 39, 0.25);
        }

        /* Circular cutout at the top */
        .bold-card::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: #fdfaf5;
          border-radius: 50%;
          z-index: 5;
        }

        .card-splash {
          position: absolute;
          inset: 0;
          z-index: 2;
          mix-blend-mode: screen;
          opacity: 0.5;
        }

        .bold-card-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0.5rem;
        }

        .bold-card-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.6rem;
          color: #fff;
        }

        .bold-card-content p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.85);
        }

        @media (max-width: 1024px) {
          .bold-grid {
            flex-wrap: wrap;
            gap: 6rem;
          }
          .bold-card-container {
            flex: none;
            width: 300px;
          }
        }

        .favourites-section {
          padding: 8rem 0;
          background-color: #1a1a1a;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.03) 0%, transparent 40%),
            url("https://www.transparenttextures.com/patterns/black-linen.png");
          color: #fff;
        }

        .favourites-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 2rem;
        }

        .category-filter {
          display: flex;
          gap: 1.5rem;
        }

        .filter-btn {
          font-family: var(--font-heading);
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 2px;
          padding-bottom: 0.5rem;
          position: relative;
          transition: var(--transition);
        }

        .filter-btn.active {
          color: var(--primary);
        }

        .filter-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--primary);
        }

        .favourites-title {
          font-size: 3rem;
          letter-spacing: 5px;
          color: var(--primary);
          text-align: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          max-width: 300px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
        }

        .info-icon {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .favourites-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 3rem;
        }

        .fav-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition);
        }

        .fav-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(212, 175, 55, 0.2);
        }

        .fav-card-visual {
          height: 300px;
          position: relative;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .fav-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.5s ease;
        }

        .fav-card:hover .fav-image-wrapper {
          transform: scale(1.1);
        }

        .badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          z-index: 5;
        }

        .badge.new { background: var(--primary); color: #1a1a1a; }
        .badge.hot { background: #e74c3c; color: #fff; }

        .fav-details-overlay {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
        }

        .info-trigger {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .info-trigger:hover {
          background: var(--primary);
          color: #1a1a1a;
        }

        .fav-card-content {
          padding: 2rem;
        }

        .fav-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .fav-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
        }

        .fav-weight {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .fav-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .fav-name {
          font-size: 1.5rem;
          line-height: 1.2;
          max-width: 180px;
        }

        .btn-add {
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          transition: var(--transition);
        }

        .btn-add:hover {
          background: var(--primary);
          color: #1a1a1a;
        }

        @media (max-width: 1024px) {
          .favourites-header {
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            text-align: center;
          }
          .favourites-title {
            position: static;
            transform: none;
          }
          .header-info {
            max-width: none;
          }
        }

        .about-section { background: rgba(255, 255, 255, 0.02); }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .about-image-container {
          height: 500px;
          position: relative;
        }
        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: var(--text-muted);
        }
        .stats-container {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-weight: 600;
        }
        .text-gold { color: var(--primary); }

        .dnd-is-section {
          padding: 8rem 0;
          background: radial-gradient(circle at center, rgba(139, 69, 19, 0.1) 0%, transparent 70%);
          position: relative;
          overflow: hidden;
        }
        .features-container {
          display: grid;
          grid-template-columns: 1.5fr 2fr 1.5fr;
          gap: 2rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .features-col {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }
        .feature-item {
          position: relative;
          padding: 1.5rem;
        }
        .feature-num {
          position: absolute;
          top: -2rem;
          left: 0;
          font-size: 8rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.03);
          line-height: 1;
          z-index: -1;
          font-family: var(--font-heading);
        }
        .feature-item.right .feature-num {
          left: auto;
          right: 0;
        }
        .feature-text h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .feature-text p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        .features-cup {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cup-wrapper {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
          transition: transform 0.5s ease;
        }
        .cup-wrapper:hover {
          transform: translateY(-10px) rotate(2deg);
        }
        .bean {
          position: absolute;
          z-index: 1;
          filter: blur(1px);
          opacity: 0.6;
        }
        .bean-1 { top: 10%; left: -20%; transform: rotate(45deg); }
        .bean-2 { bottom: 15%; right: -15%; transform: rotate(-30deg); }

        .contact-card {
          padding: 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-muted);
        }

        @media (max-width: 968px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .about-image-container { height: 350px; }
          
          .features-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .features-col {
            gap: 4rem;
          }
          .features-cup {
            order: -1;
            margin-bottom: 2rem;
          }
          .feature-item {
            text-align: center;
          }
          .feature-item.right .feature-num {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
          }
          .feature-num {
            left: 50%;
            transform: translateX(-50%);
            font-size: 6rem;
          }

          .contact-card { flex-direction: column; text-align: center; gap: 3rem; padding: 3rem 2rem; }
          .info-item { justify-content: center; }
        }
      `}</style>
    </div>
  );
}
