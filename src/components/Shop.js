import React, {Component} from "react";
import {Link} from "react-router-dom";

class Shop extends Component{
    constructor() {
        super();
        this.state = {
            loading: false,
            products: []
        }
    }

    componentDidMount() {
        /*this.setState({loading: true})
        fetch("")
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });*/
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                console.log(json);
                this.setState(
                    {
                        isLoading: true,
                        products: json
                    }
                )
            })
    }

    productCards = () => {
        if ( this.state.products.length !== 0 ) {
            return this.state.products.map( product =>


                <div className="card col-md-3 border-0 p-2" key={product.id}>
                    <Link to={`/shop/product/${product.id}`} className="text-decoration-none text-dark">
                        <div style={{ height: "350px" }} className="align-items-center d-flex">
                            <img src={ product.image} className=" card-img-top" alt="..." style={{objectFit: "contain", height: "300px"}}/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-start mt-1 highlights">{ product.title}</h5>
                            <div className="highlights text-start text-black-50" style={{ fontSize: "15px"}}>${product.price}</div>
                        </div>
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "white"}}>
                <div className="row flex-row m-auto justify-content-evenly">
                    {this.productCards()}
                </div>
            </div>
        )
    }
}

export default Shop
