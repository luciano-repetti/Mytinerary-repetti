const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    name:{type: String, required:true},
    country:{type: String, required:true},
    description:{type: String, required:true},
    imgUrl:{type: String, required:true}
});

const City = mongoose.model('cities', citiesSchema);
module.exports = City