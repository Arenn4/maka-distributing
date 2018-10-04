import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBrands } from '../redux';

class EditData extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            links: "",
            logo: ""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    updateItem = e =>{
        e.preventDefault()
        const changeItem = {}
        if(this.state.name.trim().length > 0){
            changeItem.name = this.state.name
        }
        if(this.state.links.trim().length > 0){
            changeItem.links = this.state.links
        }
        if(this.state.logo.trim().length > 0){
            changeItem.logo = this.state.logo
        }
        this.props.updateBrands(this.props.items._id, changeItem)
        this.setState(prevState => ({
            title: "",
            cost: "",
            description: "",
            color: "",
            img: ""
            
        }))
        this.props.swapStatus()
    }

    //update function
// onMouseLeave={this.props.swapStatus}
    render(){
    return (
        <div >
            <form onSubmit={this.updateItem} className="edit-form">
            <input className="editInputs" 
                type="text" 
                value={this.state.name} 
                onChange={this.handleChange} 
                name="name"
                placeholder="Brand Name" 
                />
            <input className="editInputs" 
                type="text" 
                value={this.state.links} 
                onChange={this.handleChange} 
                name="links"
                placeholder="Brand Link" 
                />
            <input className="editInputs" 
                type="text" 
                value={this.state.logo} 
                onChange={this.handleChange} 
                name="logo"
                placeholder="Brand Logo" 
                />
                <button className="newData-btn">Submit</button>
            </form> 
        </div>
        );
    }
};

export default connect(null, { updateBrands }) (EditData);