import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => (
  <div className="nav-container">

    <ul className="nav-left" style={styles}>
      <Link to='/'>h o m e</Link>
      <Link to='/bio'>b i o</Link>
      <Link to='/gallery'>p o r t f o l i o</Link>
      <Link to='/learn'>l e a r n</Link>
    </ul>

    <ul className="nav-right">
      <Link to='/contact'>c o n t a c t</Link>
      <div style={{width: '30px'}}></div>
      <Link to='/login'>a d m i n</Link>
    </ul>

  </div>
)

const styles = {
  color: 'grey'
}

export default Nav
