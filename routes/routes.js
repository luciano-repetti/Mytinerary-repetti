const Router = require('express').Router();

const {getCities, getOneCity, addCity, modifyCity, removeCity} = require('../controllers/citiesControllers');
const {getItineraries, addItinerary, modifyItinerary, findTimFromCity, likes} = require('../controllers/itinerariesControllers');
const {userSignUp, userSignIn, verifyMail, verifyToken} = require('../controllers/userControllers')
const {addActivity, getActivities, removeActivity} = require('../controllers/activitiesControllers')
const {addComment, modifyComment, deleteComment} =require('../controllers/commetsControllers')
const passport = require('../config/passport')
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
.put(modifyItinerary)

Router.route('/itineraries/like/:id')
.post(passport.authenticate('jwt', { session: false }), likes)

Router.route('/auth/signup')
.post(validator,userSignUp)

Router.route('/auth/signin')
.post(userSignIn)

Router.route('/auth/verification')
.get(passport.authenticate('jwt', { session: false }) ,verifyToken)

Router.route('/verify/:string')
.get(verifyMail)

Router.route('/activities')
.post(addActivity)
.get(getActivities)

Router.route('/activities/:id')
.delete(removeActivity)

Router.route('/itinerary/comments/:id')
.post(passport.authenticate('jwt', { session: false }) ,deleteComment)

Router.route('/itinerary/comments')
.post(passport.authenticate('jwt', { session: false }) , addComment)
.put(passport.authenticate('jwt', { session: false }) , modifyComment)


module.exports = Router
