import React, { useState, useEffect, Component } from 'react';
import { signInEmail, signInGoogle } from '../../firebase';
import '../../style/Login.css'
import { auth, signInWithRedirect, provider } from '../../firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import {Link} from 'react-router-dom';
export default class Login extends Component {
    state = {
        loginEmail : "",
        loginPassword : ""
      }

      render() {
        return (
        <div className='all'>
          <div className='container'>
          <h3 className='title'>Login</h3>
          <br/><hr/>
          <form className='form'>
            &nbsp;&nbsp;
            <div className="mb-3">
              <label>Email address</label>
              <br/><br/>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({loginEmail : e.target.value})}
              />
            </div>
            <br/>
            <div className="mb-3">
              <label>Password</label>
              <br/><br/>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({loginPassword : e.target.value})}
              />
            </div>
    
            <div className="d-grid">
                <Link to="/Calendar">
              <button className="button">
                Log In</button>
                </Link>
            </div>
          </form>
          </div>
        </div>
    
        )
      }
    
}