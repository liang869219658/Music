import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router,browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import { RouterConfig } from './routes';
import './scss/index.scss';

const initialState = {
	user: {
    token: "hello,world!"
  }
}

const store = configureStore(initialState);
const root = document.getElementById('app');

if ( __DEV__ ){
  console.log("现在是开发环境")
}

if (__PROD__) {
  console.log("现在是生产环境")
}



render(
  <Provider store= { store }>
    <Router routes={RouterConfig} history={browserHistory}/>
  </Provider>,
  root
)
