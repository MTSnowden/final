import React, { Component } from 'react'
import './Gallery.css'
import { BrowserRouter } from 'react-router-dom'
import GalleryRouter from '../GalleryRouter'
import GalleryNav from './GalleryNav';

class Gallery extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <GalleryNav />

      </BrowserRouter>
      </div>
    )
}
}



export default Gallery;