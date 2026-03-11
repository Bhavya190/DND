"use client";
import './menu.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Coffee, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import React from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Coffee');
  const [isScrolled, setIsScrolled] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['Coffee', 'Tea', 'Pastries', 'Signature'];

  const menuData = {
    'Coffee': [
      { id: 'c1', name: 'House Espresso', desc: 'A double shot of courage. Intense, pure, unapologetic.', price: 'Rs. 180', hot: true },
      { id: 'c2', name: 'Velvet Latte', desc: 'Silky microfoam poured over rich espresso.', price: 'Rs. 250' },
      { id: 'c3', name: 'Classic Americano', desc: 'Espresso stretched with hot water. Bold and clean.', price: 'Rs. 200' },
      { id: 'c4', name: 'Oat Milk Flat White', desc: 'A double ristretto shot topped with velvety oat milk.', price: 'Rs. 320', new: true },
      { id: 'c5', name: 'Pour Over V60', desc: 'Single-origin Ethiopian Yirgacheffe, floral and bright.', price: 'Rs. 350' },
    ],
    'Tea': [
      { id: 't1', name: 'Matcha Ceremonial', desc: 'Stone-ground Uji matcha whisked to perfection.', price: 'Rs. 380', hot: true },
      { id: 't2', name: 'Earl Grey Imperial', desc: 'Black tea infused with pure bergamot oil.', price: 'Rs. 220' },
      { id: 't3', name: 'Jasmine Pearl', desc: 'Hand-rolled green tea blossoms scented with jasmine flowes.', price: 'Rs. 280' },
      { id: 't4', name: 'Hibiscus Iced Refresher', desc: 'Tart hibiscus tea shaken with agave and mint.', price: 'Rs. 240' },
    ],
    'Pastries': [
      { id: 'p1', name: 'Butter Croissant', desc: 'Flaky, buttery, imported French layers.', price: 'Rs. 250' },
      { id: 'p2', name: 'Raspberry Dream', desc: 'Almond frangipane tart topped with fresh raspberries.', price: 'Rs. 310' },
      { id: 'p3', name: 'Dark Chocolate Babka', desc: 'Braided brioche swirled with 70% dark chocolate.', price: 'Rs. 280', hot: true },
      { id: 'p4', name: 'Whole Grain Spelt', desc: 'Artisanal sourdough slice with cultured butter.', price: 'Rs. 150' },
    ],
    'Signature': [
      { id: 's1', name: 'The Midnight Brew', desc: 'Cold brew infused with smoked vanilla and cardamom.', price: 'Rs. 420', new: true },
      { id: 's2', name: 'Gold Leaf Affogato', desc: 'Madagascar vanilla gelato drowned in a double shot, topped with 24k gold leaf.', price: 'Rs. 550', hot: true },
      { id: 's3', name: 'Velvet Chaos', desc: 'Spiced mocha with a hint of chili and cinnamon dust.', price: 'Rs. 450' },
    ]
  };

  const handleAddToCart = (product: { id: string; name: string; price: string }) => {
    const numericPrice = parseInt(product.price.replace(/\D/g, ''), 10);
    addToCart({
      id: product.id,
      name: product.name,
      price: numericPrice,
      quantity: 1,
      image: '/images/coffee-cup-feature.png'
    });
    
    const btn = document.getElementById(`menu-add-btn-${product.id}`);
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

  return React.createElement("div", { className: "menu-page" },
    React.createElement("section", { className: "menu-hero" },
      React.createElement(Image, { src: "/images/coffee.png", alt: "Curated Menu", fill: true, style: { objectFit: 'cover' }, priority: true }),
      React.createElement("div", { className: "menu-hero-overlay" },
        React.createElement("div", { className: "container text-center" },
          React.createElement("h1", { className: "menu-title animate-fade-in" }, "The ", React.createElement("span", { className: "text-gradient" }, "Collections")),
          React.createElement("p", { className: "menu-subtitle animate-fade-in" }, "A curated selection of artisanal beverages and exquisite bakes.")
        )
      )
    ),
    React.createElement("nav", { className: `menu-nav ${isScrolled ? 'sticky' : ''}` },
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "nav-container" },
          categories.map(cat => 
            React.createElement("button", {
              key: cat,
              className: `menu-nav-btn ${activeCategory === cat ? 'active' : ''}`,
              onClick: () => {
                setActiveCategory(cat);
                const menuSection = document.getElementById('menu-content');
                if (menuSection) {
                  const topPos = menuSection.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: topPos, behavior: 'smooth' });
                }
              }
            }, cat)
          )
        )
      )
    ),
    React.createElement("section", { id: "menu-content", className: "menu-content pb-24 pt-12" },
      React.createElement("div", { className: "container max-w-4xl mx-auto" },
        React.createElement("div", { className: "text-center mb-12 ", style: { marginBottom: '20px' } },
          React.createElement(Coffee, { className: "text-gold mx-auto mb-2 w-8 h-8 opacity-50" }),
          React.createElement("h2", { className: "text-3xl font-heading tracking-widest text-white uppercase" }, activeCategory)
        ),
        React.createElement("div", { className: "menu-list space-y-12" },
          menuData[activeCategory as keyof typeof menuData].map((item: any) => 
            React.createElement("div", { key: item.id, className: "menu-item group flex flex-col md:flex-row items-start md:items-center p-8 md:p-10 glass-card rounded-3xl hover:border-[rgba(212,175,55,0.3)] transition-all duration-300 md:flex-nowrap" },
              React.createElement("div", { className: "item-details flex-[0_1_auto] md:max-w-[70%] min-w-0" },
                React.createElement("div", { className: "flex flex-wrap items-center gap-3 mb-2" },
                  React.createElement("h3", { className: "text-xl sm:text-2xl font-bold text-white tracking-wide truncate" }, item.name),
                  React.createElement("div", { className: "flex gap-2 shrink-0" },
                    item.new && React.createElement("span", { className: "text-[10px] uppercase tracking-widest bg-[var(--primary)] text-[#121212] px-2 py-0.5 rounded-sm font-bold whitespace-nowrap" }, "New"),
                    item.hot && React.createElement("span", { className: "text-[10px] uppercase tracking-widest border border-[#e74c3c] text-[#e74c3c] px-2 py-0.5 rounded-sm font-bold whitespace-nowrap" }, "Popular")
                  )
                ),
                React.createElement("p", { className: "text-muted text-sm sm:text-base leading-relaxed line-clamp-2 md:line-clamp-none pr-4" }, item.desc)
              ),
              React.createElement("div", { className: "h-[1px] bg-white/10 flex-1 hidden md:block mx-8 min-w-[50px]" }),
              React.createElement("div", { className: "item-action flex items-center justify-between md:justify-end w-full md:w-auto shrink-0 gap-6 mt-6 md:mt-0 border-t border-white/5 md:border-none pt-4 md:pt-0" },
                React.createElement("span", { className: "text-gold font-bold text-xl sm:text-2xl whitespace-nowrap md:min-w-[100px] md:text-right" }, item.price),
                React.createElement("button", {
                  id: `menu-add-btn-${item.id}`,
                  className: "btn-add shrink-0",
                  onClick: () => handleAddToCart(item)
                }, "ADD")
              )
            )
          )
        ),
        React.createElement("div", { className: "mt-16 text-center border-t border-white/10 pt-8" },
          React.createElement("p", { className: "text-muted text-sm flex items-center justify-center gap-2" },
            React.createElement(Info, { size: 16 }), " Please inform us of any allergies before ordering. All prices are inclusive of taxes."
          )
        )
      )
    )
  );
}
