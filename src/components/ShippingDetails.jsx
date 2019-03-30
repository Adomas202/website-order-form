import React, { Component } from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import OrderReview from "./OrderReview";
import countries from '../json/countries.json';

class ShippingDetails extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      country: "",
      number: ""
    };
  }

  handleOnChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <h4>Personal data</h4>
        <form action="">
          <div>
            <label htmlFor="address">Address</label>
            <input
              value={this.state.address}
              onChange={this.handleOnChange}
              name="address"
              type="text"
              placeholder="Address"
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select name="country" onChange={this.handleOnChange}>
              <option value disabled selected>
                Country
              </option>
              {/* <option>Lithuanian</option> */}
              {countries.map(country => (
              <option>{country.name}</option>
            ))}
            </select>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              value={this.state.number}
              onChange={this.handleOnChange}
              name="number"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <div>
            <Link to="/orderReview">
              <button className="btn">Next</button>
            </Link>
            <Link to="/">
              <button className="btn">Back</button>
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default ShippingDetails;
