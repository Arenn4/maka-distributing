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
            <h3 className="brand-title">{this.props.name}</h3>
            <img className="brand-images" src=
                                                {this.props.logo
                                                ? this.props.logo
                                                : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"} alt='' />
                                                {/* this image^^^ was found on freeiconspng.com */}
            <p className="brand-link">{this.props.links}</p>
            <button className="edit-btn" onClick={this.changeDisplay}><i className="fas fa-edit"></i></button>
            {this.state.status
            ?
            <div></div>
            :
            <EditData items={{...this.props}} swapStatus={this.changeDisplay}/>
            }
            <button className="delete-btn" onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></button>
        </div>

        );
    }
};

export default connect(null, { deleteBrands }) (Brands);