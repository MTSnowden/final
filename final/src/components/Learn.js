import React from 'react'
import Hand from '../final-img/drawing-hand.png'
import './Learn.css'
import { Card, Button  } from 'react-bootstrap'
// 

const Learn = () => (
  <div className="learn-container">

    <div className="learn-flex" style={titleStyles}>
      <h3>Private Drawing Lessons</h3>
    </div>


    <div className='learn-body' style={learnBodyStyles}>
      
      <div className="learn-image" style={learnImageStyles}>
          <img id="main-image" src={Hand} alt="hand-drawing"></img>
      </div>

      <div className="learn-text-container">
        <div className="learn-flex" style={learnStylesOne}>
          <p>I believe that anyone can learn to draw.
            A classically trained artist and former high school 
            art educator, I teach traditional methods of 
            representational drawing. Drawing is one 
            of my favorite practices and I love helping others 
            take what they see and express that through their own hands.
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
            
            {/* We will explore the science of 
            optics and how our eyes work with the brain to make sense 
            of the phisical world around us. */}
          </p>
        </div>
      </div>

      <div className="lesson-packages-container" style={lessonPackagesStyles}>
        <Card style={{ width: '14rem', height: '10rem' }}>
          <Card.Body>
            <Card.Title>1 One Hour Lesson</Card.Title>
            <Card.Title>$30</Card.Title>
              <Card.Text></Card.Text>
            <Button variant="secondary">Purchase</Button>
          </Card.Body>
        </Card>

         <Card style={{ width: '14rem', height: '10rem' }}>
          <Card.Body>
            <Card.Title>3 One Hour Lessons</Card.Title>
            <Card.Title>$75</Card.Title>
              <Card.Text></Card.Text>
            <Button variant="secondary">Purchase</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '14rem', height: '10rem' }}>
          <Card.Body>
            <Card.Title>5 One Hour Lessons</Card.Title>
            <Card.Title>$130</Card.Title>
              <Card.Text></Card.Text>
            <Button variant="secondary"
                    >Purchase</Button>
          </Card.Body>
        </Card>


        {/* <div className="option" style={option}>
          <h4>1 One-Hour Lesson</h4>
          <h3>$30</h3>
        </div>
        <div className="option" style={option}>
          <h4>3 One-Hour Lessons</h4>
          <h3>$75</h3>
        </div>
        <div className="option" style={option}>
          <h4>5 One-Hour Lessons</h4>
          <h3>$130</h3>
        </div> */}
      </div>
    </div>

  </div>
)

const titleStyles = {
  display: 'flex',
  width: '75%',
  fontFamily: 'Dosis',
  margin: '0 auto',
  marginBottom: '20px'
}

const learnBodyStyles = {
  // display: 'flex'
  height: '80px',
  width: '600px',
  margin: '0 auto',
  marginTop: '50px',
  fontFamily: 'Dosis'
}

const learnStylesOne = {
  // height: '130px',
  // width: '500px',
  // margin: '0 auto',
  marginTop: '50px',
  // fontFamily: 'Dosis'
}

const learnStylesTwo = {
  height: '170px',
  // width: '500px',
  // margin: '0 auto',
  // fontFamily: 'Dosis'
}

const learnImageStyles = {
  // height: '290px',
  // width: '500px',
  margin: '0 auto'
}

const lessonPackagesStyles = {
  // height: '290px',
  // width: '500px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center'
}

// const option = {
//   height: '200px',
//   width: '200px',
//   border: '2px solid grey'
// }


export default Learn