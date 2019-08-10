import React from 'react'
import {Link} from 'react-router-dom'

const ListProjects = ({props = []}) => {
  
    const projectDivs = props.map((project,i) => {
     
      return (
        
        <div key={i}>
          {project.title}
         <Link to={"/projects/" + project._id}><button>View</button> </Link>
          <button onClick={() => {props.deleteProject(project._id)}}>Delete</button>
        </div>);
    });
    return (   
      <div>{projectDivs}</div>
    );
  }
  
  export default ListProjects;