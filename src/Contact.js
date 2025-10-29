import React, { useState } from 'react'
import "./contact.css";

function Contact() {

  const [name, setName ] = useState('')
  const [email, setEmail ] = useState('')
  const [message, setMessage ] = useState('')

  const data = { name, email, message }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify( {data} )})
    .then(response => {
      if (response.ok) {
    alert('Message sent (demo)');}})
  }

  return (
    <div>
      

    <div className="contact-container">
  <div className="contact-form">
    <h2>Contact us</h2>
    <form>
      <div className="form-group">
        <input type="text" placeholder="Name" required onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="form-group">
        <textarea placeholder="Message" required defaultValue={""} onChange={(e)=>{setMessage(e.target.value)}}/>
      </div>
      <button className="send-btn" onClick={handleSubmit}>Send Message</button>
    </form>
  </div>
  <div className="illustration">
    {/* You can replace this with your SVG or image */}
    <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="Contact Illustration" />
  </div>
</div>




    </div>
  )
}

export default Contact
