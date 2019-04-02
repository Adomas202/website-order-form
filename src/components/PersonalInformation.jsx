import React from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './Store';

import nationalities from '../json/nationalities.json';

const PersonalInformation = () => (
  <>
    <h3>WEBSITE ORDER FORM</h3>
    <h4>Personal data</h4>
    <MyContext.Consumer>
      {context => (
        <>
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
            <div className="relative">
              <label htmlFor="nationality">Nationality</label>
              <select
                name="nationality"
                onChange={context.handleOnChange}
                value={context.state.nationality}
              >
                <option value disabled selected>
                  Nationality
                </option>
                {nationalities.map(nationality => (
                  <option>{nationality}</option>
                ))}
              </select>
              <i className="fa fa-caret-down" aria-hidden="true" />
            </div>
            <div className="relative">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                onChange={context.handleOnChange}
                value={context.state.gender}
              >
                <option value disabled selected>
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <i className="fa fa-caret-down" aria-hidden="true" />
            </div>
          </form>
          <div className="button-group">
            <div>
              <Link to="/shippingDetails">
                <button type="submit" className="btn next">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </MyContext.Consumer>
  </>
);

export default PersonalInformation;
