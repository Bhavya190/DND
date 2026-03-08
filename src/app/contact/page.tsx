"use client";
import './contact.css';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! Our team will get back to you soon.");
  };

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <Image src="/images/contact-hero.png" alt="DND Cafe Exterior" fill style={{objectFit: 'cover'}} priority />
        <div className="contact-hero-overlay">
          <div className="container">
            <h1 className="contact-title animate-fade-in">Get in <span className="text-gradient">Touch</span></h1>
            <p className="contact-description animate-fade-in">We'd love to hear from you. Whether you have a question about our beans, want to book a private event, or just want to say hi.</p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="contact-content">
        <div className="container contact-grid">
          {/* Contact Info Column */}
          <div className="contact-info">
            <h2 className="section-title">Visit Us</h2>
            <p className="text-muted mb-6">Experience the sanctuary of DND Cafe in person. Our doors are open for you.</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h4>Location</h4>
                  <p>123 Coffee Avenue, Artisan District, CA 90210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4>Email</h4>
                  <p>hello@dndcafe.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><Clock size={24} /></div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon - Fri: 7:00 AM - 9:00 PM</p>
                  <p>Sat - Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-connect mt-12">
              <h4>Follow Our Journey</h4>
              <div className="social-icons flex gap-4 mt-4">
                <a href="#" className="social-btn"><Instagram size={20} /></a>
                <a href="#" className="social-btn"><Facebook size={20} /></a>
                <a href="#" className="social-btn"><Twitter size={20} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-container">
            <div className="glass-card form-card">
              <h3>Send a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option>General Inquiry</option>
                    <option>Table Reservation</option>
                    <option>Private Event</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you today?" required></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
