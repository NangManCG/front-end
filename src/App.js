import React, {Component} from "react";
import "./style/Table.css";
import "./style/Modal.css"
import "./style/Login.css";
import "./App.css";
import "./style/Theme.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './containers/sign/Login';
import Join from './containers/sign/Join';
import ToDoTemp from './containers/ToDo/ToDoTemplate';
import Calendar from './containers/Calendar';
import Header from './Header';
import ToDoList from './containers/ToDo/ToDoList';
  
class App extends Component {

  state = {darkMode : true}

  render() {
  return (
    <Router>
    <div className={this.state.darkMode ? "dark-mode" : "light-mode"}>
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
      <Header className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/Home'}>
            Home
          </Link>
          <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/Login'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Join'}>
                  Sign up
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/Calendar'}>
                  Calendar
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/To-DoList'}>
                  To-Do List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Join />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Join" element={<Join />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/To-DoList" element={<ToDoList />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router> 
  );
}
}

export default App;