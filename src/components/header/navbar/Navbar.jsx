import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        literals: this.props.selectlenguage(),
    }

    checket = () => {
        document.getElementById('menu-checkbox').checked = false
    }

    render() {
        const currentLeng = this.props.props.match.params.leng
        const {literals} = this.state
        return (
            <div className='burger-div'>
                <input id="menu-checkbox" type="checkbox"/>
                <span className="burger__element"></span>
                <ul className="menu">
                    <li><Link to={`/${currentLeng}/home`} onClick={this.checket}>{literals.home}</Link></li>
                    <li><Link to={`/${currentLeng}/team`} onClick={this.checket}>{literals.about}</Link></li>
                    <li><Link to={`/${currentLeng}/treatments`} onClick={this.checket}>{literals.services}</Link></li>
                    <li><Link to={`/${currentLeng}/estetic`} onClick={this.checket}>{literals.estetic}</Link></li>
                    <li><Link to={`/${currentLeng}/instalations`} onClick={this.checket}>{literals.instalations}</Link></li>
                    <li><Link to={`/${currentLeng}/contact`} onClick={this.checket}>{literals.contact}</Link></li>
                    <div className='one-pixel-plis'></div>
                    <li className='only-phone'><Link to='/esp/changeLenguage'>Español</Link></li>
                    <li className='only-phone'><Link to='/eng/changeLenguage'>English</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar