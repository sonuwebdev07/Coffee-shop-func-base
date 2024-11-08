import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


const Header = () => {
  return (
    <div>
      <nav id='navbar' className='navbar  navbar-expand-lg'>
      <div className='container-fluid'>
        <Link className='navbar-brand' id='logo' to="/"><img src='./gallery/logo.png' alt="logo"/></Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span><img src='./gallery/bars.png' alt='bars' width="40"/></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/about-us">About</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header

