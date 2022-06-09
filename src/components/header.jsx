import React,{useState} from "react";



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
              <li><a href="">Home</a></li>
              <li><a href="">Cities</a></li>
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
