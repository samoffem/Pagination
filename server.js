require('dotenv').config({path: "./config.env"})
const express = require('express')
const connectDB = require('./config/db')
const postRoutes = require('./routes/postRoute')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/posts', postRoutes)

const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`app started on port ${PORT}`))