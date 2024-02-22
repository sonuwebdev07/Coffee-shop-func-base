import React from 'react';
import './blogs.css';

const Blogs = () => {
    return (
        <div id="blogs" className='py-5'>
            <div className="heading7">Latest <span>Blogs</span></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-3 py-md-0">
                        <div className="card">
                            <img src='./gallery/b1.png' alt="" />
                            <div className="card-body">
                                <h3>Lorem ipsum dolor.</h3>
                                <h5>Admin/ 05 December 2023 </h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda facilis dolorum voluptatum aut fugit suscipit accusantium numquam pariatur molestiae tempora, sed eaque quas adipisci ex.</p>
                                <button id="blog-btn">Read More.</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                        <div className="card">
                            <img src='./gallery/b2.png' alt="" />
                            <div className="card-body">
                                <h3>Lorem ipsum dolor.</h3>
                                <h5>Admin/ 05 December 2023 </h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda facilis dolorum voluptatum aut fugit suscipit accusantium numquam pariatur molestiae tempora, sed eaque quas adipisci ex.</p>
                                <button id="blog-btn">Read More.</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                        <div className="card">
                            <img src='./gallery/b3.png' alt="" />
                            <div className="card-body">
                                <h3>Lorem ipsum dolor.</h3>
                                <h5>Admin/ 05 December 2023 </h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda facilis dolorum voluptatum aut fugit suscipit accusantium numquam pariatur molestiae tempora, sed eaque quas adipisci ex.</p>
                                <button id="blog-btn">Read More.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
