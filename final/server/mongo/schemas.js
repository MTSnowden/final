const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Auth = new Schema({
  userName: String,
  password: String
})

const projectSchema = new Schema({
  client: {
      type: String
  },
  title: {
      type: String
  },
  description: {
      type: String
  },
  charge: {
      type: String
  },
  due: {
    type: String
}
});

module.exports = { Auth, projectSchema }