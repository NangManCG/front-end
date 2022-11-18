import React, { Component } from 'react'
import '../styles/Login.css'

export default class Login extends Component {
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
          <button type="submit" class="btn btn-warning">
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