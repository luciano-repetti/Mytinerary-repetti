const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const itinerariesControllers = require('../controllers/itinerariesControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity} = citiesControllers;
const {getItineraries, addItinerary, findTimFromCity} = itinerariesControllers;

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


module.exports = Router
