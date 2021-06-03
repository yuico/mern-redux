import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes)

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies 
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://user1:user1user1@cluster0.xenq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.POPR || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify', false)