"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Coffee, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import './navbar.css';
import React from 'react';

export default function Navbar() {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return React.createElement(React.Fragment, null,
    React.createElement(
      "nav",
      { className: "navbar" },
      React.createElement(
        Link,
        { href: "/", className: "logo" },
        React.createElement(Coffee, { className: "w-8 h-8 text-[#D4AF37]" }),
        React.createElement("span", null, "DND CAFE")
      ),
      React.createElement(
        "div",
        { className: "nav-links" },
        React.createElement(Link, { href: "/", className: "nav-item" }, "Home"),
        React.createElement(Link, { href: "/menu", className: "nav-item" }, "Menu"),
        React.createElement(Link, { href: "/about", className: "nav-item" }, "About"),
        React.createElement(Link, { href: "/contact", className: "nav-item" }, "Contact")
      ),
      React.createElement(
        "div",
        { className: "nav-actions" },
        React.createElement(
          Link,
          { href: "/cart", className: "cart-btn", "aria-label": "View Cart" },
          React.createElement(ShoppingCart, { size: 22 }),
          cartCount > 0 && React.createElement("span", { className: "cart-badge" }, cartCount)
        ),
        React.createElement(Link, { href: "/booking", className: "btn-primary desktop-only" }, "Book a Table"),
        React.createElement(
          "button",
          { className: "mobile-menu-btn", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen) },
          isMobileMenuOpen ? React.createElement(X, { size: 28 }) : React.createElement(Menu, { size: 28 })
        )
      )
    ),
    isMobileMenuOpen && React.createElement(
      "div",
      { className: "mobile-menu" },
      React.createElement(
        "div",
        { className: "mobile-nav-links" },
        React.createElement(Link, { href: "/", className: "mobile-nav-item", onClick: () => setIsMobileMenuOpen(false) }, "Home"),
        React.createElement(Link, { href: "/menu", className: "mobile-nav-item", onClick: () => setIsMobileMenuOpen(false) }, "Menu"),
        React.createElement(Link, { href: "/about", className: "mobile-nav-item", onClick: () => setIsMobileMenuOpen(false) }, "About"),
        React.createElement(Link, { href: "/contact", className: "mobile-nav-item", onClick: () => setIsMobileMenuOpen(false) }, "Contact"),
        React.createElement(Link, { href: "/booking", className: "btn-primary mobile-book-btn", onClick: () => setIsMobileMenuOpen(false) }, "Book a Table")
      )
    )
  );
}
