const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const router = require('./routes/router')

const app = express()
const apiPort = 80

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use('api', router)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
