import React from 'react';
import '../pages/contact.css';


const Contact = () => {
  return (
    <section className='contact-container'>
      <h3>get in touch</h3>
      <h1>CONTACT</h1>
      <div className='contact-content'>
        <div className='contact-info'>
          <div className='info-box'>
            <i class="fa-solid fa-phone"></i>
            <span>6230439155</span>
          </div>
          <div className='info-box'>
            <i class="fa-solid fa-envelope"></i>
            <span>noobcoderr440@gmail.com</span>
          </div>

          <div className='info-box'>
            <i class="fa-solid fa-location-dot"></i>
            <span>Dharamshala, HIMACHAL PRADESH</span>
          </div>
        </div>

        <div className='contact-form'>
          <form>
            <input type='text' placeholder='Your Name' required />
            <input type='email' placeholder='Your Email' required />
            <textarea placeholder=' Your Message' rows={4} required></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>







      </div>


    </section>
  )
}

export default Contact;
