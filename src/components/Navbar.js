import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../image/logo.png";
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <header className="header-1" id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-sm-3 col-md-3">
                            <div className="logo">
                                <Link href=""><img src={Logo}alt="logo"/></Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-sm-7 col-md-7 top">
                            <nav className="navbar navbar-expand-lg mainmenu text-center">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#cool">
                                    <span className="navbar-toggler-icon">
                                        <i className="fa fa-bars"></i>
                                    </span>
                                </button>

                                <div className="collapse navbar-collapse " id="cool">

                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="" className="nav-link">HOME</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="" className="nav-link">SERVICES</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="" className="nav-link">CONTACTS</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="" className="nav-link">LOCATIONS</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="" className="nav-link">FAQ</Link>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                        <div className="col-lg-2 col-sm-2 col-md-2">
                            <div className="navigator">
                                <Link href="" className="search">
                                    <i className="fa fa-search"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;

 
