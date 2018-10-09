import React from 'react';
import '../styles/brands.css'

const BrandList = (props) => {
    return (
        <div className="brand-box">
            <div className="brand-name">{props.name}</div>
            <img className="brand-image"src={props.logo} alt=""/>
            {/* <h6>{props.link}</h6> */}
        </div>
    );
};

export default BrandList;