import React from "react";
import logo from "../images/blog-logo2.png";
import profileIcon from "../images/trollface.jpg"

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    <img src={logo} className="ms-4" alt="Blog logo"/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=""
                    aria-controls=""
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*links*/}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">
                                Home
                            </a>
                        </li>

                        {/*Products dropdown*/}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Products
                            </a>
                            <ul className="dropdown-menu" aria-labelby="navabarDropdown">
                                <li><a className="dropdown-item" href="#">Product 1</a></li>
                                <li><a className="dropdown-item" href="#">Product 2</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Product 3</a></li>
                            </ul>
                        </li>

                        {/*Solutions*/}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown2"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Products
                            </a>
                            <ul className="dropdown-menu" aria-labelby="navabarDropdown2">
                                <li><a className="dropdown-item" href="#">Solution 1</a></li>
                                <li><a className="dropdown-item" href="#">Solution 2</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Resources</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Company</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Careers</a>
                        </li>

                        <li className="nav-item" >
                            <a className="btn btn-get-started ms-3" href="#">
                                Get Started
                            </a>
                        </li>

                        <li className="nav-item user-avatar ms-3">
                            <a href="#">
                                <img src={profileIcon} alt="User Avatar" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}