import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

// import:  redux function  & connect
class Brands extends Component {
  constructor() {
    super();
    this.state = { breweryData: [] };
  }

  componentDidMount() {
    axios.get(`/brewers`).then(res => {
      this.setState({
        breweryData: res.data
      });
    });
  }

  render() {
    console.log(this.props);
    const mappedData = this.state.breweryData.map(beers => {
      console.log(typeof beers.logo);

      // if beers.logo

      return (
        <Carousel.Item>
          <img src={beers.logo} alt="900x500" />
          <Carousel.Caption>
            <a href={beers.links}>{beers.name}</a>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      // this.props.brands.map(beer)
      <div className="d">
        <Carousel>{mappedData}</Carousel>
      </div>
    );
  }
}

export default Brands;
