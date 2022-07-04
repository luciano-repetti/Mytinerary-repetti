const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    nameItinerary:{type:String, required:true},
    user:{
        nameUser:{type:String, required: true},
        imgUser:{type:String, required: true}
    },
    price:{type:String, required: true},
    duration:{type:Number, requiered: true},
    hashtags:{type:Array, requiered: true},
    likes:{type:Number, required: true},
    city: {type:mongoose.Types.ObjectId, ref:'cities'}
});

const Itinerary = mongoose.model('itineraries', itinerarySchema);
module.exports = Itinerary;