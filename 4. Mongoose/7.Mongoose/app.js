import express from "express";
import dotenv from 'dotenv'
import "./db/connection.js"
import "./model/user.js"

dotenv.config()
const app = express()
const EXPRESS_PORT = process.env.EXPRESS_PORT || '8000'

app.get('/', (req,res) => {
    console.log("Landing page mongoose...")
    res.send("Landing page Mongoose...")
})

app.listen(EXPRESS_PORT, (req,res) => {
    console.log(`Express start at http://localhost:${EXPRESS_PORT}`)
})