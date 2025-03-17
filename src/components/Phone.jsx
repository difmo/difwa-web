import React from "react";
import { Link } from "react-router-dom";

function Phone() {
  return (
    <div className="container-app">
      <div className="text-section">
        <h1>
          Download the <br /> Latest Version <br /> of the App from
        </h1>
      </div>
      <Link to="https://play.google.com/store/apps/details?id=com.difmo.difwa">
        <button className="discover-btn">Discover More</button>
      </Link>

      <div className="image-section">
        <img
          src="img/Group1.png"
          alt="Phone App Preview"
          className="phone-image"
        />
      </div>
    </div>
  );
}

export default Phone;
