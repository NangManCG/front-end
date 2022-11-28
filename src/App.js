import React from "react";
import "./style/Calendar.css";
import "./style/Table.css";
import "./style/Modal.css"
import "./style/Login.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './containers/sign/Login';
import Join from './containers/sign/Join';
import ToDoTemp from './containers/ToDo/ToDoTemplate';
import Calendar from './containers/Calendar';

const App = () => {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
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
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Join" element={<Join />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/To-DoList" element={<ToDoTemp />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
