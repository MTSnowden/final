import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Paint from './components/Paint'
import Draw from './components/Draw'
import Gallery from './components/Gallery'

const GalleryRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Gallery}></Route>
            <Route path='/paint' component={Paint}></Route>
            <Route path='/draw' component={Draw}></Route>
        </Switch>
    );
}

export default GalleryRouter