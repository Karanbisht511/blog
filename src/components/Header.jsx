// import { div } from "prelude-ls";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
import Topic from "./Topic";
import Login from "./Login";
import "./Login.css";
import Signup from "./Signup";
import "./Signup.css";
import Setting from "./Setting";
import Notes from "./Notes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faCoffee } from "@fortawesome/free-solid-svg-icons";

// elements to use fontawesome icons
const notif = <FontAwesomeIcon icon={faBell} />;
const setting = <FontAwesomeIcon icon={faCog} />;

function Header() {
  const [showLogin, setLoginShow] = useState(false);
  const [showSignup, setSignupShow] = useState(false);

  return (
    <div id="header-container">
      <div id="logo" className="header-elements">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164153/8_big22-768x591.png"
          alt="logo"
        />
      </div>

      <ul id="header-navbar-mid" className="header-elements header-list">
        <h1>DayNite Blogging</h1>
      </ul>

      <ul id="header-navbar-right" className="header-elements header-list">
        <li>{notif}</li>
        <li>
          <Setting>{setting}</Setting>
        </li>
        <li
          className="pick"
          onClick={() => {
            setLoginShow(() => !showLogin);
            if (showSignup === true) setSignupShow(() => !showSignup);
          }}
        >
          <button type="button" class="btn btn-info">
            Login
          </button>
        </li>

        <li
          onClick={() => {
            setSignupShow(() => !showSignup);
            if (showLogin === true) setLoginShow(() => !showLogin);
          }}
        >
          <button type="button" class="btn btn-success">
            Sign up
          </button>
        </li>
      </ul>

      <Login show={showLogin}></Login>
      <Signup show={showSignup}></Signup>

      {/* <div id="topic">
        <Topic />
      </div> */}

      {/* <Notes></Notes> */}
    </div>
  );
}

// function Header() {
//   // const [showLogin, setLoginShow] = useState(false);
//   // const [showSignup, setSignupShow] = useState(false);

//   // window.onscroll = function () {
//   //   console.log("scroll");
//   //   let topics = document.querySelector("#topic");
//   //   if (document.documentElement.scrollTop > 100) {
//   //     topics.classList.add("fix-topic-top");
//   //   } else if (document.documentElement.scrollTop < 100) {
//   //     topics.classList.remove("fix-topic-top");
//   //   }
//   // };

//   return (
//     <Router>
//       <div id="header-container">
//         <div id="logo" className="header-elements">
//           <img
//             src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164153/8_big22-768x591.png"
//             alt="logo"
//           />
//         </div>

//         <ul id="header-navbar-mid" className="header-elements header-list">
//           <h1>DayNite Blogging</h1>
//         </ul>

//         <ul id="header-navbar-right" className="header-elements header-list">
//           <li>{notif}</li>
//           <li>
//             <Setting>{setting}</Setting>
//           </li>
//           <li>
//             <button type="button" class="btn btn-info">
//               <Link to="/login">Login</Link>
//             </button>
//           </li>

//           <li>
//             <button type="button" class="btn btn-success">
//               <Link to="/signup"> Sign up</Link>
//             </button>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/login">
//             <Login></Login>
//           </Route>
//           <Route path="/signup">
//             <Signup></Signup>
//           </Route>
//         </Switch>
//         {/* <div id="topic">
//         <Topic />
//       </div> */}

//         {/* <Notes></Notes> */}
//       </div>
//     </Router>
//   );
// }

export default Header;
