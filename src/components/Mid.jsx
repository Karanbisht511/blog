import React, { useState, useEffect } from "react";
import "./Mid.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostList from "./PostList";

function Mid() {
  const [domainArray, setDomainArray] = useState();
  const [render, setRender] = useState(false);
  useEffect(() => {
    axios
      .get("/domains")
      .then((res) => {
        console.log(res);
        setDomainArray(res.data.domain);
        setRender(true);
      })
      .catch((err) => {
        console.log("nahi hora bhai", err);
      });
  }, []);

  window.onscroll = function () {
    console.log("scroll");
    let topics = document.querySelector(".mid");
    if (document.documentElement.scrollTop > 100) {
      topics.classList.add("fix-mid-top");
    } else if (document.documentElement.scrollTop < 100) {
      topics.classList.remove("fix-mid-top");
    }
  };

  return (
    <Router>
      <div className="mid">
        {render &&
          domainArray.map((element) => {
            return (
              <Link
                className="domain"
                to={{ pathname: "/PostList", state: { domain: element.name } }}
              >
                {element.name}
              </Link>
            );
          })}
        <Switch>
          <Route path="/PostList">
            <PostList></PostList>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Mid;
