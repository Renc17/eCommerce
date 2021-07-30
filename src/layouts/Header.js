import React from "react";
import logo from "../storage/canon-logo.png";
import {Link} from "react-router-dom";


function Header(){

    const ConditionalLink  = localStorage.getItem('token');
    console.log(ConditionalLink)

    const renderButton = () => {
        if (ConditionalLink) {
            return <Link to="/auth/user" className="nav-link text-white p-3 m-2 fw-bold" ><i className="bi bi-person-circle"></i></Link>
        } else {
            return <Link to="/auth/login" className="nav-link text-white p-3 m-2 fw-bold" >LOGIN</Link>
        }
    }

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
                        {renderButton()}
                        <Link to="/shop/cart" className="nav-link text-white p-3 m-2 " ><i className="bi bi-bag"/></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
