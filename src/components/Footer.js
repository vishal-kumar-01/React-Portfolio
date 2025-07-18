import React from 'react';
import '../components/footer.css';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-section logo">
        <h3 className='logo'>Vishal<strong className='mylogo'>Rajput</strong></h3>
        </div>
        <div class="footer-section">
            <h4>Services</h4>
            <ul>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                    <li><a href="#">JAVASCRIPT</a></li>
                        <li><a href="#">REACT</a></li>
                            <li><a href="#">NODE.JS</a></li>
                                <li><a href="#">EXPRESS</a></li>
                                    <li><a href="#">MONGODB</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>FOLLOW US</h4>
            <ul>
                <li><a href="#">INSTAGRAM</a></li>
                <li><a href="#">LINKDIN</a></li>
                <li><a href="#">GITHUB</a></li>
            </ul>
        </div>
      
        
        <div class="footer-section subscribe">
            <h4>Hire Me</h4>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Company Email"/>
            <button>Send Me</button>
        </div>
    </div>

    </footer>
  )
}

export default Footer;
