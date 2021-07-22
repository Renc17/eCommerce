import React from "react";
import image from "../storage/pngfind.com-vlog-camera-png-6754689.png";
import image2 from "../storage/03_EOS_R_Back_Body_106213010763067.jpeg";
import image3 from "../storage/09_canon-full-frame-mirrorless-4K-video-side-view_250303554185752.jpeg"
import {Link} from "react-router-dom";

// TODO: add backend
// TODO: Make it dynamic

function Product() {
    return (
        <div className="container-fluid d-flex align-items-center" style={{backgroundColor: "white", height: "100vh"}}>
            <div className="row align-items-center">
                <div className="col-md-6">

                    <nav aria-label="breadcrumb" className="mx-5 mb-5">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/shop" className="text-dark">Store</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Canon EOS R</li>
                        </ol>
                    </nav>

                    <div className="d-flex align-items-start">
                        <div className="nav flex-column nav-pills col-4" id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">
                            <button style={{backgroundColor: "transparent"}} className="nav-link active m-auto col-md-3 border" id="v-pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                                    aria-selected="true"><img className="contrast saturate brightness" src={image} alt="canon-eos-r" style={{objectFit: "contain", width: "100%" }}/>
                            </button>
                            <button style={{backgroundColor: "transparent"}} className="nav-link m-auto col-md-3 border" id="v-pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-profile" type="button" role="tab"
                                    aria-controls="v-pills-profile" aria-selected="false"><img className="contrast saturate brightness" src={image2} alt="canon-eos-r" style={{objectFit: "contain", width: "100%" }}/>
                            </button>
                            <button style={{backgroundColor: "transparent"}} className="nav-link m-auto col-md-3 border" id="v-pills-messages-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-messages" type="button" role="tab"
                                    aria-controls="v-pills-messages" aria-selected="false"><img className="contrast saturate brightness" src={image3} alt="canon-eos-r" style={{objectFit: "contain", width: "100%" }}/>
                            </button>
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active col-md-12" id="v-pills-home" role="tabpanel"
                                 aria-labelledby="v-pills-home-tab">
                                <img className="contrast saturate brightness p-5" src={image} alt="canon-eos-r" style={{objectFit: "contain", width: "100%" }}/>
                            </div>
                            <div className="tab-pane fade col-md-12" id="v-pills-profile" role="tabpanel"
                                 aria-labelledby="v-pills-profile-tab">
                                <img className="contrast saturate brightness p-5" src={image2} alt="canon-eos-r" style={{objectFit: "contain", width: "100%" }}/>
                            </div>
                            <div className="tab-pane fade col-md-12" id="v-pills-messages" role="tabpanel"
                                 aria-labelledby="v-pills-messages-tab">
                                <img className="contrast saturate brightness p-5" src={image3} alt="canon-eos-r" style={{objectFit: "contain", width: "100%" }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-start p-5">
                    <div className="d-flex flex-column">
                        <h1 className="fw-bolder">Canon EOS R</h1>
                        <p className="highlights mt-3 col-md-10">With a high-speed and wide lens mount, Canon EOS R is an interchangeable lens camera that’s compatible with the new era of RF lenses which have been designed to work at the optimum distance from a full-frame sensor.</p>
                        <h3 className="fw-bolder mb-3 mt-3">$1170</h3>
                        <button type="button" className="btn col-md-3 mt-3" style={{border: "2px solid black"}}>Add to Cart</button>
                        <div className="highlights mt-5 col-md-10"><i className="bi bi-arrow-counterclockwise p-1"></i> Free 30 day returns</div>
                        <div className="highlights col-md-10"><i className="bi bi-truck p-1"></i> Free Shipping</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
