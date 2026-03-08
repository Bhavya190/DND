"use client";

import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import './cart.css';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="cart-title text-gold font-heading">YOUR CART</h1>
        <p className="cart-subtitle">Review your premium selections</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <ShoppingBag size={64} className="text-white/20" />
          <p>Your cart is currently empty.</p>
          <Link href="/menu">
            BROWSE MENU
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  {item.image ? (
                     <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain', padding: '10px' }} />
                  ) : (
                    <ShoppingBag className="text-white/30" />
                  )}
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-price">Rs. {item.price}</div>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="order-summary">
              <h2 className="summary-title font-heading text-gold">ORDER SUMMARY</h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>Rs. {cartTotal}</span>
              </div>
              
              <div className="summary-row">
                <span>Taxes & Fees</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span className="price">Rs. {cartTotal}</span>
              </div>

              <button className="btn-checkout">
                PROCEED TO CHECKOUT
              </button>
              
              <Link href="/menu" className="btn-continue">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
