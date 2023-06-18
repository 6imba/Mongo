const express = require('express')
require('./db/conn.js')

const app = express()
const Categories = require('./models/schema1')
// console.log(Categories)

app.get('/', (req, res, next) => {
    res.send("<form action='/create' method='POST'> <input type='text'/> <input type='submit' value='Create'/></form>")
})
app.post('/create', (req, res, next) => {
    console.log("hi")
    const categoryObj = new Categories()
})

app.listen(8015)