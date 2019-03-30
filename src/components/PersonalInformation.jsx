import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ShippingDetails from "./ShippingDetails";

// import nationalities from '../json/nationalities';

const PersonalInformation = () => {
  return (
    <>
      <h4>Personal data</h4>
      <form action="">
        <div>
          <label htmlFor="name">Full name</label>
          <input type="text" placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="nationality">Nationality</label>
          <select>
            <option value disabled selected>
              Nationality
            </option>
            {/* {nationalities.map(nationality => (
              <option>
                  nationality
              </option>
          ))}           */}
          </select>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select>
            <option value disabled selected>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <i class="fas fa-caret-down" />
        </div>
        <div>
          <Link to="/shippingDetails">
            <button className="btn">
              Next
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default PersonalInformation;
