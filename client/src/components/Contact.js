import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendEmail } from '../redux';
import "../styles/contact.css";

class Contact extends Component{
constructor(){
    super()
    this.state = {
        fName: "",
        lName: "",
        email: "",
        message: ""
    }
}

    sendMsg = (e) =>{
    e.preventDefault()
    const msg = {
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email,
        message: this.state.message
    }
    this.props.sendEmail(msg)
    this.setState(prevState => ({
        fName: "",
        lName: "",
        email: "",
        message: ""
        }))
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
      return (
          <div className="contact-container z-depth-4">
          <div className="contact-title">Drop us a line</div>
              <div className="row">
                  <form onSubmit={this.sendMsg}className="col s12">
                      <div className="row">
                          <div className="input-field col s6">
                          <input value={this.state.fName} type="text" name="fName" className="validate white-text" onChange={this.handleChange}/>
                          <label >First Name</label>
                          </div>
                          <div className="input-field col s6">
                              <input value={this.state.lName} type="text" name="lName" className="validate white-text" onChange={this.handleChange}/>
                              <label >Last Name</label>
                          </div>
                      </div>
                      <div className="row">
                          <div className="input-field col s12">
                              <input value={this.state.email} type="email" name="email" className="validate white-text" onChange={this.handleChange}/>
                              <label >Enter Email Address</label>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col s12">
                              <div className="row">
                                  <div className="input-field col s12">
                                  <textarea value={this.state.message} className="materialize-textarea white-text" name='message' onChange={this.handleChange}></textarea>
                                  <label >Enter Message</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button className="btn waves-effect #424242 grey darken-3 waves-light" type="submit" name="action">Send
                          <i className="material-icons right">send</i>
                      </button>
                  </form>
              </div>
          </div>
          );
      }
  };

export default connect(state=>state, { sendEmail })(Contact);



// render(){
//   return (
//     <div className="contact-container">
//       <form onSubmit={this.sendMsg}>
//           <label >First Name</label>
//           <input value={this.state.fName} type="text" name="fName" className="validate" onChange={this.handleChange}/>

//           <label >Last Name</label>
//           <input value={this.state.lName} type="text" name="lName" className="validate" onChange={this.handleChange}/>

//           <label >Email</label>    
//           <input value={this.state.email} type="email" name="email" className="validate" onChange={this.handleChange}/>
              
//           <label >Enter Message</label>
//           <textarea value={this.state.message} className="materialize-textarea" name='message' onChange={this.handleChange}></textarea>
          
//           <button className="btn waves-effect #424242 grey darken-3 waves-light" type="submit" name="action">Send
//           </button>
//       </form>
//     </div>
//   );
// }
// };
