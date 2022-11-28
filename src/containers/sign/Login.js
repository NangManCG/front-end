import React, { Component } from 'react';
import '../../style/Login.css';

export default class Login extends Component {
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
          <button className="button" onClick={() =>{
            this.signInEmail(this.state.loginEmail, this.state.loginPassword)
            alert("로그인 성공했습니다");
            }
          }>
            Log In</button>
        </div>
      </form>
      </div>
    </div>

    )
  }
}