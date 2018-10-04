import React, { Component } from 'react';
import { addBrands } from '../redux'
import { connect } from 'react-redux';

class AddData extends Component {
    constructor(){
        super()
        this.state ={
            name: "",
            links: "",
            logo: ""
        }
    }

    addItem = (e) =>{
        e.preventDefault()
        const newBrand = {
            name: this.state.name,
            links: this.state.links,
            logo: this.state.logo
        }
        this.props.addBrands(newBrand)
        this.setState(prevState =>({
            name: "",
            links: "",
            logo: ""
        }))
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <form className="" onSubmit={this.addItem}>
                    <input 
                        type="text" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        name="name"
                        placeholder="Brand Name" 
                    />
                    <input 
                        type="text" 
                        value={this.state.links} 
                        onChange={this.handleChange} 
                        name="links"
                        placeholder="Brand Link" 
                    />
                    <input 
                        type="text" 
                        value={this.state.logo} 
                        onChange={this.handleChange} 
                        name="logo"
                        placeholder="Brand Logo" 
                    />
                    <button>Add Brand</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addBrands }) (AddData);