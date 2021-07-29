import React, {Component} from "react";
import abstract from "../storage/Abstract-3d-art-background.png";
import {Link} from "react-router-dom";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit(event) {
        console.log('A name was submitted: ' + JSON.stringify(this.state));
        const value = this.state;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: window.location.assign("http://localhost:3000/shop"),
            body: JSON.stringify(value)
        }

        fetch('http://localhost:8080/api/v1/auth/login', requestOptions)
            .then(res=>{
                res.json()
            })
            .then(json=> {
                localStorage.setItem('token', json.token);
            })
        event.preventDefault();
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
                            <h1 className="text-center fw-bold p-3">Login</h1>

                            <div className="row col-md-12 col-10 m-auto justify-content-evenly">
                                <div className="col-md-5 p-2 m-1 api">
                                    <a href="#" className="text-dark text-decoration-none"><i className="bi bi-google p-2"></i>Login With Google</a>
                                </div>
                                <div className="col-md-5 p-2 m-1 api">
                                    <a href="#" className="text-dark text-decoration-none"><i className="bi bi-facebook p-2"></i>Login With FaceBook</a>
                                </div>
                            </div>

                            <p className="mt-5 fw-bolder">-- OR --</p>

                            <form className="m-3 p-3 row" onSubmit={this.handleSubmit}>
                                <input className="border-bottom border-0 text-white p-2" name="email" value={this.state.email} onChange={this.handleChange} style={{background: "transparent"}} placeholder="Email"/>
                                <input className="border-bottom border-0 text-white p-2" name="password" value={this.state.password} onChange={this.handleChange} style={{background: "transparent"}} placeholder="Password"/>
                                <input type="submit" value="Submit" className="btn btn-dark col-md-5 m-auto" style={{border: "2px solid black"}} />
                            </form>
                            <Link to="/auth/register" className="text-white text-decoration-none p-3" >Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
