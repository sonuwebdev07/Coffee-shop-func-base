import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="row">
          <form>
            <div className="col-md-7">
              <div className="heading6">Contact <span>Us</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, nobis?
                <br />Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <input type="text" className="form-control" placeholder="Name" name='name' /><br />
              <input type="email" className="form-control" placeholder="Email" name='email' /><br />
              <input type="number" className="form-control" placeholder="Phone" name='phone' /><br />
              <button id="contact-btn">Send Message</button>
            </div>
            </form>
            <div className="col-md-5" id="col">
              <h1>Info</h1>
              <p><i className="fa-regular fa-envelope"></i> example@gmail.com</p>
              <p><i className="fa-solid fa-phone"></i> +919999999966</p>
              <p><i className="fa-solid fa-building-columns"></i> Ducat,Pitampura, New Delhi, India</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rerum magnam asperiores atque perferendis voluptate.</p>
            </div>
          </div>
        </div>
      </div>

            
          </>
  )
}

export default Contact

