import React, {Component} from 'react'
import { useState, useRef, useCallback } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import todo from './ToDo'

class ToDo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <ToDo/>
            </div>
        )
    }
}

export default ToDo;