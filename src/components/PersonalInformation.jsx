import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import nationalities from '../json/nationalities.json';

class PersonalInformation extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      nationality: null,
      gender: null
    };
  }

  handleOnChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(nationalities);
  };

  render() {
    return (
      <>
        <h4>Personal data</h4>
        <form action="">
          <div>
            <label htmlFor="name">Full name</label>
            <input
              name="name"
              value={this.state.name}
              type="text"
              placeholder="Full name"
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="nationality" name="nationality">
              Nationality
            </label>
            <select>
              <option value disabled selected>
                Nationality
              </option>
              {nationalities.map(nationality => (
              <option>
                  {nationality}
              </option>
          ))}          
            </select>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select name="gender" onChange={this.handleOnChange}>
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
              <button className="btn">Next</button>
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default PersonalInformation;
