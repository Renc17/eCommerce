import React from "react";
import logo from "../storage/canon-logo.png";
import {Link} from "react-router-dom";

//TODO: Make conditional Linking

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container p-4">
                <a className="navbar-brand" href="/" ><img src={logo} alt="logo" width="100"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <i className="bi bi-list text-white"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav flex-row justify-content-evenly">
                        <Link to="/shop" className="nav-link text-white p-3 m-2 fw-bold">STORE</Link>
                        <Link to="/auth/login" className="nav-link text-white p-3 m-2 fw-bold" >LOGIN</Link>
                        <Link to="/shop/cart" className="nav-link text-white p-3 m-2 " ><i className="bi bi-bag"/></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
