import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrands } from "../redux";

// import:  redux function  & connect
class Brands extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.breweryData();
    }

    render() {
        return (
            // this.props.brands.map(beer)
            <div>
                <h1>Our Brands</h1>
                {this.props.breweryData.map(beers => (
                    <h1>{beers.name}</h1>
                ))}
            </div>
        );
    }
}

// connect state to redux
// & get action exportDefaultConnect(state => state, {getBreweryData }...then name of component in () )
// connect

export default connect(
    state => state,
    { getBrands }
)(Brands);
