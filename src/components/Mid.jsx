import React, { useState, useEffect } from "react";
import "./Mid.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostList from "./PostList";
import { Post } from "./Post";

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

  const [title, setTitle] = useState();

  function handleOnChange(event) {
    let data = event.target.value;
    setTitle(data);
    console.log(data);
  }

  // window.onscroll = function () {
  //   console.log("scroll");
  //   let topics = document.querySelector(".mid");
  //   if (document.documentElement.scrollTop > 100) {
  //     topics.classList.add("fix-mid-top");
  //   } else if (document.documentElement.scrollTop < 100) {
  //     topics.classList.remove("fix-mid-top");
  //   }
  // };

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
                <button class="btn btn-primary mt-3" type="submit">
                  {element.name}
                </button>
                {/* <img src="../images/004-coronavirus.png" alt="" /> */}
              </Link>
            );
          })}

        <div className="search-here">
          <input
            className="form-control"
            onChange={handleOnChange}
            type="text"
            name="title"
            id="toSearch"
            placeholder=" Search for..."
            value={title}
          ></input>
          <Link to={{ pathname: "/post", state: { postTitle: title } }}>
            <button
              class="btn btn-secondary"
              type="button"
              onClick={() => {
                setTitle("");
              }}
            >
              Search
            </button>
          </Link>
        </div>

        <Switch>
          <Route path="/PostList">
            <PostList></PostList>
          </Route>
          <Route path="/post">
            <Post></Post>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Mid;
