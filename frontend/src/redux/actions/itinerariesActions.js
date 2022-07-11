import axios from "axios";

const itinerariesActions ={

    findTimFromCity: (id) => {
        return async (dispatch, getState) =>{
            const res = await axios.get('http://localhost:4000/api/itineraries/city/' + id )
            dispatch({type: 'FIND_ITINERARIES', payload: res.data.response.itineraries})
        }
    },

    likes: (id) =>{
        let token = localStorage.getItem('token')
        return async (dispatch, getState) =>{
            try{
                await axios.post('http://localhost:4000/api/itineraries/like/'+ id, {}, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default itinerariesActions;