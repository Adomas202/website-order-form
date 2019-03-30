import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from 'react-router-dom';

import PersonalInformation from "./components/PersonalInformation";
import OrderReview from "./components/OrderReview";

import ShippingDetails from "./components/ShippingDetails";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h3>WEBSITE ORDER FORM</h3>
          <Route path="/" exact component={PersonalInformation} />
          <Route path="/shippingDetails" component={ShippingDetails} />
          <Route path="/orderReview" component={OrderReview} />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
