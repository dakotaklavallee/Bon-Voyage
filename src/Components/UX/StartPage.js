import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";

export default function StartPage({ handleRandomizer }) {
  return (
    <div className="showcase-start">
      <div className="showcase-start-inner">
        <h1>We need to select a few options first...</h1>
        <Link to="/start/options" className="btn btn-secondary">
          Let's Do It
        </Link>
        <button type="button" onClick={handleRandomizer} className="btn btn-danger">
          Pick For Me
        </button>
      </div>
    </div>
  );
}
