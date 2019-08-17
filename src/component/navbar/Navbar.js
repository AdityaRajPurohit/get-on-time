import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark  navbar-expand-lg navStyle justify-content-center ">
                    <div className="display-3 textStyle"> Get on Time </div>
                </nav>
            </div>
        )
    }
}
