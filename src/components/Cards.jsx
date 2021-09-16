// import { CardMedia } from "@material-ui/core";
import React, { useState } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./Cards.css";
import { Post } from "./Post";

function CardsContainer() {
  let titles = ["Indian Armed forces", "women in tech", "spiderman", "title5"];
  const [renderCards, setRenderCards] = useState(true);

  function toggleRender() {
    setRenderCards(!renderCards);
  }

  return (
    <Router>
      <div className="container">
        <div className="card-Container">
          {renderCards &&
            titles.map((element, index) => {
              return (
                <div key={index} className="card">
                  <h3>{element}</h3>
                  <img
                    src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?size=626&ext=jpg"
                    alt={element}
                  />
                  <p className="shorts">shorts</p>
                  <Link
                    onClick={toggleRender}
                    className="card-list-link"
                    to={{
                      pathname: "/post",
                      state: { postTitle: element },
                    }}
                  >
                    <button>see more</button>
                  </Link>
                </div>
              );
            })}
        </div>

        <Switch>
          <Route path="/post">
            <Post triggerToggleRender={toggleRender}></Post>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default CardsContainer;
