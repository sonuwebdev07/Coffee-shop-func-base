import React from 'react';
import './pagenotfound.css';


const Pagenotfound = () => {
  return (
    <div className="text-center">
      <section className="error">
        <h1 className="error_title"><span>4</span>0<span>4</span></h1>
        <img style={{width:'300px'}} src='./gallery/pagenotfound.png' alt="mug" />
        <h2 className="error_type"><span>Page</span> not <span>found</span></h2>
        <p className="error_para">We’re sorry, the page you have looked for does not exist<a className="home_link nav-link" href="/">Home page</a></p>
      </section>
    </div>
  )
}

export default Pagenotfound

