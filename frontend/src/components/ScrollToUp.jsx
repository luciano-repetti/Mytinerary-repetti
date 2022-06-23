import React, { useState } from "react";
import ScrollToTop from "./ScollToTop";

const ScrollToUp = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 180){
        setVisible(true)
      } 
      else if (scrolled <= 20){
        setVisible(false)
      }
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <>
        {
            visible ? <button className="buttonToUp" onClick={ScrollToTop}><img src={require("../img/flechaUp.png")} alt="" /></button> : <></>
        }
        </>
    );
  }

export default ScrollToUp;