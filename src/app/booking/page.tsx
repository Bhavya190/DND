"use client";

import { useState } from 'react';
import { Calendar, Clock, Users, Check } from 'lucide-react';
import Link from 'next/link';
import './booking.css';

export default function BookingPage() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    requests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 8 Tables setup
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
    
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="booking-page">
      <div className="booking-hero">
        <h1 className="booking-title font-heading text-gold">RESERVE A TABLE</h1>
        <p className="booking-subtitle">Secure your spot at DND Cafe. Choose your preferred table and experience tranquility.</p>
      </div>

      <div className="booking-container">
        
        {/* Left Side: Table Map */}
        <div className="table-map-section">
          <h2 className="section-title font-heading">Select Your Table</h2>
          
          <div className="floor-plan">
            {tables.map((table) => (
              <div 
                key={table.id}
                className={`table ${table.type} ${selectedTable === table.id ? 'selected' : ''}`}
                onClick={() => setSelectedTable(table.id)}
              >
                <div className="table-num">{table.id}</div>
                <div className="table-seats">{table.seats} Seats</div>
              </div>
            ))}
          </div>

          <div className="legend">
            <div className="legend-item">
              <div className="legend-color legend-available"></div>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <div className="legend-color legend-selected"></div>
              <span>Selected</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{background: 'rgba(255,255,255,0.1)'}}></div>
              <span>Reserved</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form / Success state */}
        <div>
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">
                <Check size={40} />
              </div>
              <h2 className="font-heading">Reservation Confirmed!</h2>
              <p>
                Thank you, {formData.name}. Your table (Table #{selectedTable}) has been successfully reserved for {formData.date} at {formData.time} for {formData.guests} guests.
              </p>
              <p>We've sent a confirmation email to {formData.email}.</p>
              <Link href="/" className="btn-home">
                RETURN TO HOME
              </Link>
            </div>
          ) : (
            <form className="booking-form-section" onSubmit={handleSubmit}>
              <h2 className="section-title font-heading text-gold">Reservation Details</h2>
              
              {!selectedTable ? (
                <div className="selected-table-display" style={{borderColor: 'rgba(255,255,255,0.1)', background: 'transparent'}}>
                  <span style={{color: 'rgba(255,255,255,0.5)'}}>Please select a table from the map</span>
                </div>
              ) : (
                <div className="selected-table-display">
                  <span>Table {selectedTable} Selected</span>
                  <span style={{color: 'white', fontSize: '0.9rem'}}>
                    {tables.find(t => t.id === selectedTable)?.seats} Seats
                  </span>
                </div>
              )}

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <div className="relative">
                    <input type="date" id="date" name="date" required onChange={handleInputChange} value={formData.date} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <div className="relative">
                    <input type="time" id="time" name="time" required onChange={handleInputChange} value={formData.time}/>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="guests">Number of Guests</label>
                  <select id="guests" name="guests" required onChange={handleInputChange} value={formData.guests}>
                    <option value="" disabled>Select number of guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required onChange={handleInputChange} value={formData.name} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required onChange={handleInputChange} value={formData.email}/>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" required onChange={handleInputChange} value={formData.phone} />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="requests">Special Requests (Optional)</label>
                  <textarea id="requests" name="requests" rows={3} placeholder="Dietary requirements, celebrations, etc." onChange={handleInputChange} value={formData.requests}></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-submit"
                disabled={!selectedTable || !formData.date || !formData.time || !formData.guests || !formData.name || !formData.email}
              >
                CONFIRM RESERVATION
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
