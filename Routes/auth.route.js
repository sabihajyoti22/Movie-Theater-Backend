const express = require("express")
const { getUser, createUser, loginUser } = require("../Controller/auth.controller")
const router = express.Router()
const multer = require("multer")

// Uploading Image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/Images/Users')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get("/",getUser)
router.post("/register", upload.single('image'), createUser)
router.post("/login", loginUser)

module.exports = router