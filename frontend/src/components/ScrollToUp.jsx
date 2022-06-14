import React, { useState } from "react";

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
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <>
        {
            visible ? <button className="buttonToUp" onClick={scrollToTop}><img src={require("../img/flechaUp.png")} alt="" /></button> : <></>
        }
        </>
    );
  }

export default ScrollToUp;