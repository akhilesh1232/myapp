import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../src/images/img1.gif';
import img2 from "../src/images/thanks.gif";
import img3 from "../src/images/reviews.gif";
import img4 from "../src/images/Contact.gif";
import './Home.css';


const Home = () => {
    return(
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <h1>WELCOME TO THE PERSONAL SITE OF <strong>AKHILESH PATKI</strong></h1>
                        </div>
                        <div className="row">
                            <div className="col" id="first-imp">
                                <h3 className="my-3">
                                    This website is project of web-devlelopment about extra-ciricular activities.
                                </h3>
                            </div>
                            <div className="col order-1">
                                <img src = {img1} className="img1" alt="Hello image..." />
                            </div>
                        </div>
                        <div className="row" id="second">
                            <div className="col">
                                <img src = { img2 } className="img2" alt="info image..." />
                            </div>
                            <div className="col" id="sec-imp">
                                <h4>My extraciricular activities include writing social blogs...</h4>
                                <h3 className="my-3"> Visit it right here👇🏼</h3>
                                <div className="my-3">
                                    <NavLink to = "/Blogs" className="btn btn-warning">Blogs</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" id="first-imp">
                                <h3>
                                    Doesn't want social stuff?
                                </h3>
                                <h4 className="my-3">
                                    Here are some reviews of books and series I've gone thorugh...Check them out!!! 
                                </h4>
                                <NavLink to="/Reviews" className="btn btn-success">Reviews</NavLink>
                            </div>
                            <div className="col">
                                <img src = {img3} className="img3" alt="Hello image..." />
                            </div>
                        </div>
                        <div className="row py-5" id="second">
                            <div className="col">
                                <img src = { img4 } className="img4" alt="info image..." />
                            </div>
                            <div className="col" id="sec-imp">
                                <h4>If you like my website or content or just want to give a subtle suggestion....</h4>
                                <h3 className="my-3"> Contact Me Here👇🏼</h3>
                                <div className="my-3">
                                    <NavLink to = "/Contact" className="btn btn-primary">Contact Me</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Home;