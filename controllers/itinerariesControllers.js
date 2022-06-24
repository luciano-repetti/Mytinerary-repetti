const Itinerary = require('../models/itineraries')

const itinerariesControllers ={
    getItineraries: async (req, res) =>{
        let itineraries;
        let error = null
        try{
            itineraries = await Itinerary.find()
        }catch (err) {error = err}
        res.json({
            response: error ? 'error' : {itineraries},
            sucess: error ? false : true,
            error: error
        })
    },
    addItinerary: async (req, res) =>{
        const {nameItinerary, city, user, price, duration, hashtags, likes} = req.body.data
        let itinerary
        let error = null
        try{
            itinerary = await new Itinerary({
                nameItinerary: nameItinerary,
                city: city,
                user: user,
                price: price,
                duration: duration,
                hashtags: hashtags,
                likes: likes
            }).save()
        }catch(err){error = err}
        res.json({
            response: error ? 'ERROR' : {itinerary},
            sucess: error ? false : true,
            error: error
        })
    },
    findTimFromCity: async(req, res) =>{
        let cityid = req.params.id
        let itineraries
        let error = null
        try{
            itineraries = await Itinerary.find({ city:cityid })
            .populate("city")
        }catch (err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            sucess: error ? false : true,
            error: error
        })
    }
}

module.exports = itinerariesControllers;