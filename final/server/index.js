const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./express/routes/auth')


mongoose.connect('mongodb+srv://admin:admin@cluster0-vbnzk.mongodb.net/test?retryWrites=true&w=majority')
// MongoClient.connect({ useNewUrlParser: true })


const app = express()

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'))
}

app.use(bodyParser.json())
app.use('/', router)
app.use(cookieParser())



app.get('/', (req, res) => res.send('Default route!!!!'))


const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`)
})

