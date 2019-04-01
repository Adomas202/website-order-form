import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "./Store";

import countries from "../json/countries.json";

class ShippingDetails extends Component {
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
            </form>
            <div className="button-group">
              <div>
                <Link to="/orderReview">
                  <button className="btn next">Next</button>
                </Link>
                <Link to="/">
                  <button className="btn back">Back</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

export default ShippingDetails;
