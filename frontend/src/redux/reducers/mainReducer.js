import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducers';
import userReducer from './userReducer';

const mainReducer = combineReducers({
    citiesReducer, itinerariesReducer, userReducer
});

export default mainReducer;