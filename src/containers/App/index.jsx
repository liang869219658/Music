import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { MyComponent } from '../../components';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent />
        <p>
          欢迎在github上一起维护这个脚手架项目<br />
          https://github.com/GuoYongfeng
        </p>
      </div>
    );
  }
}



App.contextTypes = {
	router: React.PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
