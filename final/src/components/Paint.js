import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import forCarlo from '../final-img/forCarlo.JPG'
import one from '../final-img/paint1.JPG'
import two from '../final-img/paint2.JPG'
import three from '../final-img/paint3.jpg'
import four from '../final-img/paint4.PNG'
import five from '../final-img/paint5.PNG'


const photos = [{
    photo:  forCarlo,
    caption: "For Carlo",
    subcaption: "Acrylic, house paint, paper, cardboard and string on canvas - 2012 ",
    thumbnail: forCarlo,
  }, {
    photo: one,
    caption: "For Dottie",
    subcaption: "Acrylic, latex and paper on canvas - 2015",
    thumbnail: one,
  }, {
    photo: two,
    caption: "Thesis",
    subcaption: "Acrylic, cement dye, cardboard, string and paper on canvas - 2012",
    thumbnail: two,
  }, {
    photo: three,
    caption: "Central Park",
    subcaption: "Acrylic, house paint, paper, cardboard and string on canvas - 2012 ",
    thumbnail: three,
  },{
    photo: four,
    caption: "For Dad",
    subcaption: "Acrylic, latex, paper, cardboard, silver leaf and string on canvas - 2013",
    thumbnail: four,
  },{
    photo: five,
    caption: "First Abstraction",
    subcaption: "Acrylic and latex on canvas - 2010",
    thumbnail: five,
  }

];

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
        <div>
         <button onClick={this.toggleGallery} style={style}>painting</button>
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

