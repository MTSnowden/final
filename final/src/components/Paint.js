import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
// import forCarlo from '../final-img/forCarlo.JPG'
import paint1 from '../final-img/paint1.JPG'
// import two from '../final-img/paint2.JPG'
// import three from '../final-img/paint3.jpg'
// import four from '../final-img/paint4.PNG'
import five from '../final-img/paint5.PNG'
import room1 from '../final-img/room1.png'
import room2 from '../final-img/room2.png'
import room3 from '../final-img/room3.png'
import room4 from '../final-img/room4.png'
import room5 from '../final-img/room5.png'
import room4Detail from '../final-img/room4Detail.JPG'
import room5Detail from '../final-img/room5Detail.JPG'
import forCarloDetail from '../final-img/forCarloDetail.JPG'
import forDad from '../final-img/forDad.PNG'
import forDadDetail from '../final-img/forDadDetail.JPG'
import forNathaniel from '../final-img/forNathaniel.PNG'
import forNathanielDetail from '../final-img/forNathanielDetail.PNG'
import whale from '../final-img/whale.PNG'
import whaleDetail from '../final-img/whaleDetail.jpg'



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
    photo: forCarloDetail,
    caption: "For Carlo",
    subcaption: "Acrylic, cement dye, cardboard, string and paper on canvas - 2012",
    thumbnail: forCarloDetail,
  }, {
    photo: forDad,
    caption: "For Dad",
    subcaption: "Acrylic, latex, paper, cardboard, silver leaf and string on canvas - 2013",
    thumbnail: forDad,
  }, {
    photo: forDadDetail,
    caption: "For Dad",
    subcaption: "Acrylic, latex, paper, cardboard, silver leaf and string on canvas - 2013",
    thumbnail: forDadDetail,
  }, {
    photo: forNathaniel,
    caption: "For Nathaniel",
    subcaption: "Acrylic, house paint, paper, cardboard and string on canvas - 2012 ",
    thumbnail: forNathaniel,
  }, {
    photo: forNathanielDetail,
    caption: "For Nathaniel",
    subcaption: "Acrylic, house paint, paper, cardboard and string on canvas - 2012 ",
    thumbnail: forNathanielDetail,
  },{
    photo: whale,
    caption: "For Laurie",
    subcaption: "Acrylic, house paint and paper on canvas - 2012 ",
    thumbnail: whale,
  },{
    photo: whaleDetail,
    caption: "For Laurie",
    subcaption: "Acrylic, house paint and paper on canvas - 2012 ",
    thumbnail: whaleDetail,
  },{
    photo: room4,
    caption: "Tally",
    subcaption: "Acrylic, house paint and paper on canvas - 2012 ",
    thumbnail: room4,
  },{
    photo: room4Detail,
    caption: "Tally",
    subcaption: "Acrylic, house paint and paper on canvas - 2012 ",
    thumbnail: room4Detail,
  },{
    photo: room5,
    caption: "Weathered",
    subcaption: "Acrylic, house paint and paper on canvas - 2012 ",
    thumbnail: room5,
  },{
    photo: room5Detail,
    caption: "Weathered",
    subcaption: "Acrylic, house paint and paper on canvas - 2012 ",
    thumbnail: room5Detail,
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

