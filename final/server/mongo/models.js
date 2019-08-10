const mongoose = require('mongoose')
const { Auth, projectsSchema } = require('./schemas')


const AuthModel = mongoose.model('Auth', Auth, 'auth')

const ProjectsModel = mongoose.model("Projects", projectsSchema, 'projects');

module.exports = {
  AuthModel,
  ProjectsModel
}