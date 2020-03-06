import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const pages = [{
    path: '/',
    menu: 'Home'
},{
    path: '/about',
    menu: 'About',
},{
    path: '/markets',
    menu: 'Markets',
},{
    path: '/approach',
    menu: 'Approach',
},{
    path: '/technology',
    menu: 'Technology',
},{
    path: '/culture',
    menu: 'Culture',
},{
    path: '/team',
    menu: 'Team',
},{
    path: '/careers',
    menu: 'Careers',
},{
    path: '/contact',
    menu: 'Contact',
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
