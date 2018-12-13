import React, { Component, Fragment } from "react";
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
      <Fragment>
      <div className="brands-title">Check out our products</div>
      <div className="brands-container">
        {this.props.breweryData.map(brewers => {
          return <BrandList 
                    key={brewers._id}
                    name={brewers.name}
                    link={brewers.links}
                    logo={brewers.logo}/>
        })}
      </div>
      
      </Fragment>
     )
  }
}

export default connect(state=>state, { getBrands}) (Brands);
