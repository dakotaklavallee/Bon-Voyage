import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="showcase">
      <div className="showcase-inner">
        <h1 className="d-flex">
          Your Night Begins Here.
        </h1>
        <Link to="/start" className="btn btn-secondary">
          Start Now
        </Link>
      </div>
    </div>
  );
}
