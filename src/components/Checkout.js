import React, {Component} from "react";

class Checkout extends Component {

    constructor() {
        super();
        this.state = {
            city: '',
            street: '',
            number: '',
            po_box: '',
            phone: '',
            card_no: '',
            exp_date: '',
            cvv: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + JSON.stringify(this.state));
        const value = this.state;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(value)
        }
        fetch(`http://localhost:8080/api/v1/checkout/1`, requestOptions).then(r => window.location.assign("http://localhost:3000/confirmation"));
        event.preventDefault();
    }

    checkout = (user_id, value) => {
        console.log('A name was submitted: ' + value);
        /*const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               value
            })
        }
        fetch(`http://localhost:8080/api/v1/checkout/${user_id}`, requestOptions).then(r => window.location.assign("http://localhost:3000/confirmation"));*/
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "white", minHeight: "100vh"}}>
                <div className="row justify-content-center align-items-center">
                    <div className="position-relative mt-5">
                        <div className="col-md-5 m-auto" style={{border: "1px solid rgba(0,0,0,0.2)"}}>
                            <h1 className="text-center fw-bold p-3">Checkout</h1>

                            <form className="m-3 p-3 row" onSubmit={this.handleSubmit}>
                                <div className="col-md-12 d-flex justify-content-between">
                                    <input className="border-bottom border-0 p-2 col-md-5" name="city" value={this.state.city} onChange={this.handleChange} style={{background: "transparent"}} placeholder="City"/>
                                    <input className="border-bottom border-0 p-2 col-md-5" name="street" value={this.state.street} onChange={this.handleChange} style={{background: "transparent"}} placeholder="Street"/>
                                </div>

                                <div className="col-md-12 d-flex justify-content-between mt-3">
                                    <input className="border-bottom border-0 p-2 col-md-3" name="number" value={this.state.number} onChange={this.handleChange} style={{background: "transparent"}} placeholder="Number"/>
                                    <input className="border-bottom border-0 p-2 col-md-3" name="po_box" value={this.state.po_box} onChange={this.handleChange} style={{background: "transparent"}} placeholder="P.O BOX"/>
                                    <input className="border-bottom border-0 p-2 col-md-3" name="phone" value={this.state.phone} onChange={this.handleChange} style={{background: "transparent"}} placeholder="Phone"/>
                                </div>

                                <div className="col-md-12 d-flex justify-content-between mt-3 mb-4">
                                    <input className="border-bottom border-0 p-2 col-md-3" name="card_no" value={this.state.card_no} onChange={this.handleChange} style={{background: "transparent"}} placeholder="Card Number"/>
                                    <input className="border-bottom border-0 p-2 col-md-3" name="exp_date" value={this.state.exp_date} onChange={this.handleChange} style={{background: "transparent"}} placeholder="Expire Date"/>
                                    <input className="border-bottom border-0 p-2 col-md-3" name="cvv" value={this.state.cvv} onChange={this.handleChange} style={{background: "transparent"}} placeholder="CVV"/>
                                </div>

                                <input type="submit" value="Submit" className="btn btn-dark col-md-5 m-auto" style={{border: "2px solid black"}} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout
