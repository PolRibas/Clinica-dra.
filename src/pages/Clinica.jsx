import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import es from '../helpers/json/es.json'

export default class Clinica extends Component {
    render() {
        const {Clinica} = es
        return (
            <div className='clinica-page'>
                <Navbar />
                <div className='top-page'>
                    <p>{Clinica.text}</p>
                </div>
                <div className='content'>
                    <h3>{Clinica.CuadroM.title}</h3>
                    <ul>
                        {Clinica.CuadroM.list.map(persona => <li key={persona[0]}>
                            <p>{persona[0]}</p>
                            <p>{persona[1]}</p>
                        </li>)}
                    </ul>
                    <div>
                        <h3>{Clinica.UnidadSan.title}</h3>
                        <ul>
                            {Clinica.UnidadSan.list.map(persona => <li key={persona}>
                            <p>{persona}</p>
                            </li>)}
                        </ul>
                        <h3>{Clinica.Secretaria.title}</h3>
                        <ul>
                            {Clinica.Secretaria.list.map(persona => <li key={persona}>
                            <p>{persona}</p>
                            </li>)}
                        </ul>
                    </div>
                </div>
                <div className='exposition'>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className='three'></div>
                </div>
                <footer>
                    <p>{Clinica.footer}</p>
                </footer>
            </div>
        )
    }
}
