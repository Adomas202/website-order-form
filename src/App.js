import React, { Component } from 'react';
import './App.css';

import PersonalInformation from './components/PersonalInformation';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>WEBSITE ORDER FORM</h3>
        <PersonalInformation />
      </div>
    );
  }
}

export default App;
