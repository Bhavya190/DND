"use client";
import './about.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star, Coffee, MapPin } from 'lucide-react';
import React from 'react';

export default function About() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    { id: 1, name: "Eleanor Vance", role: "Local Author", text: "DND Cafe is my sanctuary. The Espresso Manifesto gives me the clarity I need to write, and the atmosphere is wonderfully inspiring. It's rare to find a place that respects the craft of coffee as much as they do.", rating: 5 },
    { id: 2, name: "Marcus Thorne", role: "Architect", text: "The attention to detail here is astounding perfectly mirroring the aesthetic I strive for in my own work. Their Velvet Chaos Latte is a masterpiece of balance and flavor.", rating: 5 },
    { id: 3, name: "Sophia Lin", role: "Coffee Enthusiast", text: "I've tasted coffee all over the world, and DND Cafe holds its own against the best. The dark, moody ambiance perfectly complements their exceptional, ethically sourced roasts.", rating: 5 },
    { id: 4, name: "James Sterling", role: "Photographer", text: "The lighting here is just as curated as the coffee. It's the perfect place to edit my photos while enjoying the incredible Velvet Chaos Latte. Truly a hidden gem.", rating: 5 },
    { id: 5, name: "Olivia Chen", role: "Graphic Designer", text: "DND Cafe is where I go when I need to escape creative blocks. The artisanal pastries and The Midnight Brew are literal perfection. I love the premium feel of the place.", rating: 5 }
  ];

  const nextReview = () => { setCurrentReview((prev) => (prev + 1) % reviews.length); };
  const prevReview = () => { setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length); };

  useEffect(() => {
    const timer = setInterval(() => { nextReview(); }, 6000);
    return () => clearInterval(timer);
  }, []);

  return React.createElement("div", { className: "about-page" },
    React.createElement("section", { className: "about-hero" },
      React.createElement(Image, { src: "/images/about-hero.png", alt: "Barista crafting coffee", fill: true, style: { objectFit: 'cover' }, priority: true }),
      React.createElement("div", { className: "about-hero-overlay" },
        React.createElement("div", { className: "container text-center" },
          React.createElement("h1", { className: "about-title animate-fade-in" }, "Our ", React.createElement("span", { className: "text-gradient" }, "Story")),
          React.createElement("p", { className: "about-subtitle animate-fade-in" }, "Crafting liquid chapters since 2024.")
        )
      )
    ),
    React.createElement("section", { className: "journey-section" },
      React.createElement("div", { className: "container journey-grid" },
        React.createElement("div", { className: "journey-content" },
          React.createElement("h2", { className: "section-title" }, "A Pursuit of Perfection"),
          React.createElement("p", { className: "text-muted leading-relaxed mb-6" }, "DND Cafe was born out of a desire for a space that offered more than just caffeine. We envisioned a sanctuary\u2014a place where the noise of the outside world fades, allowing the bold and the creative to fuel their passions."),
          React.createElement("p", { className: "text-muted leading-relaxed mb-6" }, "Our journey started by meticulously sourcing the finest beans globally, prioritizing ethical relationships with farmers. Every roast is a careful calibration of time and temperature, designed to extract the profound depths of flavor inherent in the bean."),
          React.createElement("p", { className: "text-muted leading-relaxed" }, "We don't just serve drinks; we curate experiences. Our aesthetic is dark, moody, and unapologetically premium, reflecting the depth and complexity of the coffee we pour.")
        ),
        React.createElement("div", { className: "journey-image-container" },
          React.createElement(Image, { src: "/images/hero.png", alt: "DND Cafe Interior", fill: true, style: { objectFit: 'cover' }, className: "rounded-badge rounded-2xl" }),
          React.createElement("div", { className: "image-accent-border" })
        )
      )
    ),
    React.createElement("section", { className: "philosophy-section" },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "section-title" }, "Our ", React.createElement("span", { className: "text-gradient" }, "Philosophy")),
          React.createElement("p", { className: "text-muted max-w-2xl mx-auto mt-4" }, "The core pillars that elevate every cup we serve.")
        ),
        React.createElement("div", { className: "philosophy-grid" },
          React.createElement("div", { className: "philosophy-card" }, React.createElement("div", { className: "icon-wrapper" }, React.createElement(Coffee, { size: 32, className: "text-gold" })), React.createElement("h3", null, "Ethical Sourcing"), React.createElement("p", null, "We partner directly with small-scale farmers, ensuring fair wages and sustainable agricultural practices that respect the earth.")),
          React.createElement("div", { className: "philosophy-card" }, React.createElement("div", { className: "icon-wrapper" }, React.createElement(Star, { size: 32, className: "text-gold" })), React.createElement("h3", null, "Artisanal Roasting"), React.createElement("p", null, "Every small batch takes a unique journey in our roasters, meticulously monitored to bring out the specific symphony of flavors in the bean.")),
          React.createElement("div", { className: "philosophy-card" }, React.createElement("div", { className: "icon-wrapper" }, React.createElement(MapPin, { size: 32, className: "text-gold" })), React.createElement("h3", null, "Curated Ambiance"), React.createElement("p", null, "We designed our space to be the perfect backdrop for your thoughts, conversations, and moments of quiet brilliance."))
        )
      )
    ),
    React.createElement("section", { className: "artisans-section" },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "text-center mb-16" },
          React.createElement("h2", { className: "section-title" }, "Meet the ", React.createElement("span", { className: "text-gradient" }, "Artisans")),
          React.createElement("p", { className: "text-muted max-w-2xl mx-auto mt-4" }, "The passionate individuals behind your perfect brew.")
        ),
        React.createElement("div", { className: "artisans-grid" },
          React.createElement("div", { className: "artisan-card" },
            React.createElement("div", { className: "artisan-visual" }, React.createElement(Image, { src: "/images/hero.png", alt: "Head Roaster", fill: true, style: { objectFit: 'cover' } })),
            React.createElement("div", { className: "artisan-info" }, React.createElement("h3", null, "Julian Hayes"), React.createElement("span", { className: "artisan-role" }, "Master Roaster"), React.createElement("p", null, "With over a decade of experience across three continents, Julian treats every roast profile as a scientific art form."))
          ),
          React.createElement("div", { className: "artisan-card" },
            React.createElement("div", { className: "artisan-visual" }, React.createElement(Image, { src: "/images/pastry.png", alt: "Executive Pastry Chef", fill: true, style: { objectFit: 'cover' } })),
            React.createElement("div", { className: "artisan-info" }, React.createElement("h3", null, "Elara Vance"), React.createElement("span", { className: "artisan-role" }, "Executive Pastry Chef"), React.createElement("p", null, "Elara pairs the bold notes of our coffee with delicate, sophisticated pastries that linger elegantly on the palate."))
          )
        )
      )
    ),
    React.createElement("section", { className: "reviews-section" },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "reviews-header text-center" },
          React.createElement("h2", { className: "section-title" }, "Words from the ", React.createElement("span", { className: "text-gradient" }, "Bold")),
          React.createElement("p", { className: "reviews-subtitle text-muted" }, "Discover what our patrons have to say about their experiences at DND Cafe.")
        ),
        React.createElement("div", { className: "carousel-container" },
          React.createElement(Quote, { className: "quote-icon" }),
          React.createElement("div", { className: "carousel-wrapper" },
            React.createElement("div", { className: "carousel-track", style: { transform: `translateX(-${currentReview * 100}%)` } },
              reviews.map((review) => 
                React.createElement("div", { key: review.id, className: "carousel-slide" },
                  React.createElement("div", { className: "glass-card review-card" },
                    React.createElement("div", { className: "rating-stars" }, [...Array(review.rating)].map((_, i) => React.createElement(Star, { key: i, className: "star-icon text-gold" }))),
                    React.createElement("p", { className: "review-text" }, `"${review.text}"`),
                    React.createElement("div", { className: "review-author" }, React.createElement("h4", null, review.name), React.createElement("span", null, review.role))
                  )
                )
              )
            )
          ),
          React.createElement("div", { className: "carousel-nav" },
            React.createElement("button", { onClick: prevReview, className: "nav-btn", "aria-label": "Previous review" }, React.createElement(ChevronLeft, { size: 24 })),
            React.createElement("div", { className: "carousel-dots" },
              reviews.map((_, idx) => 
                React.createElement("button", { key: idx, onClick: () => setCurrentReview(idx), className: `dot-indicator ${currentReview === idx ? 'active' : ''}`, "aria-label": `Go to review ${idx + 1}` })
              )
            ),
            React.createElement("button", { onClick: nextReview, className: "nav-btn", "aria-label": "Next review" }, React.createElement(ChevronRight, { size: 24 }))
          )
        )
      )
    )
  );
}
