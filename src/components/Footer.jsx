import React from "react";
import "./Footer.css";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer_title">
        DayNite <span>Blogging</span>
      </h1>
      <p className="footer_f">&#169; All Rights Reserved {year}</p>
    </div>
  );
}

export default Footer;
