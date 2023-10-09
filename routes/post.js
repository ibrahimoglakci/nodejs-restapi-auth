import express from 'express'
import { all, create, deletePost, get, update } from '../controllers/post.js'


const router = express.Router()

router.get('/api/v1/posts', all)
router.post('/api/v1/posts', create)
router.get('/api/v1/post/:id', get)
router.patch('/api/v1/post/:id', update)
router.delete('/api/v1/post/:id', deletePost)

export default router;