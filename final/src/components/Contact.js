import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className="contact-container">
    <p>Contact Me</p>
    <div style={{marginLeft: '350px'}}>
      <form action="/action_page.php">

      <div style={{width: '55%'}}>
      <input type="text"id="fname"name="firstname"placeholder="First Name"/>

      
      <input type="text"id="lname" name="lastname" placeholder="Last Name"/>

      <input type="email"id="email"name="email"placeholder="Email"/>

      
      <textarea id="subject"name="subject"placeholder="Message"></textarea>
      </div>

      <input type="submit"value="Submit"/>
      </form>
    </div>
  </div>
)

export default Contact