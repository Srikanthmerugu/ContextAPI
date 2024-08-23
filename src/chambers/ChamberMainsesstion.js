import React from "react";
import "./ChamberMainsession.css"; // Importing the CSS file

const ChamberMainsession = () => {
  return (
    <div className="Product-container">
      <div className="Product-sidebar">
        <div className="Product-sidebar-header">

        
        <h4 className="text-center">Chambers..</h4>
        <hr />
        <ul className="sidebarList">
          <li className="sidebarItem">Plant Growth Walk-in mini Chamber</li>
          <li className="sidebarItem">Cannabis Production</li>
          <li className="sidebarItem">Plant-Derived Pharma</li>
          <li className="sidebarItem">Form</li>
          {/* <li className="sidebarItem">Tiers</li>
          <li className="sidebarItem">External Area</li>
          <li className="sidebarItem">Growth Area</li>
          <li className="sidebarItem">Growth Height</li> */}
        </ul></div>
      </div>
      <div className="products">
        {/* Static Cards */}
        <div className="productCard">
          <div className="imageContainer">
            <img
              src="https://img.freepik.com/premium-photo/botanist-scientists-working-together-experimental-plant-plots-greenhouses_1235831-64909.jpg?w=826"
              alt="The SET8-THL Plant Growth Walk-in Chamber"
              className="productImage"
            />
          </div>
          <div className="productContent">
            <h3 className="productTitle">The SET8-THL Plant Growth Walk-in Chamber</h3>
            <div className="productDetails">
              <p>Temp Range: 9.25 ft²</p><hr/>
              <p className="product-border">Growth Area: 48 sq.ft²</p>
              <p>Growth Height: 20 inches</p>
            </div>
            <button className="learnMoreBtn">Learn More</button>
          </div>
        </div>

        <div className="productCard">
          <div className="imageContainer">
            <img
              src="https://img.freepik.com/free-photo/side-view-researchers-biotechnology-laboratory-with-plant_23-2148776133.jpg"
              alt="GEN1000-ECO-SH"
              className="productImage"
            />
          </div>
          <div className="productContent">
            <h3 className="productTitle">GEN1000-ECO-SH</h3>
            <div className="productDetails">
              <p>Temp Range: 9.25 ft²</p>
              <p>Growth Area: 11.3 ft²</p>
              <p>Growth Height: 20'</p>
            </div>
            <button className="learnMoreBtn">Learn More</button>
          </div>
        </div>

        <div className="productCard">
          <div className="imageContainer">
            <img
              src="https://img.freepik.com/premium-photo/botanist-scientists-working-together-experimental-plant-plots-greenhouses_1235831-64909.jpg?w=826"
              alt="GEN1000-ECO-IN"
              className="productImage"
            />
          </div>
          <div className="productContent">
            <h3 className="productTitle">GEN1000-ECO-IN</h3>
            <div className="productDetails">
              <p>Temp Range: 9.25 ft²</p>
              <p>Growth Area: 22.6 ft²</p>
              <p>Growth Height: 8.5'</p>
            </div>
            <button className="learnMoreBtn">Learn More</button>
          </div>
        </div>

        <div className="productCard">
          <div className="imageContainer">
            <img
              src="https://img.freepik.com/free-photo/side-view-researchers-biotechnology-laboratory-with-plant_23-2148776133.jpg"
              alt="GEN1000-ECO-SH"
              className="productImage"
            />
          </div>
          <div className="productContent">
            <h3 className="productTitle">GEN1000-ECO-SH</h3>
            <div className="productDetails">
              <p>Temp Range: 9.25 ft²</p>
              <p>Growth Area: 11.3 ft²</p>
              <p>Growth Height: 20'</p>
            </div>
            <button className="learnMoreBtn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChamberMainsession;
