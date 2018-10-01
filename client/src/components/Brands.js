import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrands } from "../redux";
import { Carousel } from 'react-bootstrap'


// import:  redux function  & connect
class Brands extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getBrands();
    }

    render() {
        console.log(this.props)
        const mappedData = this.props.breweryData.map(beers =>
            <Carousel.Item>
                <img src={beers.logo}
                // alt="900x500"
                />
                <Carousel.Caption>
                    <a href={beers.links}>{beers.name}</a>
                </Carousel.Caption>
            </Carousel.Item>
        )

        return (
            // this.props.brands.map(beer)
            <div className="d">
                <Carousel>
                    {mappedData}
                </Carousel>
            </div>
        );
    }
}

// transform: rotateY(0deg) translateZ(288px)

// connect state to redux
// & get action exportDefaultConnect(state => state, {getBreweryData}...then name of component in () )
// connect

export default connect(
    state => state,
    { getBrands }
)(Brands);
