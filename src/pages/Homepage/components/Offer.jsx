import React from "react";
import { Link } from "react-router-dom";
function Offer() {
  return (
    <div className="offer-container" data-aos="fade-up">
      <div className="offer-content">
        <div className="offer-text">
          <h2>See, Shine & Save</h2>
          <h3>Don’t Miss Out!</h3>
          <p>
            Lightweight, durable, and designed for 100% UV protection, these
            modern sunglasses offer clarity, comfort, and timeless style for any
            occasion
          </p>
          <div className="offer-tags">
            <span className="discount">Flat 25% Off</span>
            <span className="limited">Limited Time Offer</span>
          </div>

          <Link to="/products" className="explore-btn">
            Explore
          </Link>
        </div>
        <div className="offer-image">
          <img src="/images/offer/offer.png" alt="Kitchen Cookware Set" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
