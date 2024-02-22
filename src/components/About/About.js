import React from 'react'
import './about.css';

const About = () => {
  return (
    <>
      <div className='all-content'>
      <div id="about">
      <div className="container">
          <div className="heading">About <span>Us</span></div>
          <div className="row">
              <div className="col-md-6">
                  <div className="card">
                      <img src='./gallery/about.png' alt="logo"/>
                  </div>
              </div>

              <div className="col-md-6">
                  <h3>What makes Our Coffee Speacial? </h3>
                  <div className="about-div">
                      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, amet!</div>
                      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa!</div>
                      <button id="about-btn" data-bs-toggle="collapse" data-bs-target="#about-para" >Learn More.</button>
                      <div id="about-para" className="collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, alias! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ad fugiat exercitationem minima ipsum? Distinctio commodi eligendi debitis neque, pariatur, asperiores quo ad soluta incidunt laboriosam expedita! Quibusdam animi magnam amet, aspernatur molestias non dolore fugit, suscipit adipisci rerum, architecto debitis eius molestiae officia voluptates id reprehenderit aliquam a perferendis.</div>
                  </div>
              </div>
          </div>
        </div>
        </div>
        <div  id="top-cards">
        <div className="heading2">Top  <span>Categories</span></div>
        <div className="container">
        <div className="row py-5">
  
            <div className="col-md-4 py-3">
                <div className="card">
                    <img src='./gallery/c1.png' alt=""/>
                </div>
            </div>
  
            <div className="col-md-4 py-3">
                <div className="card">
                    <img src='./gallery/c2.png' alt=""/>
                </div>
            </div>
  
            <div className="col-md-4 py-3">
                <div className="card">
                    <img src='./gallery/c3.png' alt=""/>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
      </>
  )
}

export default About

