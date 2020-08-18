const express = require('express')
const httpHandler = require('./httpHandler')
const cors = require('cors')

const port = 5016
const app = express()

app.use(cors())
app.get('/users', httpHandler.listOfUsers)   
app.get('/pratik',httpHandler.callme)
app.get('/jantu',httpHandler.chacha)
app.listen(port, console.log("Connected on Port:", port))