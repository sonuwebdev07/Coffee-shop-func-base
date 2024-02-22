import React from 'react';
import './gallery.css';

const Gallery = () => {
  return (
    <div className="container all-content py-4" id="gallary">
        <div className="heading5">Our <span>Gallary</span></div>
        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src='./gallery/image1.png' alt='image1' />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src='./gallery/image2.png' alt='image2' />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src='./gallery/image3.png' alt='image3' />
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src='./gallery/image4.png' alt='image4' />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src='./gallery/image5.png' alt='image5' />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src='./gallery/image6.png' alt='image6' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Gallery

