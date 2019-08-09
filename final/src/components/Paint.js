import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
// import forCarlo from '../final-img/forCarlo.JPG'
import paint1 from '../final-img/paint1.JPG'
// import two from '../final-img/paint2.JPG'
import three from '../final-img/paint3.jpg'
import four from '../final-img/paint4.PNG'
import five from '../final-img/paint5.PNG'
import room1 from '../final-img/room1.png'
import room2 from '../final-img/room2.png'
import room3 from '../final-img/room3.png'


const photos = [{
    photo:  room1,
    caption: "First Abstraction",
    subcaption: "Acrylic, latex house paint, paper, cardboard and string on canvas - 2009",
    thumbnail: room1,
  }, {
    photo: five,
    caption: "First Abstraction",
    subcaption: "Acrylic, latex house paint, paper, cardboard and string on canvas - 2009",
    thumbnail: five,
  }, {
    photo: room2,
    caption: "Yellowstone",
    subcaption: "Acrylic, latex and paper on canvas - 2015",
    thumbnail: room2,
  }, {
    photo: paint1,
    caption: "Yellowstone",
    subcaption: "Acrylic, latex and paper on canvas - 2015",
    thumbnail: paint1,
  }, {
    photo: room3,
    caption: "For Carlo",
    subcaption: "Acrylic, cement dye, cardboard, string and paper on canvas - 2012",
    thumbnail: room3,
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

