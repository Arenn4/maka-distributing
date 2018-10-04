import React, { Component } from 'react';
import { login } from '../redux';
import { connect } from 'react-redux';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }

    render(){
        // inputs = { username, password } 
    return (
        <div className="login">
            
            <span>Login</span>
            <input 
                className="inputs"
                // value={username}
                // onChange={}
                type="text" 
                placeholder="username"/>
            <input 
                className="inputs"
                // value={password}
                // onChange={}
                type="text" 
                placeholder="password"/>
                <button>Login</button>
        </div>
        );
    }
};

export default connect(null, { login } ) (Login);