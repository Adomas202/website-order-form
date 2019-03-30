import React from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import OrderReview from "./OrderReview";

const ShippingDetails = () => (
  <>
    <h4>Personal data</h4>
    <form action="">
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" placeholder="Address" />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select>
          <option value disabled selected>
            Country
          </option>
          {/* {nationalities.map(nationality => (
            <option>nationality</option>
          ))} */}
        </select>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number</label>
        <input type="text" placeholder="Phone number" />
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

export default ShippingDetails;
