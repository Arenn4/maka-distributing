import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux';
import  logo from "/Users/student/dev/maka-distributing/admin/src/data/ajMakaBlank.png"

const Header = (props) => {
    const { isAuthenticated } = props
    return (
        <div className="header">
                {/* <span className="logOutAdmin"><i class="fas fa-user"></i>Admin</span> */}
                <img className="header-logo"src={logo} alt="" />
                <span className="headerText">AJ MAKA DISTRIBUTING</span>
                {isAuthenticated && <div><span onClick={props.logout} className="logOutText">Logout</span></div>}
        </div>
    );
};

export default connect(state => ({isAuthenticated: state.isAuthenticated}), { logout })(Header);