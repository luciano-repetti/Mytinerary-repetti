import React,{useState} from "react";
import {Link as LinkRouter} from "react-router-dom"



function Header() {
  const [menu, setMenu] = useState(false)
  const [arrow, setArrow] = useState(false)
  function handleToggleMenu(){
    setMenu(!menu)
    setArrow(!arrow)
  }

  return (
    <>
      <header>
        <div className="containerLogo">
          <img className="logo" src={require("../img/logo.png")} alt="" />
          <nav className="navegation">
            <ul>
              <li><LinkRouter to={'./'}>Home</LinkRouter></li>
              <li><LinkRouter to={'./Cities'}>Cities</LinkRouter></li>
            </ul>
          </nav>
        </div>
        <div className="user">
          <button className="button" onClick={handleToggleMenu}>
            <img className="userImg" src={require("../img/user.png")} alt="" />
          </button>
          <div>
            <img id="arrow" className={arrow ? "arrow show" : "arrow"} src={require("../img/arrow.png")} alt="" />
          </div>
            <div id="menuProfile" className={menu ? "profile show" : "profile"}>
              <a href="">Sign Up</a>
              <a href="">Sign In</a>
            </div>
        </div>
      </header>
    </>
  );
}

export default Header;
