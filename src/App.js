import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Carousel_cont, Post } from "./components/Post";
import RightBar from "./components/RightBar";
import CardsContainer from "./components/Cards";
import Mid from "./components/Mid";

function App() {
  // const [renderPost, setRenderPost] = useState(false);

  return (
    <div className="App">
      <Header />
      <Mid className="mid-section"></Mid>
      <Carousel_cont />
      <CardsContainer></CardsContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
