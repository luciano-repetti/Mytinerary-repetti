import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link as LinkRouter} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import userActions from "../redux/actions/userActions";
import toast, { Toaster } from 'react-hot-toast';


function Header() {
  const [menu, setMenu] = useState(false)
  
  const user = useSelector(store => store.userReducer.user)
  const message = useSelector(store => store.userReducer.snackbar)

  useEffect(()=>{
    toast(message.message,{
        icon: "✈️",
    })
  },[])


  function handleToggleMenu(){
      setMenu(!menu)
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function signOut(){ 
    dispatch(userActions.signOut())
    setTimeout(function () {
      navigate("/", { replace: true });
      }, 1000);
  }

  return (
    <>
      <header>
        <div className="containerLogo">
          <img className="logo" src={require("../img/logo.png")} alt="" />
          <nav className="navegation">
            <ul>
              <li><LinkRouter to={'./'}>Home</LinkRouter></li>
              <li><LinkRouter to={'./cities'}>Cities</LinkRouter></li>
            </ul>
          </nav>
        </div>
        <div className="user">
          <button className="button" id="buttonProfile" onClick={handleToggleMenu}>
            <img className="userImg" src={user ? `${user.imgUrl}` : require("../img/user.png")} alt="" />
          </button>
          <div id="menuProfile" className={menu ? "profile show" : "profile"}>
          {
            !user ? <><LinkRouter to={'./credentials'}>Sign Up</LinkRouter><LinkRouter to={'./credentials'}>Login</LinkRouter></> : <a href="" onClick={signOut}>Sign Out</a>
          }
          <Toaster />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
