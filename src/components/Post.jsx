// import { div } from "prelude-ls";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";
import { useLocation } from "react-router";
import { Carousel } from "react-bootstrap";

// frist carousel
function Carousel_cont() {
  return (
    <div className="caro">
      <Carousel pause={true}>
        <Carousel.Item interval={10000}>
          <img
            // className="d-block w-100"
            src="https://i.pinimg.com/originals/10/82/e4/1082e4e9800d58755f87fc64d5340c4e.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Dominating Technology</h3>
            <p>Machine Learning and AI will rule over the future</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            // className="d-block w-100"
            src="https://www.setaswall.com/wp-content/uploads/2017/06/Flying-Bird-Text-Facebook-Timeline-Cover-Wallpaper-850-x-315-768x285.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <img
            // className="d-block w-100"
            src="https://live.staticflickr.com/4606/26267188318_dbd3f05f6e_o.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

function Post(props) {
  const [render, setRender] = useState(false);
  const [postInfo, setPostInfo] = useState();
  const [realTitle, setRealTitle] = useState();
  let title = useLocation().state;

  // if (title) {
  //   setRealTitle(title);
  // } else {
  //   setRealTitle(props.title);
  // }

  useEffect(() => {
    axios
      .post("/posts", title)
      .then((res) => {
        console.log(res);

        setPostInfo(res.data);

        setRender(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [title]);

  function renderPost(data) {
    return (
      <div className="post">
        <h1 className="heading">{data.post.title}</h1>
        <p>{data.post.content}</p>
      </div>
    );
  }

  return (
    <div>
      {console.log(postInfo)}
      {render && renderPost(postInfo)}
    </div>
  );
}

export { Carousel_cont, Post };
// export default Post;
