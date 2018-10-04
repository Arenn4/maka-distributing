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

      //  if beers.logo 

      return (
        <Carousel.Item>
          {beers.logo.length > 0 ?
            <a href={beers.links}><img className="logoBackground" src={beers.logo} /></a>
            : <div style={{
              backgroundColor: "black",
              width: "100%",
              height: "500px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end"
            }}>{beers.name}</div>
          }
          {/* <Carousel.Caption>

            <button><a className="beerName" href={beers.links}>{beers.name}</a></button>
          </Carousel.Caption> */}
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
