import React, { Component } from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export default class Home extends Component {
    state = {
        clicket: false
    }
    componentDidMount = () => window.scrollTo(0, 200)
    render() {
        const {clicket} = this.state
        return (
            <div className='home-page'>
                <Navbar />
                <div className='image-box'>
                    <div className='text-box'>
                        <h3>La mejora constante, garantía de un servicio excelente</h3>
                    </div>
                </div>
                <div className='filtro'>

                </div>
                <div className='button-box'>
                    <Logo />
                    <button onClick={() => this.setState({clicket: true})}>Pide Consulta</button>
                </div>
                <div className={clicket ? 'on' : 'off'}>

                </div>
            </div>
        )
    }
}
