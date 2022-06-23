import axios from "axios";

const citiesActions = {

    getCities: () =>{
        return async (dispatch, getState) =>{
            const res = await axios.get('http://localhost:4000/api/cities')
            dispatch({type:"GETCITIES", payload:res.data.response.cities})
        }
    },
    getOneCity: (id)=>{
        return async (dispatch, getState) =>{
            const res = await axios.get("http://localhost:4000/api/cities/" + id)
            dispatch({type: "GETONECITY", payload:res.data.response.city})
        }
    },
    filterCities: (inputValue)=>{
        return (dispatch, getState) =>{
            console.log(inputValue)
            dispatch({type: 'FILTERCITIES', payload:inputValue})
        }
    }
}

export default citiesActions;