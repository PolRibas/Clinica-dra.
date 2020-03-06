import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const pages = [{
    path: '/',
    menu: 'Inicio'
},{
    path: '/clinica',
    menu: 'Clínica',
},{
    path: '/tratamientos',
    menu: 'Tratamientos',
},{
    path: '/contacto',
    menu: 'Contacto',
}]


export default class Navbar extends Component {
    state = {
        active: false
    }
    render() {
        const {active} = this.state
        return (
            <div>
                <div className='navbar'>
            <div className={active ? 'burger-menu on' : 'burger-menu off'} 
            onClick={() => this.setState({active: !active})}>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
            </div>
        </div>
            <ul className={active ? 'active' : 'inactive'}>
                {pages.map(page => 
                    <li key={page.path}><Link to={page.path}>
                        <p>{page.menu}</p>
                    </Link></li>
                )}
            </ul>

            </div>
        )
    }
}
