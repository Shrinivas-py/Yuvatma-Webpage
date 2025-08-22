import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // custom styles

export default function Navbar() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark vh-100 p-3">
        <h2 className="text-center mb-4 brand">🌸 Yuvatma</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clubs" className="nav-link">
              Clubs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 content-area">
        <h1 className="text-center">Welcome to Yuvatma</h1>
        <p className="text-center text-muted">
          Explore our platform using the navigation on the left.
        </p>
      </div>
    </div>
  );
}
