import React from "react";
import "./Footer.css";

const year= new Date().getFullYear();

function Footer() {
  return (
    <div class="footer">
        <h1 class="footer_title">DayNite <span>Blogging</span></h1>
        <p class="footer_f">&#169; All Rights Reserved {year}</p>
    </div>
  );
}

export default Footer;
