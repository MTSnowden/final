import React, { Component } from 'react'
import PaintActiveWindow from './PaintActiveWindow'
import PaintThumbnailGrid from './PaintThumbnailGrid'
import ReactBnbGallery from 'react-bnb-gallery'
import forCarlo from '../final-img/forCarlo.JPG'
import one from '../final-img/IMG_0016.JPG'


const photos = [{
    photo:  forCarlo,
    caption: "Viñales, Pinar del Río, Cuba",
    subcaption: "Photo by Simon Matzinger on Unsplash",
    thumbnail: forCarlo,
  }, {
    photo: one,
    caption: "yello",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: one,
  }, {
    photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
    caption: "Woman smoking a tobacco",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
  }];

export default class PaintGallery extends Component {
    
    constructor() {
        super(...arguments);
        this.state = { galleryOpened: false };
        this.toggleGallery = this.toggleGallery.bind(this);
      }

    toggleGallery() {
    this.setState(prevState => ({
        galleryOpened: !prevState.galleryOpened
    }));
    }
    
    
    render() {

        return (
        //     <div style={ThumbnailGalleryStyles}>

        // {/* Left Side */}
        //     <div style={{ flex: 1.5}}>
        //         <PaintActiveWindow />
        //         <PaintThumbnailGrid />           
        //     </div>
            
        // {/* Right Side */}
        //     <div style={{ flex: 1, padding:'40px'}}>
        //         Some text about the image
        //     </div>
            
        //     </div>
        <div>
        <button onClick={this.toggleGallery} style={style}>paint</button>
        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={photos}
          onClose={this.toggleGallery} />
            </div>
        )
    }
}


const style ={

    fontFamily: 'Orbitron',
    border: 'none'
}

// const ThumbnailGalleryStyles = {
//     background: '#ddd',
//     height: '500px',
//     width: '1024px',
//     margin: '40px auto',
//     display: 'flex'
// }
