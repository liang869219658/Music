import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { MyComponent } from '../../components';
import { Row, Col } from 'antd';

import { BgCanvas } from '../../components';

import './index.less';

class App extends Component {
  constructor(props,connect) {
    super(props,connect);
    this.state= {
      current: 'mail',
    };
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="home">
        <BgCanvas/>
        <p className="home_title">欢迎和我一起维护这个音乐项目！</p>
        <p className="home_text">
          <a className="home_text_a" href="http://github.com/liang869219658" target="_blank">github.com/liang869219658</a>
        </p>
      </div>
    );
  }
}



App.contextTypes = {
	router: React.PropTypes.object.isRequired
};


export default App;
