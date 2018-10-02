import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class ProtectedRoutes extends Component{


    render(){
        const { isAuthenticated, redirectTo } = this.props
    return (
        isAuthenticated
            ? this.props.render()
            : <Redirect to={ redirectTo } />
        );
    }
};

export default connect(state=>state, null) (ProtectedRoutes);