import React from 'react';
import '../pages/service.css';

const Service = () => {
  return (
    <section className='service-section'>
      <h2 className='title'>
        <span className='pink'>My </span><span className='blue'>Services</span>
      </h2>
      <div className='service-container'>
        <div className='service-card'>
          <span className='icon'><i class="fa-solid fa-laptop"></i></span>
          <h3>WEBSITE DEVELOPMENT</h3>
          <p>I create websites based on your ready-made design. Whether it’s a landing page or a business card website, I will make it look great and work smoothly on any device.</p>
        </div>

        <div className='service-card'>
          <span className='icon'><i class="fa-solid fa-palette"></i></span>
          <h3>WEB DESIGN</h3>
          <p>I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.</p>
        </div>

        <div className='service-card'>
          <span className='icon'><i class="fa-solid fa-keyboard"></i></span>
          <h3>REACT DEVELOPER</h3>
          <p>I build websites on React, making them easy to update and manage. It's a great choice for blogs, small businesses, or portfolios.</p>
        </div>









      </div>
    </section>
  )
}

export default Service
