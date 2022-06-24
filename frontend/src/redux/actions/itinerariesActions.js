import axios from "axios";

const itinerariesActions ={

    findTimFromCity: (id) => {
        return async (dispatch, getState) =>{
            const res = await axios.get('http://localhost:4000/api/itineraries/city/' + id )
            dispatch({type: 'FIND_ITINERARIES', payload: res.data.response.itineraries})
        }
    }
}

export default itinerariesActions;