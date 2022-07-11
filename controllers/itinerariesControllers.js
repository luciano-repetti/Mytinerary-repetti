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

    modifyItinerary: async (req, res)=> {
        const id = req.params.id
        const itinerary = req.body.data
        let itinerarydb
        let error = null
        try{
            itinerarydb = await Itinerary.findOneAndUpdate({_id: id}, itinerary,  {new: true})
        }catch(err) {error = err}
        res.json({
            response: error ? 'ERROR' : {itinerary},
            sucess: error ? false : true,
            error: error,
            console: console.log(error)
        })
    },

    findTimFromCity: async(req, res) =>{
        let cityid = req.params.id
        let itineraries
        let error = null
        try{
            itineraries = await Itinerary.find({ city:cityid })
            .populate("city").populate("activities").populate("comments.userID", {fullName:1, imgUrl:1})
        }catch (err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            sucess: error ? false : true,
            error: error
        })
    },

    likes: async (req, res) =>{
        const id = req.user.id
        const itineraryId = req.params.id
        try{
            if(req.user !== null){
                const itinerary = await Itinerary.findOne({_id: itineraryId})
                const likeExist = itinerary.likes.includes(id)
                console.log(likeExist)
                if(!likeExist){
                    itinerary.likes.push(id)
                    await itinerary.save()
                }else{
                    itinerary.likes.remove(id)
                    await itinerary.save()
                }
                res.json({
                    success: true,
                    message: "funciona"
                })
            }else{
                res.json({
                    success: false,
                    message: "To perform this action you must log in."
                })
            }
        }catch(error){
            res.json({
                success: false,
                message: "Error in the server.",
                console: console.log(error)
            })
        }
    }
}

module.exports = itinerariesControllers;