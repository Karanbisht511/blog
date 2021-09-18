import React from "react";
import CardsContainer from "./Cards";
import Mid from "./Mid";

function UpperMid() {
  return (
    <div>
      <Mid className="mid-section"></Mid>
      <CardsContainer></CardsContainer>
    </div>
  );
}

export default UpperMid;
