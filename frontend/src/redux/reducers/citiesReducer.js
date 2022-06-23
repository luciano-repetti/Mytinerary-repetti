const initialState = { 
    cities: [],
    city: [],
    filterCity: []
}

const citiesReducer = (state = initialState, action) => {
    //console.log(action);
    //console.log(state);
    switch(action.type) {
        case 'GETCITIES':
            return {
                ...state,
                cities: action.payload,
                filterCity: action.payload
            }
        case 'GETONECITY':
            return{
                ...state,
                city: action.payload
            }
        case 'FILTERCITIES':
            let filter = state.cities.filter(city => city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()))
            return{
                ...state,
                filterCity: filter
            }
        default:
            return state
    }
}
export default citiesReducer