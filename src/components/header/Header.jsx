import React, { Component } from 'react'
import Navbar from './navbar/Navbar';
import logo from '../../pages/welcome/images/logo.png'

class Header extends Component {
    render() {
        return (
            <div className='principal-header'>
                <div className='only-desktop pre-navbar'>
                    <img src={logo} alt='logo' />
                </div>
                <h2 className='principal-header-text'>Clínica Dra. Sonia Rovira</h2>
                <Navbar props={this.props.props} selectlenguage={this.props.selectlenguage}/>
            </div>
        )
    }
}

export default Header