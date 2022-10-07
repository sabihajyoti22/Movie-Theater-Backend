const express = require("express")
const cors = require("cors")
const auth = require("./Routes/auth.route")
const movie = require("./Routes/movie.route")
const app = express()

// CORS
app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/uploads", express.static("Uploads"))

// Connecting Databse
require("./Config/db")

app.get("/",(req,res)=>{
    res.send("<h1>Home Route</h1>")
})

// All Routes
app.use("/api/client", auth)
app.use("/api/admin", movie)

app.use((req,res,next)=>{
    res.send("<h1>Route Not Found</h1>")
})

app.use((error,req,res,next)=>{
    res.send("<h1>Server Not Found</h1>")
})

module.exports = app