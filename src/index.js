import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import Home from './pages/Home';
import Signin from './pages/Signin';

import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter basename="/CodeShare">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/signin" component={Signin} />
      {/* <Redirect from="/old-match" to="/will-match" />
      <Route path="/will-match" component={WillMatch} />
      <Route component={NoMatch} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
