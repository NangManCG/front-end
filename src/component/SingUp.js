import React, { Component } from 'react'

class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="a1">
          <label>First name</label>
          <input
            type="text"
            className="a2"
            placeholder="First name"
          />
        </div>

        <div className="a1">
          <label>Last name</label>
          <input 
            type="text" 
            className="a2" 
            placeholder="Last name" 
          />
        </div>

        <div className="a1">
          <label>Email address</label>
          <input
            type="email"
            className="a2"
            placeholder="Enter email"
          />
        </div>

        <div className="a1">
          <label>Password</label>
          <input
            type="password"
            className="a2"
            placeholder="Enter password"
          />
        </div>

        <div className="b1">
          <button type="submit" className="b2">
            Sign Up
          </button>
        </div>
        <p className="c1">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
export default SignUp;