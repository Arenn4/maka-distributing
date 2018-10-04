import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './component/Login';
import './styles.css'
import BrandList from './component/BrandList';
import ProtectedRoute from './component/ProtectedRoute';
import { verify } from './redux'

class App extends Component{

  componentDidMount = () => {
    this.props.verify()
}

  render(){
  const { isAuthenticated, loading } = this.props;
    return (
      <div className="container">
        
        {loading ? 
          <div>...Loading user data </div>
          :
          <Switch>
            <Route exact path="/" render={ props => isAuthenticated
                                            ?
                                            <Redirect to="/brandlist" /> 
                                            :
                                            <Login />}/>
            <ProtectedRoute path="/brandlist" component={ BrandList } />
          </Switch>
        }
      </div>
    );
      }
}

export default withRouter(connect(state=> ({isAuthenticated: state.isAuthenticated}), { verify })(App));
