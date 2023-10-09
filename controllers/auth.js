import Auth from '../models/auth.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const register = async(req, res) => {
    try {
        console.log(req.body)
        const {username, email, password} = req.body
        const user = await Auth.findOne({ email })
        if (user) {
            return res.status(409).json({ message: "User is already exists" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password not be less 6 character" })
        }

        const hashPassword = await bcrypt.hash(password, 12)

        const newUser = await Auth.create({username, email, password: hashPassword})
        const userToken = await jwt.sign({id: newUser.id},process.env.AUTH_TOKEN,{expiresIn: '2h'})

        return res.status(201).json({
            status: 201,
            newUser,
            userToken
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const login = async(req,res) => {
    try {
        const {email, password} = req.body
        const user = await Auth.findOne({email})
        if(!user) {
            return res.status(404).json({
                message: "User is not found!"
            })
        }
        const compare = await bcrypt.compare(password, user.password)
        if(!compare) {
            return res.status(401).json({
                message: "Wron Username or Password!"
            })
        }
        const token = await jwt.sign({id: user.id}, process.env.AUTH_TOKEN, {expiresIn: '2h'})
        return res.status(200).json({
            user,
            token
        })
    } catch (error) {
        return res.status(500).json({
           message: error.message
        })
    }
}

export { register, login }