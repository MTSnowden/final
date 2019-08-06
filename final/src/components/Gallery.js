import React, { Component } from 'react'
import './Gallery.css'
import PaintGallery from './Paint';
import DrawGallery from './Draw'
import CeramicGallery from './Ceramic';

class Gallery extends Component {
  render() {
    return (
      <div style={style}>
        <div><PaintGallery /></div>
        <div><DrawGallery /></div>
        <div><CeramicGallery /></div>
      </div>
    )
  }
}

const style = {
  display: 'grid',
  height: '200px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'space-evenly',
  marginTop: '100px'
}


export default Gallery;