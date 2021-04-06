require('dotenv').config({path: './config.env'})
const fs = require('fs')
const Post =  require('../models/Post')
const connectDB = require('../config/db')

connectDB()

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`))

const importData = async ()=>{
    try{
        await Post.create(posts)
        console.log('Posts successfully created')
        process.exit()
    }catch(error){
        console.log(`ERROR: ${error}`)
        process.exit(1)
    }
}

const deleteData = async ()=>{
    try{
        await Post.deleteMany({})
        console.log("Post successfully deleted")
        process.exit()
    }catch(error){
        console.log(`Error Deleting: ${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '--import'){
    importData()
}else if (process.argv[2] === '--delete'){
    deleteData()
}