import React from 'react'
import './Bio.css'

const Bio = () => (
  <div className="bio-container">
    <div className="bio-flex">
      <h1>Welcome to the biography page!</h1>
    </div>
    <div className="bio-flex">
      <div>
        <p>Artist Statement</p>
        <p>I'm an artist focusing in:</p>
        <ul className="bio-list">
          <li>painting</li>
          <li>drawing</li>
          <li>sculpture</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Bio