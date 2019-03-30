import React from "react";

import { Link } from 'react-router-dom';

const OrderReview = () => (
  <>
    <h4>ORDER REVIEW</h4>
    <table>
      <tr>
        <td>
          Full name
          <br />
          Adomas Poleninas
        </td>
        <td>
          Address <br />
          S. Daukanto s. 2, Vilnius
        </td>
      </tr>
      <tr>
        <td>Cell (1,1)</td>
        <td>Cell (1,2)</td>
      </tr>
      <tr>
        <td>Cell (2,1)</td>
        <td>Cell (2,2)</td>
      </tr>
      <tr>
        <td>Cell (3,1)</td>
        <td>Cell (3,2)</td>
      </tr>
    </table>
    <Link to="/shippingDetails">
      <button className="btn">Back</button>
    </Link>
  </>
);

export default OrderReview;
