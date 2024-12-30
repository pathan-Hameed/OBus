import React from "react";
import './hero-section.css'

export default function HeroSection() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Online Bus Ticket Booking Platform</h1>
          <div className="bttn">
            <button type="button" className="btn btn-primary btn-lg">
              Book Ticket
            </button>
            <button type="button" className="btn btn-secondary btn-lg">
              Find a Bus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
