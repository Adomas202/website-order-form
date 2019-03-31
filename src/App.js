import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import PersonalInformation from "./components/PersonalInformation";
import OrderReview from "./components/OrderReview";
import ShippingDetails from "./components/ShippingDetails";
import Store from "./components/Store";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Store>
          <div className="container">
            <Route path="/" exact component={PersonalInformation} />
            <Route path="/shippingDetails" component={ShippingDetails} />
            <Route path="/orderReview" component={OrderReview} />
          </div>
        </Store>
      </BrowserRouter>
    );
  }
}

export default App;
