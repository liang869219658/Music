import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import * as Actions from '../../actions';
import { MyComponent } from '../../components';
import { BgCanvas } from '../../components';

import './index.less';

class App extends Component {
  constructor(props,connect) {
    super(props,connect);
    this.state= {
      current: 'mail',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
      return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

  componentWillUpdate(nextProps,nextState){
      if (this.props !== nextProps) {

      }
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  componentDidMount(){
    let { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    let isFetching= this.props.posts.get("isFetching");
    return (
      <div className="home">
        <BgCanvas title="fff"/>
        <p className="home_title">{ isFetching?"正在拉去数据！":"成功！" }</p>
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
