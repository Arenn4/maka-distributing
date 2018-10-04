import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBrands } from '../redux'
import Brands from './Brands'
import AddData from './AddData'

class BrandList extends Component{
    
    componentDidMount = () => {
        this.props.getBrands()
    }

    render(){
    return (
        <div>
            <AddData />
                <div className="editWrapper">
                    
                    {this.props.breweryData.map(brewers => {
                        {
                            return <Brands 
                                        key={brewers._id}
                                        {...brewers}
                                        item={brewers}/>
                        }
                    })}
                    
                </div>
        </div>
        
        );
    }
};

export default connect(state=>state, { getBrands }) (BrandList);