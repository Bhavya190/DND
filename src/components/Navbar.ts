"use client";
import Link from 'next/link';
import { Coffee, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import './navbar.css';
import React from 'react';

export default function Navbar() {
  const { cartCount } = useCart();

  return React.createElement(
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
      React.createElement(Link, { href: "/booking", className: "btn-primary" }, "Book a Table")
    )
  );
}
