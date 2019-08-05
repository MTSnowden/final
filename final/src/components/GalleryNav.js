import React from 'react'
import {Link} from 'react-router-dom'
// import Paint from '../components/Paint'

const GalleryNav = () => (
  <div className="gallery-nav-container" style={styles}>

    <div className="gallery-nav-left" style={leftStyles}>
      <Link to='/paint'>paint</Link>
    </div>
    
    <div className="gallery-nav-right" style={rightStyles}>
      <Link to='/draw'>draw</Link>
    </div>

  </div>
)

const styles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'space-evenly',
  fontSize: '30px',
  marginTop: '20px'
}

const leftStyles = {
  display: 'flex',
  justifyContent: 'space-evenly'
}

const rightStyles = {
  display: 'flex',
  justifyContent: 'space-evenly'
}

export default GalleryNav