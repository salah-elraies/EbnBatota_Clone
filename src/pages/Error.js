import React from "react";
import { Link } from "react-router-dom";
import image from "./duckErrorPage-min.png"

import "./Error.css"
export default function Error() {
  
  return (
    <section className="error-page">
      <div className="error-container">
        <img src={image} alt="Shit"/>
        <Link to="/" className="return">
          Let's Go Home
        </Link>
      </div>
    </section>
  );
}
