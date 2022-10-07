const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    duration:{
        type: String,
        require: true
    },
    releaseDate:{
        type: String,
        require: true
    },
    genre:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    location:{
        type: [String],
        require: true
    },
    hall:{
        type: Object,
        require: true
    },
    movieImage:{
        type: String,
        require: true
    },
    creadtedOn:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("movie", movieSchema)