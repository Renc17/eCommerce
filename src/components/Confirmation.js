import React from "react";
import {Link} from "react-router-dom";


function Confirmation({match}) {

    return (
        <div className="container-fluid text-center" style={{backgroundColor: "white", minHeight: "100vh"}}>
            <div className="d-flex flex-column justify-content-center">
                <div><i className="bi bi-check-circle" style={{fontSize: '100px'}}></i></div>
                <h1 className="mt-5">Thanks for your order</h1>
                <div className="text-black-50">You will be receiving a confirmation email with order details</div>
                <div>
                    <Link to={`/`} className="btn col-md-2 mt-3 btn-dark" style={{border: "2px solid black"}}>Return to homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default Confirmation
