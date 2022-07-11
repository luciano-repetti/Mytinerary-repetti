const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    imgUrl: {type: String, required: true},
    description:{type: String, required: true}
});

const Activity = mongoose.model('activities', activitiesSchema)
module.exports = Activity