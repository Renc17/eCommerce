import React from "react";

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="row flex-column col-md-5 m-auto">
                    <div className="text-start mt-5 mb-5 text-white fw-bold">NEWSLETTER</div>
                    <input className="border-bottom border-0 text-white" style={{background: "transparent"}} placeholder="Enter your email"/>
                </div>

                <div className="blockquote-footer mt-5">
                    <ul className="navbar-nav flex-row m-auto row justify-content-center">
                        <li className="col-md-2 nav-item">
                            <a className="nav-link text-white" href="https://instagram.com">Instagram</a>
                        </li>
                        <li className="col-md-2 nav-item">
                            <a className="nav-link text-white" href="https://facebook.com">Facebook</a>
                        </li>
                        <li className="col-md-2 nav-item">
                            <a className="nav-link text-white" href="https://Twitter.com">Twitter</a>
                        </li>
                        <li className="col-md-2 nav-item">
                            <a className="nav-link text-white" href="https://Pinterest.com">Pinterest</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
