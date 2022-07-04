import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import userActions from "../redux/actions/userActions";
import GoogleSignUp from "./GoogleSignUp";
import GoogleSignIn from "./GoogleSignIn";

function Crediantls(){

    const [credentials, setCredentials] = useState(false)
    const [infoSignUp, setInfoSignUp] = useState(null)
    const [infoSignIn, setInfoSignIn] = useState(null)

    function showPassword(idInputPass, idIconPass){
        let type = document.getElementById(idInputPass)
        let icon = document.getElementById(idIconPass)
        if(type.type == "password"){
            type.type = "text"
            icon.classList.remove("bi-eye-slash-fill")
            icon.classList.add("bi-eye-fill")
        }else{
            type.type = "password"
            icon.classList.remove("bi-eye-fill")
            icon.classList.add("bi-eye-slash-fill")
        }
    }

    function toggleCredentials(){
        setCredentials(!credentials)
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signInSubmit = async (event) => {
        event.preventDefault()
        const loginUser ={
            mailPhone: event.target[0].value,
            password: event.target[1].value,
            from: "Sign Up"
        }
        console.log(loginUser)

        setInfoSignIn(await dispatch(userActions.userSignIn(loginUser)))
        console.log(infoSignIn)
    }

    const SignUpSubmit = async (event) => {
        event.preventDefault()
        const userData = {
            fullName: event.target[0].value,
            mailPhone: event.target[1].value,
            imgUrl: event.target[2].value,
            password: event.target[3].value,
            confirmPass: event.target[4].value,
            from: "Sign Up",
            role: "user",
        }
        let res = await dispatch(userActions.userSignUp(userData))

        if(res.success){
            try{
                navigate("/credentials", {replace: true})
                setInfoSignUp(res)
            }catch(err){
                console.log(err)
            }
        }else{
            setInfoSignUp(res)
        }
    }
    
    
    return(
        <section className="mainIndex">
            <div className="conatinerCredentials">
                <div className="sign">
                    {
                        credentials ?
                        <form onSubmit={signInSubmit}>
                        <h2 style={{textAlign: "center"}}>SIGN IN</h2>
                        <input type="text" name="mail-telefono" placeholder="Mail o Phone"/>
                        <div className="password">
                            <input type="password" name="contraseña" placeholder="Password" id="password1"/>
                            <p onClick={() => showPassword("password1", "iconPass1")}><i id="iconPass1" className="bi bi-eye-slash-fill"></i></p>
                        </div>
                        <div className="checkedPass">
                            <input id="checkPass" type="checkbox" defaultChecked="true"/>
                            <label htmlFor="checkPass">Remind me</label>
                        </div>
                        <input type="submit" name="" value="Sign In" />
                        {
                            infoSignIn && <p className={infoSignIn.success ? "messageSignUpTrue" : "messageSignUpFalse"}>{infoSignIn.message}</p>
                        }
                        <GoogleSignIn />
                        <p className="haveAccount">You have an account?
                            <a className="expand" onClick={toggleCredentials}>SIGN UP</a>
                        </p>
                    </form>
                    :
                    <form onSubmit={SignUpSubmit}>
                        <h2 style={{textAlign: "center"}}>SIGN UP</h2>
                        <input type="text" name="fullname" placeholder="Fullname"/>
                        <input type="text" name="mail-telefono" placeholder="Mail o Phone"/>
                        <input type="text" name="usuario" placeholder="Image url" />
                        <div className="password">
                            <input type="password" name="contraseña" placeholder="Password" id="password1"/>
                            <p onClick={() => showPassword("password1", "iconPass1")}><i id="iconPass1" className="bi bi-eye-slash-fill"></i></p>
                        </div>
                        <div className="password">
                            <input type="password" name="contraseña" placeholder="Confirm Password" id="password2"/>
                            <p onClick={() => showPassword("password2", "iconPass2")}><i id="iconPass2" className="bi bi-eye-slash-fill"></i></p>
                        </div>
                        <div className="checkedPass">
                            <input id="checkPass" type="checkbox" defaultChecked="true"/>
                            <label htmlFor="checkPass">Remind me</label>
                        </div>
                        <input type="submit" name="" value="Sign Up" />
                        {
                            infoSignUp && infoSignUp.from === "validator" ? infoSignUp.message.map((message, index) => <p key={index} className="messageSignUpFalse">{message.message}</p>) :
                            infoSignUp && <p className={infoSignUp.success ? "messageSignUpTrue" : "messageSignUpFalse"}>{infoSignUp.message}</p>
                        }
                        <GoogleSignUp />
                        <p className="haveAccount">Do you have an account?
                            <a className="expand" onClick={toggleCredentials}>SIGN IN</a>
                        </p>
                    </form>
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Crediantls