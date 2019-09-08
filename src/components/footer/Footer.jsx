import React, { Component } from 'react'
import logo from './greyLogo.png'
import phone from './phone.png'
import mail from './mail.png'
import point from './point.png'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-img-box'>
                    <img src={logo} alt='clinica dra Sonia Rovira logo'/>
                </div>
                <ul className='footer-contact-box'>
                    <li><img src={phone} alt='phone ico'/>934152248</li>
                    <li><img src={point} alt='point ico'/>Av. de la Riera de Cassoles 63-65 àtic 2ª, Barcelona 08012</li>
                    <li><img src={mail} alt='mail ico'/>clinica@clinicasoniarovira.com</li>
                </ul>
            </div>
        )
    }
}

export default Footer