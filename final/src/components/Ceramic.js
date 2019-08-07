import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import ceramic1 from '../final-img/ceramic1.PNG'
import ceramic2 from '../final-img/ceramic2.PNG'
import ceramic3 from '../final-img/ceramic3.PNG'
import ceramic4 from '../final-img/ceramic4.PNG'


const photos = [{
    photo:  ceramic1,
    caption: "Pinch pot",
    subcaption: "2012",
    thumbnail: ceramic1,
  }, {
    photo: ceramic2,
    caption: "Box",
    subcaption: "2012",
    thumbnail: ceramic2,
  }, {
    photo: ceramic3,
    caption: "Bowl",
    subcaption: "2012",
    thumbnail: ceramic3,
  },{
    photo: ceramic4,
    caption: "For Mom",
    subcaption: "2012",
    thumbnail: ceramic4,
  }]

export default class CeramicGallery extends Component {
    
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
        <div>
         <button onClick={this.toggleGallery} style={style}>ceramic</button>
            <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={photos}
            onClose={this.toggleGallery} />
        </div>
     )
    }
}

const style = {

    fontFamily: 'Orbitron',
    border: 'none',
    color: 'grey'
}