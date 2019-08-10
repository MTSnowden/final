import React from "react";


function ProjectDetail(props) {
  
  const projectId = props.match.params.id;
  
  const project = props.projects.find(m => m._id === projectId) || {};
  console.log(props)
  return (   
    <div>
      <h3>Client: {project.client}</h3>
      <h4>Title: {project.Title}</h4>
      <p>Description: {project.description}</p>
      <p>Charge: {project.charge}</p>
      <p>Due: {project.due}</p>
    </div>
  );
}
export default ProjectDetail;