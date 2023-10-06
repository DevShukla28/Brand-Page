/** @format */

import React from "react";

function HeroSection() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Your Feet Deserve The Best Brand</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button> 
        </div>
        <span className="shopping">Also Available On</span>
        <div className="brand-icon">
          <img src="/images/amazon.png" alt="" />
          <img src="/images/flipkart.png" alt="" />
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
}

export default HeroSection;
