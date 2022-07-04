const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{type: String, required: true},
    mailPhone:{type: String, required: true},
    imgUrl:{type: String, required: true},
    country:{type: String},
    password:[{type: String, required: true}],
    from:{type: Array, required: true},
    role:{type: String, required: true},
    verification: {type: Boolean, required: true},
    uniqueString: {type: String, required: true},

});

const User = mongoose.model('users', userSchema);
module.exports = User