import React from "react";
import "./Footer.css";
import FooterLogo from "../images/blog-logo2.png"

export default function Footer(){
    return(
        <div className="container column" >
            <section id="top-footer">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">    
                    <h4>Sign up to our news letter</h4>
                    <div className="d-flex justify-content-center " id="input-section2">
                        <input type="text" className="form-control" id="email-box2"/>
                        <button className="btn btn-dark ms-2" style={{width:"7rem"}}>Subscribe</button>
                    </div>
                </div>
                <p >Stay up to date with our latest news, announcements, and articles.</p>
            </section>
            <section className="row" id="footer-link-container">
                <div className="col-sm-12 col-md-3 " id="footer-about" >
                    <img src={FooterLogo} style={{width:"5rem"}}/>
                    <p>Share your thoughts, ideas, and experiences with the world. Create content that inspires and connects.</p>
                </div>
                <div className="col-sm-12 col-md-9 d-flex flex-column flex-md-row" id="footer-list-container">
                    <div className="flex-grow-1  d-flex flex-column align-items-center top-border">
                        <h5>Product</h5>
                        <ul>
                            <li>
                                <a>Overview</a>
                            </li>
                            <li>
                                <a>Features</a>
                            </li>
                            <li>
                                <a>Solutions</a>
                            </li>
                            <li>
                                <a>Tutorials</a>
                            </li>
                            <li>
                                <a>Pricing</a>
                            </li>
                            <li>
                                <a>Realeases</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-grow-1  d-flex flex-column align-items-center top-border">
                    <h5>Company</h5>
                        <ul>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">News</a>
                            </li>
                            <li>
                                <a href="#">Media kit</a>
                            </li>
                            <li>
                                <a href="#">Realeases</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-grow-1  d-flex flex-column align-items-center top-border">
                    <h5>Resources</h5>
                        <ul>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Newletter</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Help centre</a>
                            </li>
                            <li>
                                <a href="#">Tutorials</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-grow-1  d-flex flex-column align-items-center top-border">
                    <h5>Social</h5>
                        <ul>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">LinkedIn</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">GitHub</a>
                            </li>
                            <li>
                                <a href="#">AngelList</a>
                            </li>
                            <li>
                                <a href="#">Dribbble</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-grow-1  d-flex flex-column align-items-center top-border">
                    <h5>Legal</h5>
                        <ul>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Cookies</a>
                            </li>
                            <li>
                                <a href="#">Licenses</a>
                            </li>
                            <li>
                                <a href="#">Sttings</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
           
        </div>
    )
}