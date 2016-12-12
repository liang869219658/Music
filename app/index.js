import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { App } from './containers';

import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('app');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), root)
