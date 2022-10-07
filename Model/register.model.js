const mongoose = require("mongoose")

const register = mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    mobileNo: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("User",register)