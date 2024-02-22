import React, { useState } from 'react'
import './contact.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

  const[state,setState]=useState({
    name:'',
    email:'',
    phone:''
  })

  const handler = (event) => {
    const {name,value}=event.target;
    setState({...state,[name]:value})
  }

  const saveData = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3004/contact",state)
    .then((res)=>{
      toast.success("Data Saved Successfully !!!!")
    })
  }

  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="row">
          <Toaster/>
          <form onSubmit={saveData} method='post'>
            <div className="col-md-7">
              <div className="heading6">Contact <span>Us</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, nobis?
                <br />Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <input type="text" className="form-control" placeholder="Name" name='name' onChange={handler}/><br/>
              <input type="email" className="form-control" placeholder="Email" name='email' onChange={handler}/><br />
              <input type="text" className="form-control" placeholder="Phone" name='phone' onChange={handler}/><br />
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

