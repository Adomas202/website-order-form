import React from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './Store';

const OrderReview = () => (
  <MyContext.Consumer>
    {context => (
      <>
        <h3>WEBSITE ORDER FORM - 3</h3>
        <h4>Order review</h4>
        <table>
          <tr>
            <td>
              Full name
              <br />
              {context.state.name}
            </td>
            <td>
              Address
              <br />
              {context.state.address}
            </td>
          </tr>
          <tr>
            <td>
              Nationality
              <br />
              {context.state.nationality}
            </td>
            <td>
              Country
              <br />
              {context.state.country}
            </td>
          </tr>
          <tr>
            <td>
              Gender
              <br />
              {context.state.gender}
            </td>
            <td>
              Phone number
              <br />
              {context.state.number}
            </td>
          </tr>
        </table>
        <div className="button-group">
          <Link to="/shippingDetails">
            <button type="submit" className="btn back">Back</button>
          </Link>
        </div>
      </>
    )}
  </MyContext.Consumer>
);

export default OrderReview;
