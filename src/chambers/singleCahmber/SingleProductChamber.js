import React from 'react';
import './SingleProductChamber.css';

const SingleProductChamber = () => {
  return (
    <div className="product-container">
      <div className="product-details">
        <h1 className="product-title">GEN1000-ECO-IN</h1>
        <p className="product-subtitle">Plant Growth Chamber</p>
        <div className="product-specs">
          <div className="spec">
            <p className="spec-value">9.25</p>
            <p className="spec-label">External Area ft²</p>
          </div>
          <div className="spec">
            <p className="spec-value">22.6</p>
            <p className="spec-label">Growth Area ft²</p>
          </div>
          <div className="spec">
            <p className="spec-value">8.5</p>
            <p className="spec-label">Growth Height inches</p>
          </div>
        </div>
        <p className="product-description">
          With low light, four tiers and horizontal airflow the GEN1000-ECO IN 
          (incubation) is ideal for nurturing young seedlings into shorter plants. 
          The GEN1000-ECO comes standard with broad-spectrum, energy-saving LED 
          lighting and an ultra-efficient compressor for energy conservation.
        </p>
        <button className="quote-button">REQUEST A QUOTE</button>
      </div>
      <div className="product-image-container">
        <img
          src="https://img.freepik.com/premium-photo/botanist-scientists-working-together-experimental-plant-plots-greenhouses_1235831-64909.jpg?w=826"
          alt="Product Image"
          className="product-image"
        />
      </div>
    </div>
  );
};

export default SingleProductChamber;
