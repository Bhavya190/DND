"use client";
import { useState } from 'react';
import './contact.css';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter, Check } from 'lucide-react';
import React from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: 'General Inquiry', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return React.createElement("div", { className: "contact-page" },
    React.createElement("section", { className: "contact-hero" },
      React.createElement(Image, { src: "/images/contact-hero.png", alt: "DND Cafe Exterior", fill: true, style: { objectFit: 'cover' }, priority: true }),
      React.createElement("div", { className: "contact-hero-overlay" },
        React.createElement("div", { className: "container" },
          React.createElement("h1", { className: "contact-title animate-fade-in" }, "Get in ", React.createElement("span", { className: "text-gradient" }, "Touch")),
          React.createElement("p", { className: "contact-description animate-fade-in" }, "We'd love to hear from you. Whether you have a question about our beans, want to book a private event, or just want to say hi.")
        )
      )
    ),
    React.createElement("section", { className: "contact-content" },
      React.createElement("div", { className: "container contact-grid" },
        React.createElement("div", { className: "contact-info" },
          React.createElement("h2", { className: "section-title" }, "Visit Us"),
          React.createElement("p", { className: "text-muted mb-6" }, "Experience the sanctuary of DND Cafe in person. Our doors are open for you."),
          React.createElement("div", { className: "info-list" },
            React.createElement("div", { className: "info-item" },
              React.createElement("div", { className: "icon-box" }, React.createElement(MapPin, { size: 24 })),
              React.createElement("div", null,
                React.createElement("h4", null, "Location"),
                React.createElement("p", null, "1 Elite Avenue, Vasana, Ahmedabad")
              )
            ),
            React.createElement("div", { className: "info-item" },
              React.createElement("div", { className: "icon-box" }, React.createElement(Phone, { size: 24 })),
              React.createElement("div", null,
                React.createElement("h4", null, "Phone"),
                React.createElement("p", null, "+91 93740 20202")
              )
            ),
            React.createElement("div", { className: "info-item" },
              React.createElement("div", { className: "icon-box" }, React.createElement(Mail, { size: 24 })),
              React.createElement("div", null,
                React.createElement("h4", null, "Email"),
                React.createElement("p", null, "hello@dndcafe.com")
              )
            ),
            React.createElement("div", { className: "info-item" },
              React.createElement("div", { className: "icon-box" }, React.createElement(Clock, { size: 24 })),
              React.createElement("div", null,
                React.createElement("h4", null, "Hours"),
                React.createElement("p", null, "Mon - Fri: 10:00 AM - 9:00 PM"),
                React.createElement("p", null, "Sat - Sun: 10:00 AM - 11:00 PM")
              )
            )
          ),
          React.createElement("div", { className: "social-connect mt-12" },
            React.createElement("h4", null, "Follow Our Journey"),
            React.createElement("div", { className: "social-icons flex gap-4 mt-4" },
              React.createElement("a", { href: "#", className: "social-btn" }, React.createElement(Instagram, { size: 20 })),
              React.createElement("a", { href: "#", className: "social-btn" }, React.createElement(Facebook, { size: 20 })),
              React.createElement("a", { href: "#", className: "social-btn" }, React.createElement(Twitter, { size: 20 }))
            )
          )
        ),
        React.createElement("div", { className: "contact-form-container" },
          React.createElement("div", { className: "glass-card form-card" },
            isSubmitted ? React.createElement("div", { className: "success-message", style: { textAlign: 'center', padding: '2rem 1rem' } },
              React.createElement("div", { className: "success-icon", style: { margin: '0 auto 1.5rem', width: '60px', height: '60px', background: 'rgba(39, 174, 96, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2ecc71' } }, React.createElement(Check, { size: 30 })),
              React.createElement("h3", { style: { color: '#2ecc71', marginBottom: '1rem' } }, "Message Sent!"),
              React.createElement("p", { className: "text-muted", style: { marginBottom: '2rem' } }, `Thank you, ${formData.name}. Our team will get back to you soon.`),
              React.createElement("button", { 
                className: "btn-primary w-full", 
                onClick: () => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                } 
              }, "SEND ANOTHER MESSAGE")
            ) : React.createElement(React.Fragment, null,
              React.createElement("h3", null, "Send a Message"),
              React.createElement("form", { className: "contact-form", onSubmit: handleSubmit },
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { htmlFor: "name" }, "Full Name"),
                  React.createElement("input", { type: "text", id: "name", placeholder: "John Doe", required: true, value: formData.name, onChange: handleInputChange })
                ),
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { htmlFor: "email" }, "Email Address"),
                  React.createElement("input", { type: "email", id: "email", placeholder: "john@example.com", required: true, value: formData.email, onChange: handleInputChange })
                ),
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { htmlFor: "subject" }, "Subject"),
                  React.createElement("select", { id: "subject", value: formData.subject, onChange: handleInputChange },
                    React.createElement("option", null, "General Inquiry"),
                    React.createElement("option", null, "Table Reservation"),
                    React.createElement("option", null, "Private Event"),
                    React.createElement("option", null, "Feedback")
                  )
                ),
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { htmlFor: "message" }, "Message"),
                  React.createElement("textarea", { id: "message", rows: 5, placeholder: "How can we help you today?", required: true, value: formData.message, onChange: handleInputChange })
                ),
                React.createElement("button", { type: "submit", className: "btn-primary w-full flex items-center justify-center gap-2" },
                  "Send Message ",
                  React.createElement(Send, { size: 18 })
                )
              )
            )
          )
        )
      )
    )
  );
}
