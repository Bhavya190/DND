"use client";
import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container grid grid-cols-4 gap-12 footer-grid">
        <div className="footer-brand">
          <div className="logo mb-4">
            <Coffee className="w-8 h-8 text-[#D4AF37]" />
            <span>DND CAFE</span>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Crafting moments of tranquility and exceptional flavors since 2024. Your premium destination for artisanal coffee and pastries.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="/" className="hover-gold">Home</a></li>
            <li><a href="/menu" className="hover-gold">Menu</a></li>
            <li><a href="#about" className="hover-gold">About Us</a></li>
            <li><a href="#contact" className="hover-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Hours</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-gold">7am - 9pm</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span className="text-gold">8am - 10pm</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span className="text-gold">9am - 8pm</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} DND Cafe. All rights reserved.
      </div>

      <style jsx>{`
        .footer-main {
          background: #111;
          padding: 5rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }
        .hover-gold:hover { color: var(--primary); }
        .text-gold { color: var(--primary); }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }
        .social-icon:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
        }
        .border-t { border-top: 1px solid rgba(255, 255, 255, 0.05); }
        
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 5%;
          }
        }
        @media (max-width: 568px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
