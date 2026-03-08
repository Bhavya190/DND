"use client";
import './home.css';
import { useState } from 'react';
import Image from 'next/image';
import { Coffee, Star, MapPin, Clock, ShoppingBag, ChevronRight, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Breads');
  const { addToCart } = useCart();

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

  const handleAddToCart = (product: any) => {
    // Extract numeric price from strings like "Rs. 250"
    const numericPrice = parseInt(product.price.replace(/\D/g, ''), 10);
    addToCart({
      id: product.id,
      name: product.name,
      price: numericPrice,
      quantity: 1,
      image: product.image
    });
    // Create simple toast-like feedback
    const btn = document.getElementById(`add-btn-${product.id}`);
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = 'ADDED!';
      btn.style.backgroundColor = 'var(--primary)';
      btn.style.color = '#121212';
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = '';
        btn.style.color = '';
      }, 1000);
    }
  };

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
                    <button 
                      id={`add-btn-${product.id}`}
                      className="btn-add"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD
                    </button>
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
    </div>
  );
}
