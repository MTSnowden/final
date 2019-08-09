const mongoose = require('mongoose')
const { Auth, projectSchema } = require('./schemas')


const AuthModel = mongoose.model('Auth', Auth, 'auth')

const ProjectModel = mongoose.model("Project", projectSchema);

module.exports = {
  AuthModel,
  ProjectModel
}