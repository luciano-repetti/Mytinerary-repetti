import React, {useEffect, useState} from "react"
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions"

export default function GoogleSignUp(){

    const [infoSignUp, setInfoSignUp] = useState(null)
    const dispatch = useDispatch()

    async function handdleCallBackResponse(response){
        let userObject = jwt_decode(response.credential)

        const userData = {
            fullName: userObject.name,
            mailPhone: userObject.email,
            imgUrl: userObject.picture,
            password: userObject.sub,
            confirmPass: userObject.sub,
            from: "google",
            role: "user",
        }
        setInfoSignUp(await dispatch(userActions.userSignUp(userData)))
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
            {infoSignUp && <p className={infoSignUp.success ? "messageSignUpTrue" : "messageSignUpFalse"} style={{marginBottom: "1rem"}}>{infoSignUp.message}</p>}
        </div>
    )
}