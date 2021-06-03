import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies 