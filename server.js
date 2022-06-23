require('dotenv').config()
require('./config/database')
const express = require('express')
const Router = require('./routes/routes')
const cors = require('cors')
const PORT = process.env.SERVER_PORT;

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use('/api', Router)


app.listen(PORT, () => console.log('Server ready on PORT ' + PORT))