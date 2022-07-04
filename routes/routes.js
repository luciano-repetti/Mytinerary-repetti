const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const itinerariesControllers = require('../controllers/itinerariesControllers');
const userControllers = require('../controllers/userControllers')
const {getCities, getOneCity, addCity, modifyCity, removeCity} = citiesControllers;
const {getItineraries, addItinerary, findTimFromCity} = itinerariesControllers;
const {userSignUp, userSignIn} = userControllers
const validator = require('../config/validator')

Router.route('/cities')
.get(getCities)
.post(addCity)


Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary)

Router.route('/itineraries/city/:id')
.get(findTimFromCity)

Router.route('/auth/signup')
.post(validator,userSignUp)

Router.route('/auth/signin')
.post(userSignIn)


module.exports = Router
