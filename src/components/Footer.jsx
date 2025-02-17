import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaLinkedinIn,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0d1117",
        color: "white",
        // padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Company Info */}
        {/* <div style={{ maxWidth: "300px", textAlign: "left" }}>
          <h2 style={{ color: "#ff4500" }}>
            <span style={{ fontWeight: "bold" }}>D</span>IFWA
          </h2>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Enhancing Customer Experience with Innovative Web and Mobile App
            Solutions
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <FaFacebookF style={{ fontSize: "20px", cursor: "pointer" }} />
            <FaInstagram style={{ fontSize: "20px", cursor: "pointer" }} />
            <FaTwitter style={{ fontSize: "20px", cursor: "pointer" }} />
            <FaYoutube style={{ fontSize: "20px", cursor: "pointer" }} />
            <FaLinkedinIn style={{ fontSize: "20px", cursor: "pointer" }} />
          </div>
        </div> */}

        {/* Useful Links */}
        {/* <div>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
            USEFUL LINKS
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div> */}

        {/* Services */}
        {/* <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>SERVICES</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Software Maintenance</li>
          </ul>
        </div> */}

        {/* Marketing */}
        {/* <div>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>MARKETING</h3>
          <p>📧 info@difwa.com </p>
          <p> 📞 +91 945-579-1624</p>
          <p>
            📍 4/37 Vibhav Khand, Gomti Nagar, <br></br>Lucknow, Uttar Pradesh,
            226010
          </p>
        </div> */}
      </div>

      {/* Contact and Copyright */}
      <div
        style={{
          // marginTop: "20px",
          borderTop: "1px solid gray",
          padding: "10px 0px 10px 0px",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          © 2025 DIFMO TECHNOLOGIES. All Rights Reserved. ||
          <a href="/privacy-policy" style={{ color: "white" }}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
