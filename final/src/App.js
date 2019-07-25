import React, { Component } from 'react';
import Nav from './components/Nav'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
