import React, { Component } from 'react';
import EditData from './EditData';
import { deleteBrands } from '../redux'
import { connect } from 'react-redux';

class Brands extends Component{
    constructor(){
        super()
        this.state = {
            status: true
        }
    }

    changeDisplay = e =>{
        this.setState(prevState =>{
          return{
          status: !prevState.status
          }
        })
      }
    
      handleDelete = e =>{
        e.preventDefault()
        this.props.deleteBrands(this.props._id)
      }

    render(){
    return (
        <div className="editBox">
            <h4>{this.props.name}</h4>
            <img src={this.props.logo} alt='' className="images"/>
            <p>{this.props.links}</p>
            <button onClick={this.handleDelete}>Delete</button>
            {this.state.status
            ?
            <button onClick={this.changeDisplay}>Edit Brand</button>
            :
            <EditData items={{...this.props}} swapStatus={this.changeDisplay}/>}
        </div>

        );
    }
};

export default connect(null, { deleteBrands }) (Brands);