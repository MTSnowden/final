import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => (
  <div className="nav-container">

    <ul className="nav-left" style={styles}>
      <Link to='/' style={styles}>h o m e</Link>
      <Link to='/bio'>b i o</Link>
      <Link to='/gallery'>g a l l e r y</Link>
      <Link to='/learn'>l e a r n</Link>
    </ul>

    <ul className="nav-right">
      <Link to='/login'>c l i e n t   p o r t a l</Link>
    </ul>

  </div>
)

const styles = {
  color: 'grey'
}

export default Nav
