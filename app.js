const express = require('express')
const env = require('dotenv')
const router = require('./routes/route')

//initializing env
env.config()

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on port ${port}!`))

//Middleware
app.use(express.json())

//Middleware Routes
app.use(router);






