import Post from '../models/post.js'



const create = async(req, res) => {
    try {
        const createPost = await Post.create(req.body)

        return res.status(201).json({
            createPost
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const all = async(req, res) => {
    try {
        const posts = await Post.find()

        return res.status(200).json({
            posts
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const get = async(req, res) => {
    try {
        const {id} = req.params
        const post = await Post.findById(id)
        return res.status(200).json({
            post
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const update = async(req, res) => {
    try {
        const {id} = req.params
        const post = await Post.findByIdAndUpdate(id, req.body, {new: true})
        return res.status(200).json({
            post
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const deletePost = async(req, res) => {
    try {
        const {id} = req.params
       await Post.findByIdAndRemove(id)
        return res.status(200).json({
            message: "Succesfully deleted post"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export {create, all, get, update, deletePost}