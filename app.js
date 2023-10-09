import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import DB from './config/db.js';
import Auth from './routes/auth.js'
import Post from './routes/post.js'

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());
DB();
app.use('/', Auth)
app.use('/', Post)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});
