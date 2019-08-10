import React from 'react'
import { Switch, Route } from 'react-router-dom'
import cookie from 'cookie'
import { Redirect } from 'react-router-dom'
import Home from './components/Home'
import Bio from './components/Bio'
import Gallery from './components/Gallery'
import Learn from './components/Learn'
// import Login from './containers/Login'
import Login from './components/Login'
import Paint from './components/Paint'
import Dashboard from './containers/Dashboard'
import Contact from './components/Contact'
import ListProjects from './containers/ListProjects'
import NewProject from './containers/NewProject'
import ProjectDetail from './containers/ProjectDetail'

const checkAuth = () => {
    const cookies  = cookie.parse(document.cookie)
    return cookies.id_token ? true : false
  }
  
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      checkAuth() === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            <Route path="/dashboard" component={Dashboard} />
            <Route path='/bio' component={Bio}></Route>
            <Route path='/gallery' component={Gallery}></Route>
            <Route path='/learn' component={Learn}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/paint' component={Paint}></Route>
            <Route path='/contact' component={Contact}></Route>

            <Route path="/projects" component={ListProjects} />
            <Route path="/create" component={NewProject} />
            <Route path="/projects/:id" component={ProjectDetail} />

        </Switch>
    );
}

export default Router
