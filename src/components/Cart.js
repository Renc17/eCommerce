import React, {Component} from "react";
import {Link} from "react-router-dom";

class Cart extends Component{
    constructor() {
        super();
        this.state = {
            loading: false,
            products: []
        }
    }

    emptyCart = () => {
        if (!localStorage.getItem('token')){
            window.location.assign("http://localhost:3000/auth/login");
        }
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        };
        fetch(`http://localhost:8080/api/v1/cart`, requestOptions).then(r => window.location.assign("http://localhost:3000/shop"));
    }

    removeProduct = (product_id) => {
        if (!localStorage.getItem('token')){
            window.location.assign("http://localhost:3000/auth/login");
        }
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            redirect: window.location.reload()
        }
        fetch(`http://localhost:8080/api/v1/cart/${product_id}`, requestOptions);
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

        fetch('http://localhost:8080/api/v1/cart', requestOptions)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState(
                    {
                        isLoading: true,
                        products: json.products,
                        cost: json.total_cost
                    }
                )
            })
    }

    productCards = () => {
        if ( this.state.products.length !== 0 ) {
            return this.state.products.map( product =>
                <div className="card-horizontal border-1 p-2" key={product.id}>
                    <Link to={`/shop/product/${product.id}`} className="text-decoration-none text-dark d-flex p-3 mt-4" style={{border: "solid 1px rgba(0,0,0,0.1)"}}>
                        <div className="align-items-center d-flex col-md-6 p-3" style={{borderRight: "solid 1px rgba(0,0,0,0.1)"}}>
                            <img src={`data:image/png;base64,${product.image }`} className=" card-img-top" style={{objectFit: "contain", height: "150px"}} />
                        </div>
                        <div className="card-body m-auto text-end">
                            <h5 className="card-title mt-1 fw-bolder highlights">{ product.title}</h5>
                            <div className="highlights text-black-50" style={{ fontSize: "15px"}}>${product.price}</div>
                            <button onClick={() => { this.removeProduct( product.id) }} className="btn col-md-3 mt-3 text-black-50" style={{border: "2px solid black"}}>Remove</button>
                        </div>
                    </Link>
                </div>
            )
        }
    }

    total_cost = () => {
        if ( this.state.products.length !== 0 ) {
            return this.state.cost;
        }
    }


    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "white", minHeight: "100vh"}}>
                <div className="row col-md-6 flex-column m-auto justify-content-center ">
                    <div className="text-end fw-bolder mt-5">
                        <button onClick={() => { this.emptyCart(1) }} className="btn delete-btn"><i className="bi bi-trash"></i></button>
                    </div>
                    {this.productCards()}
                    <div className="text-end fw-bolder mt-5">Total ${this.total_cost()}</div>
                    <div className="d-flex justify-content-end">
                        <Link to={`/checkout`} className="btn col-md-3 mt-3 btn-dark" style={{border: "2px solid black"}}>Checkout</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
