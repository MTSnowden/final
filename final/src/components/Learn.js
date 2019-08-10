import React from 'react'
import Hand from '../final-img/drawing-hand.png'
import './Learn.css'
import { Card, Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 

const Learn = () => (
  <div className="learn-container">

    <div className="learn-flex" style={titleStyles}>
    <h2>I believe that anyone can learn to draw.</h2>
    </div>


    <div className='learn-body' style={learnBodyStyles}>
      
      <div className="learn-image" style={learnImageStyles}>
          <img id="main-image" src={Hand} alt="hand-drawing"></img>
      </div>

      <div className="learn-text-container">
        <div className="learn-flex" style={learnStylesOne}>
          <p>
            Drawing is one of my favorite practices and I love helping others 
            take what they see and express that through their own hands.
            A classically trained artist and former high school 
            art teacher, I offer private lessons in traditional methods of 
            representational drawing. 
          </p>
        </div>

        <div className="learn-flex" style={learnStylesTwo}>
          <p>Whether it's to become better at drawing or to 
            work towards creating a masterpiece, my goal is 
            for the student to improve and work towards 
            their desired achievements. I will design a personalized 
            curriculum to fit your needs and provide all supplies.
            We will learn how to draw from real life/still life 
            on archive quality paper with graphite, ink and charcoal. 
            I will give lessons on perspective, line, 
            volume, and composition in a way that is practical 
            and easy to understand. 
          </p>
        </div>
      </div>

      <div className="lesson-packages-container" style={lessonPackagesStyles}>
        <div style={left}>
        <Card style={{ width: '10rem', height: '12rem' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: '30px'}}><b>1</b> Session</Card.Title>
            <Card.Title>(60 min)</Card.Title>
            <Card.Title>$50</Card.Title>
              <Card.Text></Card.Text>
            <Link to='/contact'><Button variant="secondary">Purchase</Button></Link>
          </Card.Body>
        </Card>
        </div>

          <div>
         <Card style={{ width: '11rem', height: '12rem' }}>
          <Card.Body>
          <Card.Title style={{ fontSize: '30px'}}><b>3</b> Sessions</Card.Title>
            <Card.Title>(180 min)</Card.Title>
            <Card.Title>$130</Card.Title>
              <Card.Text></Card.Text>
            <Link to='/contact'><Button variant="secondary">Purchase</Button></Link>
          </Card.Body>
        </Card></div>
      
      </div>
    </div>

  </div>
)



const titleStyles = {
  display: 'flex',
  width: '75%',
  margin: '0 auto',
  marginTop: '30px',
  marginBottom: '20px',
  paddingLeft: '40px'
}

const learnBodyStyles = {
  height: '80px',
  width: '600px',
  margin: '0 auto',
  marginTop: '50px',
  fontFamily: 'Dosis'
}

const learnStylesOne = {
  paddingLeft: '50px',
  marginTop: '50px'
}

const learnStylesTwo = {
  height: '170px',
  paddingLeft: '50px'
}

const learnImageStyles = {
  margin: '0 auto'
}

const lessonPackagesStyles = {
  height: '290px',
  width: '500px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'space-evenly',
  marginBottom: '100px',
  paddingLeft: '50px'
}

const left = {
  marginRight: '50px'
}


export default Learn