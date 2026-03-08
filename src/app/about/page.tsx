"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

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

      {/* Customer Reviews Carousel */}
      <section className="reviews-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Words from the <span className="text-gradient">Bold</span></h2>
            <p className="text-muted max-w-2xl mx-auto mt-4">Discover what our patrons have to say about their experiences at DND Cafe.</p>
          </div>

          <div className="carousel-container relative max-w-4xl mx-auto">
            <Quote className="absolute top-0 left-0 text-[var(--primary)] opacity-20 w-24 h-24 -translate-y-1/2 -translate-x-1/4 sm:-translate-x-1/2" />
            
            <div className="overflow-hidden relative">
              <div 
                className="carousel-track flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="carousel-slide w-full flex-shrink-0 px-4 sm:px-12">
                    <div className="glass-card review-card flex flex-col items-center text-center p-8 sm:p-12">
                      <div className="flex gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="text-gold fill-current w-5 h-5" />
                        ))}
                      </div>
                      <p className="review-text text-lg sm:text-2xl font-serif italic leading-relaxed mb-8">
                        "{review.text}"
                      </p>
                      <div className="review-author">
                        <h4 className="font-bold text-white text-lg tracking-wide">{review.name}</h4>
                        <span className="text-sm text-[var(--primary)] uppercase tracking-widest">{review.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="carousel-nav flex justify-center gap-4 mt-8">
              <button onClick={prevReview} className="nav-btn" aria-label="Previous review">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2 items-center">
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
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          padding-top: 0;
          background-color: var(--background);
        }

        .about-hero {
          height: 65vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--background) 0%, rgba(18,18,18,0.5) 50%, rgba(18,18,18,0.8) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .about-title {
          font-size: clamp(3.5rem, 8vw, 5.5rem);
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
        }

        .about-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .journey-section {
          padding: 8rem 0;
        }

        .journey-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .journey-image-container {
          position: relative;
          height: 600px;
          width: 100%;
        }

        .image-accent-border {
          position: absolute;
          inset: -20px 20px 20px -20px;
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 1rem;
          z-index: -1;
        }

        /* Reviews Section Styles */
        .reviews-section {
          padding: 8rem 0 10rem;
          background: radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          position: relative;
          overflow: hidden;
        }

        .review-card {
          border: 1px solid rgba(212, 175, 55, 0.15);
          background: rgba(18, 18, 18, 0.6);
        }

        .review-text {
          color: rgba(255, 255, 255, 0.9);
        }

        .text-gold {
          color: var(--primary);
        }

        .nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: var(--primary);
          color: #121212;
          border-color: var(--primary);
          transform: scale(1.05);
        }

        .dot-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          padding: 0;
          margin: 0 4px;
        }

        .dot-indicator.active {
          width: 24px;
          border-radius: 10px;
          background: var(--primary);
        }

        @media (max-width: 1024px) {
          .journey-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .journey-image-container {
            height: 400px;
            order: -1;
          }
          .image-accent-border {
            inset: 10px -10px -10px 10px;
          }
        }
      `}</style>
    </div>
  );
}
