require("dotenv").config()

const dev = {
    app: {
        port: process.env.PORT || 8080
    },
    db:{
        url: process.env.DATABASE || "mongodb://localhost:27017/"
    }
}

module.exports = dev