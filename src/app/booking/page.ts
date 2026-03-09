"use client";

import { useState } from 'react';
import { Calendar, Clock, Users, Check } from 'lucide-react';
import Link from 'next/link';
import './booking.css';
import React from 'react';

export default function BookingPage() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    date: '', time: '', guests: '', name: '', email: '', phone: '', requests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tables = [
    { id: 1, seats: 2, type: 'round' },
    { id: 2, seats: 2, type: 'round' },
    { id: 3, seats: 4, type: 'square' },
    { id: 4, seats: 4, type: 'booth' },
    { id: 5, seats: 2, type: 'round' },
    { id: 6, seats: 2, type: 'round' },
    { id: 7, seats: 6, type: 'square' },
    { id: 8, seats: 6, type: 'booth' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTable) return;
    setTimeout(() => { setIsSubmitted(true); }, 1000);
  };

  return React.createElement("div", { className: "booking-page" },
    React.createElement("div", { className: "booking-hero" },
      React.createElement("h1", { className: "booking-title font-heading text-gold" }, "RESERVE A TABLE"),
      React.createElement("p", { className: "booking-subtitle" }, "Secure your spot at DND Cafe. Choose your preferred table and experience tranquility.")
    ),
    React.createElement("div", { className: "booking-container" },
      React.createElement("div", { className: "table-map-section" },
        React.createElement("h2", { className: "section-title font-heading" }, "Select Your Table"),
        React.createElement("div", { className: "floor-plan" },
          tables.map((table) => 
            React.createElement("div", { key: table.id, className: `table ${table.type} ${selectedTable === table.id ? 'selected' : ''}`, onClick: () => setSelectedTable(table.id) },
              React.createElement("div", { className: "table-num" }, table.id),
              React.createElement("div", { className: "table-seats" }, `${table.seats} Seats`)
            )
          )
        ),
        React.createElement("div", { className: "legend" },
          React.createElement("div", { className: "legend-item" }, React.createElement("div", { className: "legend-color legend-available" }), React.createElement("span", null, "Available")),
          React.createElement("div", { className: "legend-item" }, React.createElement("div", { className: "legend-color legend-selected" }), React.createElement("span", null, "Selected")),
          React.createElement("div", { className: "legend-item" }, React.createElement("div", { className: "legend-color", style: { background: 'rgba(255,255,255,0.1)' } }), React.createElement("span", null, "Reserved"))
        )
      ),
      React.createElement("div", null,
        isSubmitted ? React.createElement("div", { className: "success-message" },
          React.createElement("div", { className: "success-icon" }, React.createElement(Check, { size: 40 })),
          React.createElement("h2", { className: "font-heading" }, "Reservation Confirmed!"),
          React.createElement("p", null, `Thank you, ${formData.name}. Your table (Table #${selectedTable}) has been successfully reserved for ${formData.date} at ${formData.time} for ${formData.guests} guests.`),
          React.createElement("p", null, `We've sent a confirmation email to ${formData.email}.`),
          React.createElement(Link, { href: "/", className: "btn-home" }, "RETURN TO HOME")
        ) : React.createElement("form", { className: "booking-form-section", onSubmit: handleSubmit },
          React.createElement("h2", { className: "section-title font-heading text-gold" }, "Reservation Details"),
          !selectedTable ? React.createElement("div", { className: "selected-table-display", style: { borderColor: 'rgba(255,255,255,0.1)', background: 'transparent' } }, React.createElement("span", { style: { color: 'rgba(255,255,255,0.5)' } }, "Please select a table from the map"))
          : React.createElement("div", { className: "selected-table-display" }, React.createElement("span", null, `Table ${selectedTable} Selected`), React.createElement("span", { style: { color: 'white', fontSize: '0.9rem' } }, `${tables.find(t => t.id === selectedTable)?.seats} Seats`)),
          React.createElement("div", { className: "form-grid" },
            React.createElement("div", { className: "form-group" }, React.createElement("label", { htmlFor: "date" }, "Date"), React.createElement("div", { className: "relative" }, React.createElement("input", { type: "date", id: "date", name: "date", required: true, onChange: handleInputChange, value: formData.date }))),
            React.createElement("div", { className: "form-group" }, React.createElement("label", { htmlFor: "time" }, "Time"), React.createElement("div", { className: "relative" }, React.createElement("input", { type: "time", id: "time", name: "time", required: true, onChange: handleInputChange, value: formData.time }))),
            React.createElement("div", { className: "form-group full-width" }, React.createElement("label", { htmlFor: "guests" }, "Number of Guests"), React.createElement("select", { id: "guests", name: "guests", required: true, onChange: handleInputChange, value: formData.guests }, React.createElement("option", { value: "", disabled: true }, "Select number of guests"), React.createElement("option", { value: "1" }, "1 Person"), React.createElement("option", { value: "2" }, "2 People"), React.createElement("option", { value: "3" }, "3 People"), React.createElement("option", { value: "4" }, "4 People"), React.createElement("option", { value: "5" }, "5 People"), React.createElement("option", { value: "6" }, "6 People"))),
            React.createElement("div", { className: "form-group full-width" }, React.createElement("label", { htmlFor: "name" }, "Full Name"), React.createElement("input", { type: "text", id: "name", name: "name", placeholder: "John Doe", required: true, onChange: handleInputChange, value: formData.name })),
            React.createElement("div", { className: "form-group" }, React.createElement("label", { htmlFor: "email" }, "Email Address"), React.createElement("input", { type: "email", id: "email", name: "email", placeholder: "john@example.com", required: true, onChange: handleInputChange, value: formData.email })),
            React.createElement("div", { className: "form-group" }, React.createElement("label", { htmlFor: "phone" }, "Phone Number"), React.createElement("input", { type: "tel", id: "phone", name: "phone", placeholder: "+1 (555) 000-0000", required: true, onChange: handleInputChange, value: formData.phone })),
            React.createElement("div", { className: "form-group full-width" }, React.createElement("label", { htmlFor: "requests" }, "Special Requests (Optional)"), React.createElement("textarea", { id: "requests", name: "requests", rows: 3, placeholder: "Dietary requirements, celebrations, etc.", onChange: handleInputChange, value: formData.requests }))
          ),
          React.createElement("button", { type: "submit", className: "btn-submit", disabled: !selectedTable || !formData.date || !formData.time || !formData.guests || !formData.name || !formData.email }, "CONFIRM RESERVATION")
        )
      )
    )
  );
}
