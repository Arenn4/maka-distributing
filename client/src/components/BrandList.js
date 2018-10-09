import React, { Fragment } from 'react';
import '../styles/brands.css'

const BrandList = (props) => {
    console.log(props.link)
    return (
        <Fragment>
            
        <div className="brand-box">
            <div className="brand-name">{props.name}</div>
            <a href={props.link} target="_blank"><img className="brand-image" src={props.logo} alt=""/></a>
        </div>
        </Fragment>
    );
};

export default BrandList;