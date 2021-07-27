import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


function Product({match}) {

    useEffect(() => {
        fetchProduct().then(r => console.log('Fetched product'));
        console.log(match);
    }, []);

    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
      const fetchProduct = await fetch(`http://localhost:8080/api/v1/products/${match.params.id}`);
      const product = await fetchProduct.json();
      setProduct(product);
      console.log('Product ', product);
    }

    return (
        <div className="container-fluid d-flex align-items-center" style={{backgroundColor: "white"}}>
            <div className="row align-items-center m-auto col-12">
                <div className="col-md-6">

                    <nav aria-label="breadcrumb" className="mx-5 mb-5">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/shop" className="text-dark">Store</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Canon EOS R</li>
                        </ol>
                    </nav>

                    <div className="d-flex align-items-start">
                        <img src={`data:image/png;base64,${product.image }`} className=" card-img-top" style={{objectFit: "contain", height: "300px"}} />
                    </div>
                </div>
                <div className="col-md-6 text-start p-5">
                    <div className="d-flex flex-column">
                        <h1 className="fw-bolder">{product.title}</h1>
                        <p className="highlights mt-3 col-md-10">{product.description}</p>
                        <h3 className="fw-bolder mb-3 mt-3">$ {product.price}</h3>
                        <button type="button" className="btn col-md-5 mt-3" style={{border: "2px solid black"}}>Add to Cart</button>
                        <div className="highlights mt-5 col-md-10"><i className="bi bi-arrow-counterclockwise p-1"></i> Free 30 day returns</div>
                        <div className="highlights col-md-10"><i className="bi bi-truck p-1"></i> Free Shipping</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
