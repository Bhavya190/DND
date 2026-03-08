"use client";
import './about.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star, Coffee, MapPin } from 'lucide-react';

export default function About() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Eleanor Vance",
      role: "Local Author",
      text: "DND Cafe is my sanctuary. The Espresso Manifesto gives me the clarity I need to write, and the atmosphere is wonderfully inspiring. It's rare to find a place that respects the craft of coffee as much as they do.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Thorne",
      role: "Architect",
      text: "The attention to detail here is astounding perfectly mirroring the aesthetic I strive for in my own work. Their Velvet Chaos Latte is a masterpiece of balance and flavor.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophia Lin",
      role: "Coffee Enthusiast",
      text: "I've tasted coffee all over the world, and DND Cafe holds its own against the best. The dark, moody ambiance perfectly complements their exceptional, ethically sourced roasts.",
      rating: 5
    },
    {
      id: 4,
      name: "James Sterling",
      role: "Photographer",
      text: "The lighting here is just as curated as the coffee. It's the perfect place to edit my photos while enjoying the incredible Velvet Chaos Latte. Truly a hidden gem.",
      rating: 5
    },
    {
      id: 5,
      name: "Olivia Chen",
      role: "Graphic Designer",
      text: "DND Cafe is where I go when I need to escape creative blocks. The artisanal pastries and The Midnight Brew are literal perfection. I love the premium feel of the place.",
      rating: 5
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <Image src="/images/about-hero.png" alt="Barista crafting coffee" fill style={{objectFit: 'cover'}} priority />
        <div className="about-hero-overlay">
          <div className="container text-center">
            <h1 className="about-title animate-fade-in">Our <span className="text-gradient">Story</span></h1>
            <p className="about-subtitle animate-fade-in">Crafting liquid chapters since 2024.</p>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="journey-section">
        <div className="container journey-grid">
          <div className="journey-content">
            <h2 className="section-title">A Pursuit of Perfection</h2>
            <p className="text-muted leading-relaxed mb-6">
              DND Cafe was born out of a desire for a space that offered more than just caffeine. We envisioned a sanctuary—a place where the noise of the outside world fades, allowing the bold and the creative to fuel their passions.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Our journey started by meticulously sourcing the finest beans globally, prioritizing ethical relationships with farmers. Every roast is a careful calibration of time and temperature, designed to extract the profound depths of flavor inherent in the bean.
            </p>
            <p className="text-muted leading-relaxed">
              We don't just serve drinks; we curate experiences. Our aesthetic is dark, moody, and unapologetically premium, reflecting the depth and complexity of the coffee we pour.
            </p>
          </div>
          <div className="journey-image-container">
            {/* Reusing the interior hero image as a fallback for the story section */}
            <Image src="/images/hero.png" alt="DND Cafe Interior" fill style={{objectFit: 'cover'}} className="rounded-badge rounded-2xl" />
            <div className="image-accent-border"></div>
          </div>
        </div>
      </section>

      {/* The DND Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our <span className="text-gradient">Philosophy</span></h2>
            <p className="text-muted max-w-2xl mx-auto mt-4">The core pillars that elevate every cup we serve.</p>
          </div>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="icon-wrapper"><Coffee size={32} className="text-gold" /></div>
              <h3>Ethical Sourcing</h3>
              <p>We partner directly with small-scale farmers, ensuring fair wages and sustainable agricultural practices that respect the earth.</p>
            </div>
            <div className="philosophy-card">
              <div className="icon-wrapper"><Star size={32} className="text-gold" /></div>
              <h3>Artisanal Roasting</h3>
              <p>Every small batch takes a unique journey in our roasters, meticulously monitored to bring out the specific symphony of flavors in the bean.</p>
            </div>
            <div className="philosophy-card">
              <div className="icon-wrapper"><MapPin size={32} className="text-gold" /></div>
              <h3>Curated Ambiance</h3>
              <p>We designed our space to be the perfect backdrop for your thoughts, conversations, and moments of quiet brilliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Artisans */}
      <section className="artisans-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet the <span className="text-gradient">Artisans</span></h2>
            <p className="text-muted max-w-2xl mx-auto mt-4">The passionate individuals behind your perfect brew.</p>
          </div>
          <div className="artisans-grid">
            <div className="artisan-card">
              <div className="artisan-visual">
                <Image src="/images/hero.png" alt="Head Roaster" fill style={{objectFit: 'cover'}} />
              </div>
              <div className="artisan-info">
                <h3>Julian Hayes</h3>
                <span className="artisan-role">Master Roaster</span>
                <p>With over a decade of experience across three continents, Julian treats every roast profile as a scientific art form.</p>
              </div>
            </div>
            <div className="artisan-card">
              <div className="artisan-visual">
                 <Image src="/images/pastry.png" alt="Executive Pastry Chef" fill style={{objectFit: 'cover'}} />
              </div>
              <div className="artisan-info">
                <h3>Elara Vance</h3>
                <span className="artisan-role">Executive Pastry Chef</span>
                <p>Elara pairs the bold notes of our coffee with delicate, sophisticated pastries that linger elegantly on the palate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-header text-center">
            <h2 className="section-title">Words from the <span className="text-gradient">Bold</span></h2>
            <p className="reviews-subtitle text-muted">Discover what our patrons have to say about their experiences at DND Cafe.</p>
          </div>

          <div className="carousel-container">
            <Quote className="quote-icon" />
            
            <div className="carousel-wrapper">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="carousel-slide">
                    <div className="glass-card review-card">
                      <div className="rating-stars">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="star-icon text-gold" />
                        ))}
                      </div>
                      <p className="review-text">
                        "{review.text}"
                      </p>
                      <div className="review-author">
                        <h4>{review.name}</h4>
                        <span>{review.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="carousel-nav">
              <button onClick={prevReview} className="nav-btn" aria-label="Previous review">
                <ChevronLeft size={24} />
              </button>
              <div className="carousel-dots">
                {reviews.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentReview(idx)}
                    className={`dot-indicator ${currentReview === idx ? 'active' : ''}`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
              <button onClick={nextReview} className="nav-btn" aria-label="Next review">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
