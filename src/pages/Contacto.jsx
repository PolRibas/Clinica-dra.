import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import es from '../helpers/json/es.json'

export default class Contacto extends Component {
    render() {
        const {Contacto} = es
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}
