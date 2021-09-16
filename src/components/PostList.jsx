import React, { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "./Post";
import "./Post.css";
import "./PostList.css";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function PostList() {
  const data = useLocation().state;
  const [list, setList] = useState();
  const [render, setRender] = useState(false);

  function toggleRender() {
    setRender(!render);
  }

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
          list.map((element, index) => {
            return (
              <Link
                key={index}
                className="list"
                to={{
                  pathname: "/post",
                  state: { postTitle: element.post.title },
                }}
              >
                <button type="button" className="btn btn-light">
                  {element.post.title}
                </button>
              </Link>
            );
          })}
      </div>
      <Switch>
        <Route path="/post">
          <Post triggerToggleRender={toggleRender}></Post>
        </Route>
      </Switch>
    </Router>
  );
}

export default PostList;
