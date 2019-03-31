import React, { Component } from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';
import { MyContext } from '../components/Store';

import nationalities from '../json/nationalities.json';

class PersonalInformation extends Component {
  render() {
    return (
      <>
        <h3>WEBSITE ORDER FORM - 1</h3>
        <h4>Personal data</h4>
        <MyContext.Consumer>
          {context => (
            <form action="">
              <div>
                <label htmlFor="name">Full name</label>
                <input
                  name="name"
                  value={context.state.name}
                  type="text"
                  placeholder="Full name"
                  onChange={context.handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="nationality" name="nationality">
                  Nationality
                </label>
                <select
                  name="nationality"
                  onChange={context.handleOnChange}
                  value={context.state.nationality}
                >
                  <option value disabled selected>
                    Nationality
                  </option>
                  {nationalities.map(nationality => (
                    <option value={context.state.nationality}>
                      {nationality}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  onChange={context.handleOnChange}
                  value={context.state.gender}
                >
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
          )}
        </MyContext.Consumer>
      </>
    );
  }
}

export default PersonalInformation;
