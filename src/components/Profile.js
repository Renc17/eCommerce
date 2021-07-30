import React, {Component} from "react";
import {Link} from "react-router-dom";

class Profile extends Component{
    constructor() {
        super();
        this.state = {
            loading: false,
            orders: []
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('token')){
            window.location.assign("http://localhost:3000/auth/login");
        }
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        };

        fetch('http://localhost:8080/api/v1/checkout', requestOptions)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState(
                    {
                        isLoading: true,
                        orders: json
                    }
                )
            })
    }

    logout = () => {
        localStorage.removeItem('token')
        window.location.assign("http://localhost:3000")
    }

    OrderCards = () => {
        if ( this.state.orders.length !== 0 ) {
            return this.state.orders.map( order =>
                <div className="text-decoration-none text-dark d-flex flex-column p-3 mt-2 mb-2" key={order.id} style={{border: "solid 1px rgba(0,0,0,0.1)"}}>
                    <div className="card-horizontal border-1 p-2" >
                        <div className="align-items-center d-flex flex-row col-md-6 p-3" >
                            <div className="text-black-50 text-start d-flex flex-column">
                                <div>{order.address.city}</div>
                                <div>{order.address.street} {order.address.number}</div>
                                <div>{order.address.po_box}</div>
                                <div>{order.address.phone}</div>
                                <div>{order.address.created_at}</div>
                            </div>
                        </div>
                        <div className="card-body m-auto text-start">
                            <div>Total ${order.address.total_cost}</div>
                        </div>
                    </div>

                    {this.getProducts(order.order)}

                </div>
            )
        }
    }

    getProducts = (order) => {
        return order.map(product =>
            <div className="card-horizontal border-1 p-2 d-flex flex-row" key={product.id}>
                <div className="align-items-center d-flex col-md-6 p-3" style={{borderRight: "solid 1px rgba(0,0,0,0.1)"}}>

                    <img src={`data:image/png;base64,${product.image }`} className=" card-img-top" style={{objectFit: "contain", height: "150px"}} />
                </div>
                <div className="card-body m-auto text-end">
                    <div className="card-body m-auto text-end">
                        <h5 className="card-title mt-1 fw-bolder highlights">{ product.title}</h5>
                        <div className="highlights text-black-50" style={{ fontSize: "15px"}}>${product.price}</div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "white", minHeight: "100vh"}}>
                <div className="d-flex justify-content-between">
                    <nav aria-label="breadcrumb" className="mx-5 mb-5">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" className="text-dark">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Profile</li>
                        </ol>
                    </nav>

                    <div className="mt-2 p-3">
                        <button onClick={() => { this.logout() }} className="btn btn-dark">Logout</button>
                    </div>
                </div>


                <div className="row col-md-6 flex-column m-auto justify-content-center ">
                    {this.OrderCards()}
                </div>
            </div>
        )
    }
}

export default Profile
