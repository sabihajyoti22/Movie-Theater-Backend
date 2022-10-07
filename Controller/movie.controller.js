const movieSchema = require("../Model/movie.model")

const getMovie = async(req,res) => {
    try {
        const movies = await movieSchema.find()
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const postMovie = async (req,res) => {
    try {
        const newMovie = movieSchema({
            name: req.body.name,
            duration: req.body.duration,
            releaseDate: req.body.release,
            genre: req.body.genre,
            price: req.body.price,
            category: req.body.category,
            location: req.body.location,
            hall: JSON.parse(req.body.hall),
            image: (req.file) ? req.file.filename : null
        })
        await newMovie.save()
        res.status(201).json(newMovie)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getMovie, postMovie} 