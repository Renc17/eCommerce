import React, {Component} from "react";
import {Link} from "react-router-dom";
import abstract from "../storage/Abstract-3d-art-background.png";

class Register extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="container min-vh-100">
                <div className="row justify-content-center align-items-center">
                    <div className="position-relative mt-5">
                        <div className="position-absolute abstract">
                            <img src={abstract} width="400" className="m-auto"/>
                        </div>
                        <div className="col-md-5 text-white login position-relative m-auto">
                            <h1 className="text-center fw-bold p-3">Create Account</h1>

                            <div className="row col-md-12 col-10 m-auto justify-content-evenly">
                                <div className="col-md-6 p-2 m-1 api">
                                    <a href="#" className="text-dark text-decoration-none"><i className="bi bi-google p-2"></i>Register With Google</a>
                                </div>
                                <div className="col-md-6 p-2 m-1 api">
                                    <a href="#" className="text-dark text-decoration-none"><i className="bi bi-facebook p-2"></i>Register With FaceBook</a>
                                </div>
                            </div>

                            <p className="mt-5 fw-bolder">-- OR --</p>

                            <form className="m-3 p-3 row">
                                <input className="border-bottom border-0 text-white p-2" style={{background: "transparent"}} placeholder="FirstName"/>
                                <input className="border-bottom border-0 text-white p-2" style={{background: "transparent"}} placeholder="LastName"/>
                                <input className="border-bottom border-0 text-white p-2" style={{background: "transparent"}} placeholder="Email"/>
                                <input className="border-bottom border-0 text-white p-2" style={{background: "transparent"}} placeholder="Password"/>
                                <button type="submit" className="btn btn-dark mt-3">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
