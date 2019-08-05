import React from 'react'
import {Link} from 'react-router-dom'
// import Paint from '../components/Paint'

const GalleryNav = () => (
  <div className="gallery-nav-container">

    <ul className="gallery-nav-left">
      <Link to='/paint'>paint</Link>
      <Link to='/draw'>draw</Link>
    </ul>

  </div>
)

export default GalleryNav