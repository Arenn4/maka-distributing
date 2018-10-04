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
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(credentials)
        this.setState(prevState => ({
            username: '',
            password: ''
        }))
    }

    render(){
        
        let authErrCode = this.props.authErrCode.login;
        let errMsg = ""
        if (authErrCode < 500 && authErrCode > 399){
            errMsg = "Invalid username or password!"
        } else if (authErrCode > 499){
            errMsg = "Server Error!"
        }
        console.log(errMsg)
    return (
        <div className="login">
            <form onSubmit={this.handleSubmit} className="loginForm">
                <span className="loginText">Login:</span>
                <input 
                    className="inputs"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="text" 
                    placeholder="username"/>
                <input 
                    className="inputs"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="text" 
                    placeholder="password"/>
                    <button className="loginBtn">Login</button>
                    
            </form>
            <p>{errMsg}</p>
        </div>
        );
    }
};

export default connect(state => ({authErrCode: state.authErrCode}), { login } ) (Login);