import React from "react";
import bvgLogo from "../../img/bvg-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <div className="d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          <img className="myLogo" src={bvgLogo} alt="logo" />
        </Link>
      </div>
    </nav>
  );
}
