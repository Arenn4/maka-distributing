import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux';

const Header = (props) => {
    return (
        <div className="header">
            <h1>AJ MAKA DISTRIBUTING</h1>
            <button onClick={props.logout}>Logout</button>
        </div>
    );
};

export default connect(null, { logout }) (Header);