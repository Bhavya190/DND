"use client";
import Link from 'next/link';
import { Coffee } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Coffee className="w-8 h-8 text-[#D4AF37]" />
        <span>DND CAFE</span>
      </Link>
      
      <div className="nav-links">
        <Link href="/" className="nav-item">Home</Link>
        <Link href="/menu" className="nav-item">Menu</Link>
        <Link href="/about" className="nav-item">About</Link>
        <Link href="/contact" className="nav-item">Contact</Link>
      </div>

      <button className="btn-primary">Book a Table</button>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 10%;
          background: rgba(18, 18, 18, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        .nav-item {
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.9rem;
        }
        .nav-item:hover {
          color: var(--primary);
        }
        @media (max-width: 968px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
