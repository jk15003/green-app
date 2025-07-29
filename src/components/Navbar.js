import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#004d00",
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      gap: "2rem"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/calculator" style={{ color: "white", textDecoration: "none" }}>Calculator</Link>
    </nav>
  );
}

export default Navbar;
