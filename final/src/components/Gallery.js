import React, { Component } from 'react'
import './Gallery.css'
import { BrowserRouter } from 'react-router-dom'
import GalleryRouter from '../GalleryRouter'
import GalleryNav from './GalleryNav';
import PaintGallery from './Paint';

class Gallery extends Component {
  render() {
    return (
      <div>
      {/* <BrowserRouter>
      <GalleryNav />
      <GalleryRouter />
      </BrowserRouter> */}
      <PaintGallery />
      
      </div>
    )
  }
}



export default Gallery;