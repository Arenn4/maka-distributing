import React, { Component } from "react";
import { connect } from 'react-redux';
import { getBrands } from '../redux';
import BrandList from './BrandList'
import "../styles/brands.css"

class Brands extends Component {
  constructor() {
    super();
    this.state = { 
      breweryData: [] 
    };
  }

  componentDidMount() {
    this.props.getBrands()
  }
    render() {
    return (
      <div className="brands-container">
        {this.props.breweryData.map(brewers => {
          return <BrandList 
                    key={brewers._id}
                    name={brewers.name}
                    link={brewers.link}
                    logo={brewers.logo}/>
        })}
      </div>
     )
  }
}

export default connect(state=>state, { getBrands}) (Brands);
