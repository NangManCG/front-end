import React, {Component} from "react";
import "./style/Table.css";
import "./style/Modal.css"
import "./style/Login.css";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './containers/sign/Login';
import Join from './containers/sign/Join';
import Calendar from './containers/Calendar';
import Header from './Header';
  
class App extends Component {

  state = {darkMode : false}

  componentDidMount() {
    if (this.state.darkMode) {
      document.body.style.backgroundColor="#262626";
      document.body.style.color="ivory";
    }
  }

  componentDidUpdate() {
    if (this.state.darkMode) {
      document.body.style.backgroundColor="#262626";
      document.body.style.color="ivory";
    }
    else {
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }

  render() {
  return (
    <Router>
    <div id="wrapper" className="header">
      <button className="dark-mode-button" onClick = {
        () => {
          if (this.state.darkMode) {
            this.setState({darkMode : !this.state.darkMode})
          }
          else {
            this.setState({darkMode : !this.state.darkMode})
          }
        }
      }>{this.state.darkMode ? "dark" : "light"}</button>
      <Header className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"/>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Join />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Join" element={<Join />} />
            <Route path="/Calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router> 
  );
}
}

export default App;