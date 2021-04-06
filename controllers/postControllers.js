const Post = require('../models/Post')
module.exports = {
    async getAllPosts(req, res){
        try {
            let query = Post.find()

            const page = parseInt(req.query.page) || 1
            const pageSize = parseInt(req.query.limit) || 18;
            const skip = (page - 1) * pageSize
            const total = await Post.countDocuments()

            const pages = Math.ceil(total / pageSize)

            query = query.skip(skip).limit(pageSize)

            const result = await query

            // if(page > pages){
            //     return res.status(404).json({
            //         status: "fail",
            //         message: "No Page found"
            //     })
            // }

            res.status(200).send({
                status: 'success',
                count: result.length,
                page,
                pages,
                data: result
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: "error",
                message: "server error"
            })
            
        }
    },
}