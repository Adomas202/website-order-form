import React, { Component } from 'react';

export const MyContext = React.createContext();

class Store extends Component {
  state = {
    name: null,
    address: null,
    nationality: null,
    gender: null,
    country: null,
    number: null,
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          handleOnChange: e => {
            e.preventDefault();
            this.setState({ [e.target.name]: e.target.value });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default Store;
