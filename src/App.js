import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Carousel_cont, Post, slider_img } from "./components/Post";
import RightBar from "./components/RightBar";
import CardsContainer from "./components/Cards";
import Mid from "./components/Mid";
import AddContent from "./components/AddContent";

function App() {
  // const [renderPost, setRenderPost] = useState(false);

  return (
    <div className="App">
      <Header />

      {/* <Carousel_cont /> */}
      <Mid className="mid-section"></Mid>
      <CardsContainer></CardsContainer>

      <Footer></Footer>
    </div>
  );
}

export default App;
