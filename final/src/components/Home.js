import React from 'react'
import Signature from '../images/signature.png'
import Wasp from '../images/main-pic.png'
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
        <img id="main-image" src={Wasp} alt="wasp drawing"></img>
    </div>
  </div>
)

export default Home
