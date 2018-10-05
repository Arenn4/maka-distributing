import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="g">
      <div className="contact">
        <input className="textInput"
          name="email"
          placeholder="Email"
          type="text"
        />
        <input className="textInput"
          name="name"
          placeholder="Name & phone number"
          type="text"
        />
        <textarea className="textAreaInput"
          placeholder="Message" />
        <button>send</button>
      </div>
    </div>
  );
};

export default Contact;
