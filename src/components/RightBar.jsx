import { div } from "prelude-ls";
import React from "react";
import "./RightBar.css";

function RightBar() {
  return (
    <div className="rightBar">
      <ul className="first-list list">
        <img src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2019/08/29094121/earth2050-robot-protestor.jpg" alt="" />
      </ul>

      <ul className="second-list list">
        <li>Add: 
          <a href="#">CLick here to learn web developwent in one month</a>
        </li>
      </ul>
    </div>
  );
}

export default RightBar;
