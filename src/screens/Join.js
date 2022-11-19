import React, { Component, useState } from 'react';
import '../styles/Login.css';
import { signUpEmail } from '../firebase';
import { auth } from '../firebase';
export default class Join extends Component {
  state = {
    registerEmail : "",
    registerPassword : ""
  }
  signUpEmail = (registerEmail, registerPassword) => {
    signUpEmail(registerEmail, registerPassword);
  }
  render() {
    return (
      <form>
        <div className="all">
        <h3 className="title">Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="firstName"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" id="lastName"/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({registerEmail : e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({registerPassword : e.target.value})}
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="button" onClick={() => 
            this.signUpEmail(this.state.registerEmail, this.state.registerPassword)}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
        </div>
      </form>
    )
  }
}