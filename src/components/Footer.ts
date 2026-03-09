"use client";
import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';
import './footer.css';
import React from 'react';

export default function Footer() {
  return React.createElement(
    "footer",
    { className: "footer-main" },
    React.createElement(
      "div",
      { className: "container grid grid-cols-4 gap-12 footer-grid" },
      React.createElement(
        "div",
        { className: "footer-brand" },
        React.createElement(
          "div",
          { className: "logo mb-4" },
          React.createElement(Coffee, { className: "w-8 h-8 text-[#D4AF37]" }),
          React.createElement("span", null, "DND CAFE")
        ),
        React.createElement(
          "p",
          { className: "text-muted text-sm leading-relaxed" },
          "Crafting moments of tranquility and exceptional flavors since 2024. Your premium destination for artisanal coffee and pastries."
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement("h4", { className: "text-lg font-bold mb-6" }, "Quick Links"),
        React.createElement(
          "ul",
          { className: "space-y-4" },
          React.createElement("li", null, React.createElement("a", { href: "/", className: "hover-gold" }, "Home")),
          React.createElement("li", null, React.createElement("a", { href: "/menu", className: "hover-gold" }, "Menu")),
          React.createElement("li", null, React.createElement("a", { href: "#about", className: "hover-gold" }, "About Us")),
          React.createElement("li", null, React.createElement("a", { href: "#contact", className: "hover-gold" }, "Contact"))
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement("h4", { className: "text-lg font-bold mb-6" }, "Hours"),
        React.createElement(
          "ul",
          { className: "space-y-4 text-sm" },
          React.createElement(
            "li",
            { className: "flex justify-between" },
            React.createElement("span", null, "Mon - Fri"),
            React.createElement("span", { className: "text-gold" }, "7am - 9pm")
          ),
          React.createElement(
            "li",
            { className: "flex justify-between" },
            React.createElement("span", null, "Saturday"),
            React.createElement("span", { className: "text-gold" }, "8am - 10pm")
          ),
          React.createElement(
            "li",
            { className: "flex justify-between" },
            React.createElement("span", null, "Sunday"),
            React.createElement("span", { className: "text-gold" }, "9am - 8pm")
          )
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement("h4", { className: "text-lg font-bold mb-6" }, "Follow Us"),
        React.createElement(
          "div",
          { className: "flex gap-4" },
          React.createElement("a", { href: "#", className: "social-icon" }, React.createElement(Instagram, { size: 20 })),
          React.createElement("a", { href: "#", className: "social-icon" }, React.createElement(Twitter, { size: 20 })),
          React.createElement("a", { href: "#", className: "social-icon" }, React.createElement(Facebook, { size: 20 }))
        )
      )
    ),
    React.createElement(
      "div",
      { className: "mt-12 pt-8 border-t text-center text-xs text-muted" },
      "\u00A9 ",
      new Date().getFullYear(),
      " DND Cafe. All rights reserved."
    )
  );
}
