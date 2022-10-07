const register = require("../Model/register.model")
const bcrypt = require("bcrypt")
const saltRounds = 10

const getUser = async (req, res) => {
    try {
        const users = await register.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            const newUser = register({
                fullname: req.body.fullname,
                mobileNo: req.body.mobileNo,
                email: req.body.email,
                gender: req.body.gender,
                image: (req.file) ? req.file.filename : null,
                password: hash,
            })
            await newUser.save()
            res.status(201).json(newUser)
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        // console.log(req.body)
        const loginData = await register.findOne({ email: email })
        if (loginData) {
            bcrypt.compare(password, loginData.password, function (err, result) {
                if (result) {
                    res.status(202).json(loginData)
                }
                else {
                    res.status(500).send(err)
                }
            })
        }
        else {
            res.status(500).send("Client not found")
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getUser, createUser, loginUser }