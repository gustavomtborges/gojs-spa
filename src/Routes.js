import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Gif from './Gif';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/gif" component={Gif} />
  </Switch>
)

export default Routes;