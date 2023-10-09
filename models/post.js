import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    Date: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model('post',PostSchema)