import React from 'react';
import {Link} from "react-router-dom";


function DashButtons(props) {
  
    return (
        <div>
            <p>
            <Link to="/projects"><button type="button" className="btn btn-secondary" >List of Projects</button></Link>
            <Link to="/create"><button type="button" className="btn btn-success">Create New Project</button></Link>
            </p>
        </div>
    );
  }

 
export default DashButtons;