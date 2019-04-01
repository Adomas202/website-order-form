import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "./Store";

import countries from "../json/countries.json";

class ShippingDetails extends Component {
  constructor() {
    super();
    this.state = {
      valid: false
    };
  }

  handleToOrderReview = () => (
    <MyContext.Consumer>
      {context => {
        context.map(input => {
          if (!input) {
            this.setState({ valid: true });
          }
        });
        alert('Fill in all of the inputs');
      }}
    </MyContext.Consumer>
  );

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <>
            <h3>WEBSITE ORDER FORM - 2</h3>
            <h4>Shipping details</h4>
            <form>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  value={context.state.address}
                  onChange={context.handleOnChange}
                  name="address"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="relative">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  onChange={context.handleOnChange}
                  value={context.state.country}
                >
                  <option value disabled selected>
                    Country
                  </option>
                  {countries.map(country => (
                    <option>{country.name}</option>
                  ))}
                </select>
                <i class="fa fa-caret-down" aria-hidden="true" />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                  value={context.state.number}
                  onChange={context.handleOnChange}
                  name="number"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
              <div className="button-group">
                <Link to="/orderReview">
                  {this.state.valid ? (
                    <button
                      onClick={this.handleToOrderReview}
                      className="btn next"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={this.handleToOrderReview}
                      className="btn next"
                    >
                      Next
                    </button>
                  )}
                </Link>
                <Link to="/">
                  <button
                    onClick={this.handleToOrderReview}
                    className="btn back"
                  >
                    Back
                  </button>
                </Link>
              </div>
            </form>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

export default ShippingDetails;
