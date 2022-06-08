import React from "react";



function Header() {
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
          <button className="button" onClick={()=>{
            let menu = document.getElementById("menuProfile");
            let arrow = document.getElementById("arrow");
            if(menu.classList == "profile"){
              arrow.classList.add("show")
              menu.classList.add("show");
            }else{
              arrow.classList.remove("show")
              menu.classList.remove("show")
            }
          }}>
            <img className="userImg" src={require("../img/user.png")} alt="" />
          </button>
          <div>
            <img id="arrow" className="arrow" src={require("../img/arrow.png")} alt="" />
          </div>
          <div id="menuProfile" className="profile">
            <a href="">Sign Up</a>
            <a href="">Sign In</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
