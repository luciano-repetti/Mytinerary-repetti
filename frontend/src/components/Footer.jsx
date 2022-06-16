import React from "react";
import {Link as LinkRouter} from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="navFooter">
        <div className="buttonNav">
          <LinkRouter to={'/'}>Home</LinkRouter>
        </div>
        <div className="buttonNav">
          <LinkRouter to={'./Cities'}>Cities</LinkRouter>
        </div>
      </div>
      <div className="social">
          <a href="https://web.whatsapp.com/"><img src={require("../img/whatsapp.png")} alt="" /></a>
          <a href="https://www.instagram.com/?hl=es-la"><img src={require("../img/instagram.png")} alt="" /></a>
          <a href="https://twitter.com/"><img src={require("../img/twitter.png")} alt="" /></a>
      </div>
      <p>&#169; 2022 MyTinerary Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
