import React, { Component } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Login.css'
import { auth } from '../firebase';
import { signInEmail } from '../firebase';
export default class Login extends Component {
  state = {
    loginEmail : "",
    loginPassword : ""
  }
  signInEmail = () => {
    signInEmail(this.loginEmail, this.loginPassword)
    history.pushState(null, null, "/home")
  }
  render() {
    return (
    <div className='all'>
    <h3 className='title'>Login</h3>
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-warning" onClick={() =>{
            this.signInEmail(this.state.loginEmail, this.state.loginPassword)
            alert("로그인 성공했습니다");
            }
          }>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>

    )
  }
}