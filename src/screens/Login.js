import React, { useState, useEffect, Component } from 'react';
import { signInEmail, signInGoogle } from '../firebase';
import '../styles/Login.css'
import { auth, provider, signInWithRedirect } from '../firebase';
import { GoogleAuthProvider } from 'firebase/auth';
export default class Login extends Component {
  state = {
    loginEmail : "",
    loginPassword : ""
  }

  render() {
    return (
    <div className='all'>
    <h3 className='title'>Login</h3>
        <div className="d-grid">
          <button className="btn btn-warning" onClick={ () =>{
             signInWithRedirect(auth, provider).then((result) => {
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              const user = result.user;
              window.location.href='/Calendar';
          })}}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
    </div>

    )
  }
}