import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => (
  <div className="nav-container">

    <ul className="nav-left">
      <Link to='/'>home</Link>
      <Link to='/bio'>bio</Link>
      <Link to='/gallery'>gallery</Link>
      <Link to='/learn'>learn</Link>
    </ul>

    <ul className="nav-right">
      <Link to='/login'>client portal</Link>
    </ul>

  </div>
)

export default Nav