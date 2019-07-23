import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Bio from './components/Bio'
import Gallery from './components/Gallery'
import Learn from './components/Learn'
import Login from './components/Login'
import Contact from './components/Contact'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/bio' component={Bio}></Route>
            <Route path='/gallery' component={Gallery}></Route>
            <Route path='/learn' component={Learn}></Route>
            <Route path='/login' component={Login}></Route>
            {/* <Route path='/contact' component={Contact}></Route> */}

        </Switch>
    );
}

export default Router