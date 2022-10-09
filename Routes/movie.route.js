const express = require("express")
const router = express.Router()
const { getMovie, postMovie, deleteMovie } = require("../Controller/movie.controller")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/Images/Movies')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get("/",getMovie)
router.post("/", upload.single('image') ,postMovie)
router.delete("/:id", deleteMovie)

module.exports = router