import React, { Component, useState } from 'react';
import '../../style/Join.css';
import {Link} from 'react-router-dom';
export default class Join extends Component {
  state = {
    registerFirstName : "",
    registerLastName : "",
    registerFullName : "",
    registerEmail : "",
    registerPassword : ""
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
            onChange={(e) => this.setState({registerFirstName : e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Last name" 
            onChange={(e) => this.setState({registerFullName : e.target.value + this.state.registerFirstName})}/>
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
            <Link to="/Login">
          <button className="button">
            Sign Up
          </button>
          </Link>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
        </div>
      </form>
    )
  }
}