import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import draw1 from '../final-img/draw1.jpg'
import draw1Detail from '../final-img/draw1Detail.png'
import draw2 from '../final-img/draw2.jpg'
import draw3 from '../final-img/draw3.jpg'
import figure1 from '../final-img/figure1.png'
import figure2 from '../final-img/figure2.png'
import figure3 from '../final-img/figure3.png'
import figure4 from '../final-img/figure4.png'
import figure5 from '../final-img/figure5.png'

const photos = [{
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
  }, {
    photo: figure1,
    caption: "Nude",
    subcaption: "Charcoal on paper - 2016",
    thumbnail: figure1,
  }, {
    photo: figure2,
    caption: "Nude",
    subcaption: "Charcoal on paper - 2014",
    thumbnail: figure2,
  }, {
    photo: figure3,
    caption: "Nude",
    subcaption: "Charcoal on paper - 2017",
    thumbnail: figure3,
  }, {
    photo: figure4,
    caption: "Nude",
    subcaption: "Charcoal on paper - 2015",
    thumbnail: figure4,
  }, {
    photo: figure5,
    caption: "Nude",
    subcaption: "Charcoal on paper - 2018",
    thumbnail: figure5,
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