import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import es from '../helpers/json/es.json'
import Consulta from '../components/Consulta'

export default class Contacto extends Component {
    componentWillMount = () => window.scrollTo(0, 0);

    render() {
        const {Contacto} = es
        console.log(Contacto)
        return (
            <div className='contacto-page'>
                <Navbar />
                <div className='top-page'>
                </div>
                <div className='content'>
                    <div>
                        <h3>{Contacto[0].title}</h3>
                        <ul>
                            <li>
                                <p>{Contacto[0].text[0]}</p>
                                <p>{Contacto[0].text[1]}</p>
                                <p>{Contacto[0].text[2]}</p>
                                <p>{Contacto[0].text[3]}</p>
                            </li>
                        </ul>
                        <Consulta />
                    </div>
                </div>
                <div className='exposition'>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className='three'></div>
                </div>
            </div>
        )
    }
}
