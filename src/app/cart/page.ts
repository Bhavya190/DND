"use client";

import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import './cart.css';
import React from 'react';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return React.createElement("div", { className: "cart-page" },
    React.createElement("div", { className: "cart-header" },
      React.createElement("h1", { className: "cart-title text-gold font-heading" }, "YOUR CART"),
      React.createElement("p", { className: "cart-subtitle" }, "Review your premium selections")
    ),
    cartItems.length === 0 ? React.createElement("div", { className: "empty-cart" },
      React.createElement(ShoppingBag, { size: 64, className: "text-white/20" }),
      React.createElement("p", null, "Your cart is currently empty."),
      React.createElement(Link, { href: "/menu" }, "BROWSE MENU")
    ) : React.createElement("div", { className: "cart-container" },
      React.createElement("div", { className: "cart-items" },
        cartItems.map((item) => 
          React.createElement("div", { key: item.id, className: "cart-item" },
            React.createElement("div", { className: "cart-item-image" },
              item.image ? React.createElement(Image, { src: item.image, alt: item.name, fill: true, style: { objectFit: 'contain', padding: '10px' } })
              : React.createElement(ShoppingBag, { className: "text-white/30" })
            ),
            React.createElement("div", { className: "cart-item-details" },
              React.createElement("h3", { className: "cart-item-name" }, item.name),
              React.createElement("div", { className: "cart-item-price" }, `Rs. ${item.price}`)
            ),
            React.createElement("div", { className: "cart-item-actions" },
              React.createElement("div", { className: "quantity-controls" },
                React.createElement("button", { className: "qty-btn", onClick: () => updateQuantity(item.id, item.quantity - 1) }, React.createElement(Minus, { size: 14 })),
                React.createElement("span", { className: "qty-display" }, item.quantity),
                React.createElement("button", { className: "qty-btn", onClick: () => updateQuantity(item.id, item.quantity + 1) }, React.createElement(Plus, { size: 14 }))
              ),
              React.createElement("button", { className: "remove-btn", onClick: () => removeFromCart(item.id), "aria-label": "Remove item" }, React.createElement(Trash2, { size: 18 }))
            )
          )
        )
      ),
      React.createElement("div", null,
        React.createElement("div", { className: "order-summary" },
          React.createElement("h2", { className: "summary-title font-heading text-gold" }, "ORDER SUMMARY"),
          React.createElement("div", { className: "summary-row" }, React.createElement("span", null, "Subtotal"), React.createElement("span", null, `Rs. ${cartTotal}`)),
          React.createElement("div", { className: "summary-row" }, React.createElement("span", null, "Taxes & Fees"), React.createElement("span", null, "Calculated at checkout")),
          React.createElement("div", { className: "summary-row total" }, React.createElement("span", null, "Total"), React.createElement("span", { className: "price" }, `Rs. ${cartTotal}`)),
          React.createElement("button", { className: "btn-checkout" }, "PROCEED TO CHECKOUT"),
          React.createElement(Link, { href: "/menu", className: "btn-continue" }, "Continue Shopping")
        )
      )
    )
  );
}
