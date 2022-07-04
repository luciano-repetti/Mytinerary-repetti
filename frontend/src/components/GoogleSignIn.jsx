import React, {useEffect, useState} from "react"
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions"

export default function GoogleSignIn(){

    const [infoSignIn, setInfoSignIn] = useState(null)
    const dispatch = useDispatch()

    async function handdleCallBackResponse(response){
        let userObject = jwt_decode(response.credential)
    
        const loginUser ={
            mailPhone: userObject.email,
            password: userObject.sub,
            from: "google"
        }
        setInfoSignIn(await dispatch(userActions.userSignIn(loginUser)))
    }

    useEffect(() =>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "300879407037-cl14vjuqf65nfu7rek1fnab3n5ha572n.apps.googleusercontent.com",
            callback: handdleCallBackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "medium", shape: "pill"}
        )
    })

    return(
        <div>
            <div id="buttonDiv" style={{display: "flex", justifyContent: "center", margin: "0 0 1rem 0"}}></div>
            {infoSignIn && <p className={infoSignIn.success ? "messageSignUpTrue" : "messageSignUpFalse"}>{infoSignIn.message}</p>}
        </div>
    )
}