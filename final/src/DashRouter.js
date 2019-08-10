import React from 'react';
import {Route,Switch} from "react-router-dom";
import NewProject from "./containers/NewProject"
import ListProjects from "./containers/ListProjects"
import ProjectDetail from "./containers/ProjectDetail"

const DashRouter = () => {
    return (
        <Switch>
          <Route path="/projects" component={ListProjects} />
          <Route path="/create" component={NewProject} />
          <Route path="/projects/:id" component={ProjectDetail} />
        </Switch>
    )
}

export default DashRouter;
