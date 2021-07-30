import React from "react";
import image from "../storage/pngfind.com-vlog-camera-png-6754689.png";
import image2 from "../storage/eos-r.png";
import image3 from "../storage/pngfind.com-canon-6d-png-3330836.png"
import {Link} from "react-router-dom";

function Welcome() {

    return (
        <div className="container-fluid">
            <section className="mb-5 container">
                <div className="col-md-5 m-auto">
                    <h1 className="text-center text-white fw-bolder intro">THE ALL NEW <br/> <div className="name">CANON EOS R</div></h1>
                    <img className="hero contrast saturate brightness mb-4" src={image} alt="canon-eos-r"/>
                </div>

                <div className="d-flex purchase col-md-3 justify-content-center m-auto ">
                    <Link to="/shop/product/1" className="text-decoration-none fw-bold p-2 ">Order Now</Link>
                </div>

                <div className="row highlights mt-5">
                    <div className="col-md-4 col-s-12 text-white text-start border-end p-4">
                        <h3 className="fw-bold">4K</h3>
                        <p className="highlights">Output 4K video footage in 10-bit via HDMI to an external recorder for exceptional quality</p>
                    </div>
                    <div className="col-md-4 text-white text-start border-end p-4">
                        <h3 className="fw-bold">Dual Pixel CMOS AF</h3>
                        <p className="highlights">Film using Dual Pixel CMOS AF for exceptionally smooth and precise focus transitions</p>
                    </div>
                    <div className="col-md-4 text-white text-start p-4">
                        <h3 className="fw-bold">Canon Log</h3>
                        <p className="highlights">Record 4K movies in Canon Log for 12-stops of dynamic range at ISO 400</p>
                    </div>
                </div>
            </section>

            <section className="more background">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-4 text-start mt-5 layer p-5 m-5">
                        <h1 className="fw-bolder">The perfect blend of handling and great design</h1>
                        <p className="highlights">Canon EOS R has the same comfortable handgrip found on EOS DSLRs and coupled with a high degree of customisation. Innovations such as a multi-function touch bar, a high resolution electronic viewfinder and Vari-angle screen, makes it a camera designed to perform effortlessly and intuitively.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="contrast saturate brightness sepia huerotate hero" src={image2} alt="canon-eos-r" width="400"/>
                    </div>
                </div>
            </section>

            <section className="details" >
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-4 m-auto">
                        <img className="hero contrast saturate brightness mt-5" src={image3} alt="canon-eos-r"/>
                    </div>
                    <div className="col-md-6 text-start mt-5">
                        <h1 className="text-white text-center mt-5 mb-5 fw-bolder">Specifications</h1>
                        <div className="row">
                            <div className="col-md-6 p-1">
                                <div className="col-md-8 text-white text-start mb-5 mt-5 border-bottom">
                                    <h6 className="fw-bold">Effective pixels</h6>
                                    <p className="highlights">Approx. 30.3 megapixels</p>
                                </div>
                                <div className="col-md-8 text-white text-start mb-5 mt-5 border-bottom">
                                    <h6 className="fw-bold">Dual Pixel RAW</h6>
                                    <p className="highlights">Image Microadjustment, Bokeh Shift, Ghosting Reduction</p>
                                </div>
                                <div className="col-md-8 text-white text-start mb-5 mt-5 border-bottom">
                                    <h6 className="fw-bold">AF points</h6>
                                    <p className="highlights">5655 selectable AF positions</p>
                                </div>
                                <div className="col-md-8 text-white text-start mb-5 mt-5 border-bottom">
                                    <h6 className="fw-bold">GPS</h6>
                                    <p className="highlights">via Phone using Canon connect App</p>
                                </div>
                            </div>
                            <div className="col-md-6 p-1">
                                <div className="col-md-8 text-white text-start mb-5 mt-5 border-bottom">
                                    <h6 className="fw-bold">Continuous Shooting</h6>
                                    <p className="highlights">Max. approx. 8fps with one-shot AF Max. approx. 5fps with Servo AF/AE</p>
                                </div>
                                <div className="col-md-8 text-white text-start mb-5 mt-5 border-bottom">
                                    <h6 className="fw-bold">4K EOS Movies</h6>
                                    <p className="highlights">UHD 4K up to 25/30p (max 29min 59sec) MP4</p>
                                </div>
                                <div className="col-md-8 text-white text-start mb-5 mt-5 border-bottom">
                                    <h6 className="fw-bold">Other Movies</h6>
                                    <p className="highlights">Full HD up to 50/60p, HD up to 100/120p
                                    HDR Movie, 4K Time-lapse Movie</p>
                                </div>
                                <div className="col-md-8 text-white text-start mb-5 mt-5 border-bottom">
                                    <h6 className="fw-bold">Battery</h6>
                                    <p className="highlights">LP-E6 / LP-E6N (LP-E6N only can be charged in camera via USB charger)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Welcome
