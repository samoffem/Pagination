const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please Provide a title"]
    },
    author:{
        type: String,
        required: [true, "Please Provide an author"]
    },
    body:{
        type: String,
        required: [true, "Please Provide a body"]
    },
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post