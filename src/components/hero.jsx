import React from "react";








function Hero() {
  return (
    <div className="hero">
      <div className="containHero">
        <div className="containLetter">
          <h2>MyTinerary</h2>
          <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        </div>
        <div className="containButton">
          <p>Press the button to go to cities</p>
          <button className="buttonEdifice"><img src={require("../img/edificios.png")} alt="" />Cities</button>
        </div>
      </div>
    </div>
  );
  }


export default Hero;
