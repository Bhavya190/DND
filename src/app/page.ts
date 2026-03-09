"use client";
import './home.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Star, MapPin, Clock, ShoppingBag, ChevronRight, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import React from 'react';

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
    { id: 9, name: 'Rustic Olive Bread', price: 'Rs. 350', weight: '600g', category: 'Breads', image: '/images/fav-multigrain.png' },
  ];

  const categories = ['Breads', 'Pastry', 'Specialty'];
  const filteredProducts = products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: { id: number; name: string; price: string; image: string }) => {
    const numericPrice = parseInt(product.price.replace(/\D/g, ''), 10);
    addToCart({
      id: product.id,
      name: product.name,
      price: numericPrice,
      quantity: 1,
      image: product.image
    });
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

  return React.createElement("div", { className: "home-container" },
    React.createElement("section", { className: "hero" },
      React.createElement("div", { className: "hero-content animate-fade-in" },
        React.createElement("h1", { className: "hero-title" },
          "Discover the Art of ",
          React.createElement("span", { className: "text-gradient" }, "Relaxation")
        ),
        React.createElement("p", { className: "hero-subtitle" }, "Premium artisanal coffee and exquisite pastries crafted for the connoisseur."),
        React.createElement("div", { className: "hero-btns" },
          React.createElement(Link, { href: "/menu", className: "btn-primary" }, "View Menu"),
          React.createElement(Link, { href: "/about", className: "btn-secondary" }, "Our Story")
        )
      ),
      React.createElement("div", { className: "hero-overlay" })
    ),
    React.createElement("section", { id: "menu", className: "bold-section" },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "bold-header" },
          React.createElement("h2", { className: "bold-title" }, "What Fuels the Bold"),
          React.createElement("p", { className: "bold-subtitle" }, "Not Just Drinks \u2014 These Are Liquid Chapters")
        ),
        React.createElement("div", { className: "bold-grid" },
          React.createElement("div", { className: "bold-card-container" },
            React.createElement("div", { className: "cup-overlay" },
              React.createElement(Image, { src: "/images/espresso-top.png", alt: "The Espresso Manifesto", fill: true, style: { objectFit: 'cover' }, className: "cup-img" })
            ),
            React.createElement("div", { className: "bold-card" },
              React.createElement("div", { className: "card-splash" },
                React.createElement(Image, { src: "/images/coffee-splash.png", alt: "Splash", fill: true, style: { objectFit: 'cover', opacity: 0.4 } })
              ),
              React.createElement("div", { className: "bold-card-content" },
                React.createElement("h3", null, "The Espresso Manifesto"),
                React.createElement("p", null, "A double shot of courage for your blank page moments. Intense. Pure. Unapologetic.")
              )
            )
          ),
          React.createElement("div", { className: "bold-card-container" },
            React.createElement("div", { className: "cup-overlay" },
              React.createElement(Image, { src: "/images/latte-top.png", alt: "Velvet Chaos Latte", fill: true, style: { objectFit: 'cover' }, className: "cup-img" })
            ),
            React.createElement("div", { className: "bold-card" },
              React.createElement("div", { className: "card-splash" },
                React.createElement(Image, { src: "/images/coffee-splash.png", alt: "Splash", fill: true, style: { objectFit: 'cover', opacity: 0.4 } })
              ),
              React.createElement("div", { className: "bold-card-content" },
                React.createElement("h3", null, "Velvet Chaos Latte"),
                React.createElement("p", null, "Creamy espresso layered with spiced oat milk, cinnamon dust, and a hint of rebellion.")
              )
            )
          ),
          React.createElement("div", { className: "bold-card-container" },
            React.createElement("div", { className: "cup-overlay" },
              React.createElement(Image, { src: "/images/latte-top.png", alt: "The Midnight Brew", fill: true, style: { objectFit: 'cover' }, className: "cup-img" })
            ),
            React.createElement("div", { className: "bold-card" },
              React.createElement("div", { className: "card-splash" },
                React.createElement(Image, { src: "/images/coffee-splash.png", alt: "Splash", fill: true, style: { objectFit: 'cover', opacity: 0.4 } })
              ),
              React.createElement("div", { className: "bold-card-content" },
                React.createElement("h3", null, "The Midnight Brew"),
                React.createElement("p", null, "A bold, dark roast with notes of smoke and mystery for the late-night thinkers.")
              )
            )
          )
        )
      )
    ),
    React.createElement("section", { className: "favourites-section" },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "favourites-header" },
          React.createElement("div", { className: "category-filter" },
             categories.map(cat => 
               React.createElement("button", {
                 key: cat,
                 className: `filter-btn ${activeCategory === cat ? 'active' : ''}`,
                 onClick: () => setActiveCategory(cat)
               }, cat)
             )
          ),
          React.createElement("h2", { className: "favourites-title" }, "CUSTOMER FAVOURITES"),
          React.createElement("div", { className: "header-info" },
            React.createElement("div", { className: "info-icon" }, React.createElement(Info, { size: 16 })),
            React.createElement("span", null, "All orders for Tuesday pick-up must be placed by 8:30pm Sunday evening.")
          )
        ),
        React.createElement("div", { className: "favourites-grid" },
          filteredProducts.map(product => 
            React.createElement("div", { key: product.id, className: "fav-card" },
              React.createElement("div", { className: "fav-card-visual" },
                product.isNew && React.createElement("span", { className: "badge new" }, "New"),
                product.isHot && React.createElement("span", { className: "badge hot" }, "Hot"),
                React.createElement("div", { className: "fav-image-wrapper" },
                  React.createElement(Image, { src: product.image, alt: product.name, fill: true, style: { objectFit: 'contain' } })
                ),
                React.createElement("div", { className: "fav-details-overlay" },
                  React.createElement("div", { className: "info-trigger" }, React.createElement(Info, { size: 18 }))
                )
              ),
              React.createElement("div", { className: "fav-card-content" },
                React.createElement("div", { className: "fav-meta" },
                  React.createElement("span", { className: "fav-price" }, product.price),
                  React.createElement("span", { className: "fav-weight" }, product.weight)
                ),
                React.createElement("div", { className: "fav-footer" },
                  React.createElement("h3", { className: "fav-name" }, product.name),
                  React.createElement("button", {
                    id: `add-btn-${product.id}`,
                    className: "btn-add",
                    onClick: () => handleAddToCart(product)
                  }, "ADD")
                )
              )
            )
          )
        )
      )
    ),
    React.createElement("section", { id: "about", className: "about-section" },
      React.createElement("div", { className: "container about-grid" },
        React.createElement("div", { className: "about-image-container" },
          React.createElement(Image, { src: "/images/hero.png", alt: "Cafe Interior", fill: true, style: { objectFit: 'cover' }, className: "rounded-2xl" })
        ),
        React.createElement("div", { className: "about-content" },
          React.createElement("h2", { className: "section-title" }, "Beyond Just Coffee"),
          React.createElement("div", { className: "about-text" },
            React.createElement("p", null, "At DND Cafe, we believe that coffee is more than a beverage\u2014it's an experience. Founded in 2024, our mission is to provide a sanctuary for those who appreciate the finer things in life."),
            React.createElement("p", null, "Every bean is ethically sourced and roasted to perfection, ensuring that every cup tells a story of craftsmanship and passion.")
          ),
          React.createElement("div", { className: "stats-container" },
            React.createElement("div", { className: "stat-item" }, React.createElement(Star, { className: "text-gold", size: 20 }), React.createElement("span", null, "Premium Quality")),
            React.createElement("div", { className: "stat-item" }, React.createElement(Coffee, { className: "text-gold", size: 20 }), React.createElement("span", null, "Expert Baristas"))
          )
        )
      )
    ),
    React.createElement("section", { id: "features", className: "dnd-is-section" },
      React.createElement("div", { className: "container" },
        React.createElement("h2", { className: "section-title text-center mb-12" }, "DND CAFE ", React.createElement("span", { className: "text-gradient" }, "IS")),
        React.createElement("div", { className: "features-container" },
          React.createElement("div", { className: "features-col" },
            React.createElement("div", { className: "feature-item left" },
              React.createElement("span", { className: "feature-num" }, "01"),
              React.createElement("div", { className: "feature-text" },
                React.createElement("h3", null, "Premium Bean Quality"),
                React.createElement("p", null, "Our journey to the perfect cup begins with selecting only the finest beans. We pay attention to every detail so that in every cup you find uncompromising quality and pleasure.")
              )
            ),
            React.createElement("div", { className: "feature-item left" },
              React.createElement("span", { className: "feature-num" }, "02"),
              React.createElement("div", { className: "feature-text" },
                React.createElement("h3", null, "Atmosphere and Comfort"),
                React.createElement("p", null, "Our cozy interior is filled with an atmosphere of warmth. Here, surrounded by the aroma of freshly roasted beans, you can relax, enjoy your coffee, and indulge in pleasant conversation.")
              )
            )
          ),
          React.createElement("div", { className: "features-cup" },
            React.createElement("div", { className: "cup-wrapper" },
              React.createElement(Image, { src: "/images/coffee-cup-feature.png", alt: "DND Coffee Cup", width: 400, height: 600, style: { objectFit: 'contain' } })
            ),
            React.createElement(Image, { src: "/images/coffee-beans-decorative.png", alt: "Scattered Coffee Beans", width: 150, height: 150, className: "bean bean-1" }),
            React.createElement(Image, { src: "/images/coffee-bean-single.png", alt: "Single Roasted Coffee Bean", width: 120, height: 120, className: "bean bean-2" })
          ),
          React.createElement("div", { className: "features-col" },
            React.createElement("div", { className: "feature-item right" },
              React.createElement("span", { className: "feature-num" }, "03"),
              React.createElement("div", { className: "feature-text" },
                React.createElement("h3", null, "Individual Approach"),
                React.createElement("p", null, "We prepare coffee that reflects your preferences, creating unique drinks specifically for you. It's not just coffee, it's a personalized experience to make your day special.")
              )
            ),
            React.createElement("div", { className: "feature-item right" },
              React.createElement("span", { className: "feature-num" }, "04"),
              React.createElement("div", { className: "feature-text" },
                React.createElement("h3", null, "Professional Baristas"),
                React.createElement("p", null, "Our baristas have extensive experience in the world of coffee and are ready to demonstrate all their skills in preparing your perfect cup.")
              )
            )
          )
        ),
        React.createElement("div", { className: "text-center mt-12" },
          React.createElement(Link, { href: "/menu", className: "btn-primary", style: { padding: '1rem 3rem' } }, "Order Now")
        )
      )
    ),
    React.createElement("section", { id: "contact", className: "contact-section" },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "glass-card contact-card" },
          React.createElement("div", { className: "contact-info" },
            React.createElement("h2", { className: "text-gradient" }, "Visit Us"),
            React.createElement("p", { className: "mb-6" }, "Experience the tranquility first hand."),
            React.createElement("div", { className: "info-list" },
              React.createElement("div", { className: "info-item" },
                React.createElement(MapPin, { size: 20, className: "text-gold" }),
                React.createElement("span", null, "1 Elite Avenue, Vasana, Ahmedabad")
              ),
              React.createElement("div", { className: "info-item" },
                React.createElement(Clock, { size: 20, className: "text-gold" }),
                React.createElement("span", null, "Open Daily: 10am - 9pm")
              )
            )
          ),
          React.createElement("div", { className: "contact-action" },
            React.createElement("a", { href: "https://maps.google.com", target: "_blank", rel: "noopener noreferrer", className: "btn-primary" }, "Get Directions")
          )
        )
      )
    )
  );
}
