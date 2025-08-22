import React from "react";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="w-100">
        <img
          src="/images/final.jpg"
          alt="Yuvatma"
          className="w-100"
          style={{ height: "auto", width: "100%", objectFit: "cover" }}
        />
      </div>

      {}
      <div className="text-center py-4 bg-light">
        <h1 className="display-5 fw-bold text-dark">Welcome to Yuvatma</h1>
        <p className="lead text-secondary">
          The Youth Wing of Shri Uttaradi Matha
        </p>
      </div>

      {/* Cards Section */}
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Events</h5>
                <p className="card-text">
                  Discover our spiritual and cultural events.
                </p>
                <a href="/events" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Clubs</h5>
                <p className="card-text">
                  Join our youth clubs and be a part of something great.
                </p>
                <a href="/clubs" className="btn btn-primary">
                  Know More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Register</h5>
                <p className="card-text">
                  Become a member and be part of Yuvatma.
                </p>
                <a href="/register" className="btn btn-primary">
                  Join Us
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">
                  Learn more about our mission and values.
                </p>
                <a href="/about" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
