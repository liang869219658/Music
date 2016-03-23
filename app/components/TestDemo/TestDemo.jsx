import React, { Component } from 'react';

import './TestDemo.css';

class TestDemo extends Component {
  render() {
    return (
      <h1 className="demo">
        <span className="glyphicon glyphicon-th"></span>
        <span className="glyphicon glyphicon-plane"></span>
        this is a component
      </h1>
    );
  }
}

export default TestDemo;
