import React, { Component } from 'react';
import logo from '../svg/logo.svg'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-top">
                    <img src={logo} alt=""/>
                    <NavLink className="singIn-btn"></NavLink>

                </div>
            </div>
        )
    }
}
