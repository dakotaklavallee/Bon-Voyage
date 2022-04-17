import React from "react";
import { Link } from "react-router-dom";

export default function StartNow() {
  return (
    <div>
      <h1>Start Your Journey</h1>
      <h2>Where To?</h2>
      <Link to="/start" className="btn btn-secondary">Plan My Night</Link>
      <Link to="/start" className="btn btn-secondary">Find One Place</Link>
    </div>
  );
}
