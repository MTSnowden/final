import React from 'react'
import {Link} from 'react-router-dom'

const ListProjects = ({props = []}) => {
  
    const projectDivs = props.map((projects,i) => {
     
      return (
        
        <div key={i}>
          {projects.title}
         <Link to={"/projects/" + projects._id}><button>View</button> </Link>
          <button onClick={() => {props.deleteProject(projects._id)}}>Delete</button>
        </div>);
    });
    return (   
      <div>{projectDivs}</div>
    );
  }
  
  export default ListProjects;