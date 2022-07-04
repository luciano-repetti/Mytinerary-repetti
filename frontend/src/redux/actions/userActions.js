import axios from 'axios'

const userActions = {

    userSignUp: (userDate) => {
        return async (dispatch, getState) =>{
            const res = await axios.post("http://localhost:4000/api/auth/signup", {userDate})
            dispatch({
                type: "message",
                payload: {
                    message: res.data.message,
                    success: res.data.success,
                    from: res.data.from
                }
            })
            return res.data
        }
    },

    userSignIn: (loginUser) =>{
        return async (dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/auth/signin", {loginUser})
            if(res.data.success){
                dispatch({
                    type: "user", payload: res.data.response
                })
            }else{
                dispatch({
                    type: "message", payload:{view: true, message: res.data.message, success: res.data.success}
                })
            }
            return res.data
        }
    }
}

export default userActions;