const express = require("express")
const cors = require("cors")

const connectDB = require("./database")

const authRoutes = require("./routes/auth")
const worldRoutes = require("./routes/worlds")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use(express.static("public"))

app.use("/api/auth", authRoutes)
app.use("/api/worlds", worldRoutes)

app.listen(3000, () => {

    console.log("🚀 NeuralVerse running on http://localhost:3000")

})