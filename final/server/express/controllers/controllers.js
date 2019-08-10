const { ProjectsModel } = require("../../mongo/models");

module.exports.list = (req, res) => {
  console.log(req)
  ProjectsModel.find({}).then(projects => { 
      return res.json(projects)
    });
};
module.exports.show = function show(req, res) {
  return ProjectsModel.findById(req.params.id).then(project => res.json(project)); 
};
module.exports.create = function create(req, res) {
  const newProject = new ProjectsModel(req.body);
  console.log(req.body, 'body');
  newProject.save().then(savedProject => res.json(savedProject));
};

module.exports.remove = function remove(req, res) {
  return ProjectsModel.findByIdAndRemove(req.params.id).then(project => res.json(project)); 
}

module.exports.removeEmpty = function removeEmpty(req, res) {
  return ProjectsModel.deleteMany({ "year": { $exists: false } })
    .then(results => res.json(results))
    .catch(err => res.send(err.message))
}

