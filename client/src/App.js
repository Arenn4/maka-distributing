import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
