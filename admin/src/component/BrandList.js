import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBrands } from '../redux'
import Brands from './Brands';
import AddData from './AddData';
import { verify } from '../redux';
import Header from './Header';

class BrandList extends Component{
    
    componentDidMount = () => {
        this.props.verify()
        this.props.getBrands() 
    }

    render(){
        const { isAuthenticated } = this.props;
    return (
        <div>
            <Header />
            <AddData />
                <div className="editWrapper">
                    {this.props.breweryData.map(brewers => {
                            return <Brands 
                                        key={brewers._id}
                                        {...brewers}
                                        item={brewers}/>
                    })}
                </div>
        </div>
        
        );
    }
};

export default connect(state=>state, { getBrands, verify }) (BrandList);