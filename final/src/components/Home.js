import React from 'react'
import Signature from '../images/signature.png'
// import Wasp from '../images/main-pic.png'
import forCarlo from '../final-img/forCarlo.JPG'
import './Home.css'



const Home = () => (
  <div className="home-container">
    <div className="signature-flex">
        <img id="signature" src={Signature} alt="logo"></img>
    </div>

    <div className="home-flex">
        <div className="title">
            <p>v i s u a l</p>
        </div>
        <div className="title">
            <p>a r t i s t</p>
        </div>
    </div>

    <div className="home-image">
        <img id="main-image" src={forCarlo} alt="abstract-painting"></img>
    </div>

  </div>
)

export default Home
