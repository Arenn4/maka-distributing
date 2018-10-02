import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route path='/login' component={ Login } /> 
          <Route path='/admin' component={ Admin } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
