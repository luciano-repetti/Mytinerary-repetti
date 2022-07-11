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
                localStorage.setItem('token', res.data.response.token)
                dispatch({
                    type: "user", payload: res.data.response.userDate
                })
            }else{
                dispatch({
                    type: "message", payload:{view: true, message: res.data.message, success: res.data.success}
                })
            }
            return res.data
        }
    },

    verifyToken: (token) => {
        return async (dispatch, getState) => {
          await axios.get('http://localhost:4000/api/auth/verification', {
            headers: { 'Authorization': 'Bearer ' + token }
          })
            .then(user => {
              if (user.data.success) {
                dispatch({ 
                  type: 'user', 
                  payload: user.data.response });
                dispatch({
                  type: 'message',
                  payload: { 
                    view: true, 
                    message: user.data.message, 
                    success: user.data.success }
                });
              } else { localStorage.removeItem('item') }
            }).catch(error => {
              if (error.response.status === 401)
                dispatch({
                  type: 'message',
                  payload: {
                    view: true,
                    message: 'Please Login again',
                    success: false
                  }
                })
              localStorage.removeItem('token')
            })
        }
      },

    signOut: () =>{
        return async (dispatch, getState) =>{
            localStorage.removeItem('token')
            dispatch({type: "user", payload: null})
        }
    }
}

export default userActions;