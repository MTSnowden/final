import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import draw1 from '../final-img/draw1.jpg'
import draw1Detail from '../final-img/draw1Detail.png'
import draw2 from '../final-img/draw2.jpg'
import draw3 from '../final-img/draw3.jpg'
import wasp from '../final-img/wasp.jpg'


const photos = [{
    photo: wasp,
    caption: "Embrace the pain",
    subcaption: "Charcoal on paper - 2017",
    thumbnail: wasp,
  },{
    photo:  draw1,
    caption: "Impending Doom",
    subcaption: "Charcoal on paper - 2012",
    thumbnail: draw1,
  },{
    photo:  draw1Detail,
    caption: "Impending Doom - detail",
    subcaption: "Charcoal on paper - 2012",
    thumbnail: draw1Detail,
  }, {
    photo: draw2,
    caption: "Autry-Williams Wigwam",
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