import React, { Component } from 'react'
import logo from './hava-mahal.jpg';
import './Container.css';
export default class Search extends Component {
    render() {
        return (
            <div className="p-2">
                <div className="card" style={{ width: 360 }}>
                    <img className="card-img-top " src={logo} alt="" />
                    <div className="d-flex card-body justify-content-center">
                        <button type="button" className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>
        )
    }
}
