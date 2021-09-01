import { CardMedia } from '@material-ui/core';
import React from 'react';
import {Card, Button,Row,Col,Container} from 'react-bootstrap';
import './Cards.css';

function CardsContainer() {
    return (
        <div className='cardsContainer'>
          <Container>
  <Row lg={4} md={2} sm={1}>
    <Col>     
    <Card border="info">
  <Card.Img variant="top" src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?size=626&ext=jpg" />
  <Card.Body>
    <Card.Title>Teach-Dominance</Card.Title>
    <Card.Text>
      Technology is going to dominate in future says the..
    </Card.Text>
    <Button variant="primary">See more</Button>
  </Card.Body>
</Card>
</Col>
    <Col>
    <Card border="info">
  <Card.Img variant="top" src="http://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2012/02/06235912/peace-on-earth43194edit.jpg" />
  <Card.Body>
    <Card.Title>Burning-Globe</Card.Title>
    <Card.Text>
      The rise in temperature we are witnessing today is the..
    </Card.Text>
    <Button variant="primary">See more</Button>
  </Card.Body>
</Card>
</Col>
    <Col>
    <Card border="info">
  <Card.Img variant="top" src="https://images.newscientist.com/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small.jpg?width=600" />
  <Card.Body>
    <Card.Title>Planet-Z</Card.Title>
    <Card.Text>
      Discovery of a new planet named as planet-Z has made the..
    </Card.Text>
    <Button variant="primary">See more</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card border="info">
  <Card.Img variant="top" src="https://static.india.com/wp-content/uploads/2021/06/CBSE-12th-Board-Exam-1-369x246.jpg" />
  <Card.Body>
    <Card.Title>Karan-OP</Card.Title>
    <Card.Text>
      Karan has no active backs since 3rd semester! Its a record..
    </Card.Text>
    <Button variant="primary">See more</Button>
  </Card.Body>
</Card>
</Col>
  </Row>
</Container>

            {/* <Row xs={1} md={2} className="g-4"> */}
       






{/* </Row> */}
        </div>
    );
}

export default CardsContainer;