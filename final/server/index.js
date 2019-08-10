const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./express/routes/auth')
const path = require('path')


mongoose.connect('mongodb+srv://admin:admin@cluster0-vbnzk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(()=>console.log('mongoDB connected'))
  .catch(err => console.log(err))


const app = express()

if (process.env.NODE_ENV === "production") {
  app.use(express.static('src/build'))
}

app.use(bodyParser.json())
app.use('/', router)
app.use(cookieParser())

app.use(express.static(path.join(__dirname,"../build")));


const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`)
})
