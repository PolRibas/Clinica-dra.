import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import ingles from './images/ingles.png'
import espanol from './images/espanol.png'

class Welcome extends Component {
    render() {
        return (
            <div className='welcome-page'>
                <div className='welcome-box'>
                    <div className='image-box'> 
                        <img src={logo} alt='Clinica Dra Sonia Rovira Logo'/>
                    </div>
                    <h2>Select language:</h2>
                    <ul>
                        <li>
                            <Link to='/esp/home'>
                            <img className='flack' src={espanol} alt='spanish flack' />
                                Español</Link>
                        </li>
                        <li>
                            <Link to='/eng/home'>
                            <img className='flack' src={ingles} alt='english flack' />
                                English</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Welcome