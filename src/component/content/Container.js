import React, { Component } from 'react'
import Search from './Search.js';
import Result from './Result.js';
import './Container.css';

export default class Container extends Component {
    render() {
        return (
            <div className="containt h-100 row align-items-center">
                <Search />
                <Result />
            </div>
        )
    }
}
