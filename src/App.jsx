import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./App.css"; // custom styles

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Register from "./pages/Register";
import Clubs from "./pages/Clubs";


export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src="./images/white.png" 
              alt="Yuvatma Logo"
              width="200"
              height="80"
              className="d-inline-block align-center"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item mx-3"><Link className="nav-link" to="/events">Events</Link></li>
              <li className="nav-item mx-3"><Link className="nav-link" to="/clubs">Clubs</Link></li>
              <li className="nav-item mx-3"><Link className="nav-link" to="/register">Register</Link></li>
              <li className="nav-item mx-3"><Link className="nav-link" to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content (no Bootstrap container to allow full width) */}
      <main className="flex-grow-1 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-2 mt-2">
  <div className="text-center space-y-2">
    <p className="text-xs">
      © {new Date().getFullYear()} <strong>Yuvatma</strong> - Shri Uttaradi Matha
    </p>

    <div className="d-flex justify-content-center gap-2">
      <a
        href="https://www.instagram.com/yuvatma?igsh=NjRieTluMzkxeXhw"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 p-1.5 rounded-circle hover:bg-pink-600 transition-colors"
      >
        <FaInstagram size={18} />
      </a>

      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 p-1.5 rounded-circle hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp size={18} />
      </a>
    </div>

    <p className="text-[10px] text-gray-400">
      Connect with us for queries & support
    </p>
  </div>
</footer>

    </div>
  );
}
