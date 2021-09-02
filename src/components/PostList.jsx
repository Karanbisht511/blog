import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel_cont, Post } from "./Post";
import "./Post.css";
import "./PostList.css";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function PostList() {
  const data = useLocation().state;
  const [list, setList] = useState();
  const [render, setRender] = useState(false);

  console.log("postList:", data);

  useEffect(() => {
    axios
      .post("/postsList", data)
      .then((res) => {
        console.log(res.data);
        setList(res.data);
        setRender(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <Router>
      <div className="postList">
        {console.log("rendering here:", list)}
        {render &&
          list.map((element) => {
            return (
              <Link
                className="list"
                to={{
                  pathname: "/post",
                  state: { postTitle: element.post.title },
                }}
              >
                {element.post.title}
              </Link>
            );
          })}
      </div>
      <Switch>
        <Route path="/post">
          <Post></Post>
        </Route>
      </Switch>
    </Router>
  );
}

export default PostList;
