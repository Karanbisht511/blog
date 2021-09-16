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
                  <p className="shorts"></p>
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

        {/* <Container>
        <Row lg={4} md={2} sm={1}>
          <Col>
            <Card border="info">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?size=626&ext=jpg"
              />
              <Card.Body>
                <Card.Title>{titles[0]}</Card.Title>
                <Card.Text>
                  Technology is going to dominate in future says the..
                </Card.Text>
                <Button variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="info">
              <Card.Img
                variant="top"
                src="http://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2012/02/06235912/peace-on-earth43194edit.jpg"
              />
              <Card.Body>
                <Card.Title>{titles[1]}</Card.Title>
                <Card.Text>
                  The rise in temperature we are witnessing today is the..
                </Card.Text>
                <Button variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="info">
              <Card.Img
                variant="top"
                src="https://images.newscientist.com/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small.jpg?width=600"
              />
              <Card.Body>
                <Card.Title>{titles[2]}</Card.Title>
                <Card.Text>
                  Discovery of a new planet named as planet-Z has made the..
                </Card.Text>
                <Button variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="info">
              <Card.Img
                variant="top"
                src="https://static.india.com/wp-content/uploads/2021/06/CBSE-12th-Board-Exam-1-369x246.jpg"
              />
              <Card.Body>
                <Card.Title>{titles[3]}</Card.Title>
                <Card.Text>
                  Karan has no active backs since 3rd semester! Its a record..
                </Card.Text>
                <Button variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      </div>
    </Router>
  );
}

export default CardsContainer;
