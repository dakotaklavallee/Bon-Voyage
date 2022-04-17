import React from "react";
import loadingScreen from "../../img/loading-screen.png"
import "./LoadingPage.css"

export default function LoadingPage() {
  return (
    <div className="loadingContainer">
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="loadingImage">
          <img src={loadingScreen} alt="fetching results" />
      </div>
    </div>
  );
}
