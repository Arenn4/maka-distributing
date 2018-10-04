import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import Header from './component/Header'
import './styles.css'
import BrandList from './component/BrandList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/" component={ Login }/>
        </Switch>
        <BrandList />
      
      </div>
    );
  }
}

export default App;
