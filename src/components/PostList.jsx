import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import "./Post.css";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function PostList() {
  const data = useLocation().state;
  const [list, setList] = useState();
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .post("/postsList", data)
      .then((res) => {
        console.log(res);
        setList(res.data);
        setRender(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="postList">
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
