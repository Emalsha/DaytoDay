import React, { Component, Fragment } from 'react';
import loading from './loading.svg';

class Callback extends Component {
  render() {

    return (
      <Fragment>
        <img src={loading} alt="loading"/>
      </Fragment>
    );
  }
}

export default Callback;