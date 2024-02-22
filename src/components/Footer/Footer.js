import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-logo text-center"><Link to="/home"><img src='./gallery/logo.png' alt="logo"/></Link></div>
      <div className="social-links text-center">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-pinterest-p"></i>
      </div>
      <div className="credits text-center">
          Designed by <a href="/"><span>Sonu</span></a>
      </div>
      <div className="copyright text-center">
          &copy; Copyright <strong> <span>Coffee Shop</span></strong>. All Rights reserved
      </div>
      </div>
  )
}

export default Footer


