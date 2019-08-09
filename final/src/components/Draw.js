import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import draw1 from '../final-img/draw1.PNG'
import draw2 from '../final-img/draw2.PNG'
import draw3 from '../final-img/draw3.PNG'
import wasp from '../final-img/wasp.jpg'


const photos = [{
    photo: wasp,
    caption: "Embrace",
    subcaption: "Charcoal on paper - 2012",
    thumbnail: wasp,
  },{
    photo:  draw1,
    caption: "Autry-Williams Wigwam",
    subcaption: "Charcoal on paper - 2012",
    thumbnail: draw1,
  }, {
    photo: draw2,
    caption: "Impending Doom",
    subcaption: "Charcoal on paper - 2012",
    thumbnail: draw2,
  }, {
    photo: draw3,
    caption: "Interior",
    subcaption: "Charcoal on paper - 2012",
    thumbnail: draw3,
  }]

export default class DrawGallery extends Component {
    
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
         <button onClick={this.toggleGallery} style={style}>drawing</button>
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