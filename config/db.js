import mongoose, { mongo } from "mongoose";

const DB = () => {
    mongoose.connect(
        process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("MongoDB connect");
        }).catch((err) => {
            console.log(err)
        })
}

export default DB;