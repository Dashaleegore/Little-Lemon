import React from "react";
import logo from "./assets/images/Logo .svg";

function Footer() {
  return (
    <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", background: "#f8f8f8", fontFamily: "'Inika', serif" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <img src={logo} alt="Little Lemon Logo" style={{ height: "40px", marginRight: "2rem" }} />
        <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>
          <nav aria-label="Doormat Navigation" style={{ position: "relative", top: "5%" }}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", margin: 0, padding: 0 }}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", position: "relative", top: "25%" }}>
            <span style={{ fontWeight: "bold" }}>Contact</span>
            <span>123 Lemon St, Citrus City, CA 90000</span>
            <span>(555) 123-4567</span>
            <span>info@littlelemon.com</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", position: "relative", top: "25%" }}>
            <span style={{ fontWeight: "bold" }}>Social Media Links</span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", margin: 0, padding: 0 }}>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
        <p style={{ marginLeft: "2rem", marginBottom: 0 }}>&copy; Little Lemon</p>
      </div>
    </footer>
  );
}

export default Footer;
