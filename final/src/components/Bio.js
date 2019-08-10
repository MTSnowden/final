import React from 'react'
import './Bio.css'
// import grass from '../final-img/grass.jpg'

const Bio = () => (
  <div className="bio-container">
    <div className="bio-flex">
      <h1> </h1>
    </div>
    <div className="bio-flex" style={style}>
      <div>
        <div>
          <hr />
          <p>My body of work is varied, consisting of large-scale abstract paintings, 
            wood, cement and metal sculptures, charcoal and ink drawings, home furnishings and tattoo designs. 
          </p>
          <p>I attended Lamar University in Beaumont, Texas where I earned a 
            Bachelor of Fine Arts degree in Studio Art with a minor in Earth Science.
          </p>
        </div>
        <div>
          <p>After a year of exploring different artistic practices, 
            I chose Painting as my area of concentration. 
            During my second year I departed from painting representational 
            images in oil on canvas and began to experiment with abstraction and mixed media painting.
            With this new direction came a new process of building the works. 
            I put all of my focus on <i>how</i> I interacted with the 
            materials. The various ways I could manipulate them to create 
            my own unique style and visual language.
            I abandoned the paintbrush and adopted the trowel and electric sander.
            At this time I wasn’t particularly concerned about <i>what</i> I was making, 
            in terms of visual content, as much as <i>how</i> I was making.  I told myself that
            content would come in time.  
          </p>
        </div>
        <div>
          <p>In my Earth Science courses I found an interest in the field of 
            cartography and how humans use maps to make sense of the world,
            to place order on the chaos of nature, to tell a story about 
            a specific place in a specific time in history.
          </p>
        </div>
        <div>
          <p>Elements of cartography began finding their way into my paintings.
            Linear elements dominated the compositions, reminiscent of dynamic
            inner-city maps and winding topographic renderings. The surfaces became 
            highly textured, having many layers of paper, paint, cardboard and string.
            My process became more and more physical, ripping and sanding away 
            exposing the colorful layers that lie beneath.
          </p>
        </div>
      </div>
      <hr />
    </div>
  </div>
)

const style = {
  // display: 'block',
  margin: '0 auto',
  marginBottom: '100px',
  // fontFamily: 'Dosis',
  width: '70%'
}

// const picStyle = {
//   margin: '0 auto',
//   width: '70%'
// }

export default Bio


