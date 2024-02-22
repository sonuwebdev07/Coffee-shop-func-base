import React from 'react';
import './products.css';


const Products = () => {
  return (
    <div id="product" className='all-content py-4' >
        <div className="container">
            <div className="heading4">Products</div>
        </div>
        <div className="container" id="container3">
            <div className="row">
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                        <img src='./gallery/coffee1.png' alt='coffee1'/>
                        <div className="card-body">
                            <h3>Arabic Coffee</h3>
                            <p>$120 <strike>$150</strike> <span className="fa-solid fa-cart-shopping"></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                    <img src='./gallery/coffee2.png' alt='coffee2'/>
                        <div className="card-body">
                            <h3>Cappccino Coffee</h3>
                            <p>$250 <strike>$350</strike> <span className="fa-solid fa-cart-shopping"></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                    <img src='./gallery/coffee3.png' alt='coffee3'/>
                        <div className="card-body">
                            <h3>Black Coffee</h3>
                            <p>$130 <strike>$200</strike> <span className="fa-solid fa-cart-shopping"></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 py-3 py-md-0">
                    <div className="card">
                    <img src='./gallery/coffee4.png' alt='coffee4'/>
                        <div className="card-body">
                            <h3>Decaf Coffee</h3>
                            <p>$100<strike>$120</strike> <span className="fa-solid fa-cart-shopping"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products



