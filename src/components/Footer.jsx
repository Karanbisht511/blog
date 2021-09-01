import React from "react";
import "./Footer.css";

const year= new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p> copyright@ Daynite Blogging {year} </p>
    </div>
  );
}

export default Footer;
