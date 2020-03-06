import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import es from '../helpers/json/es.json'

export default class Tratamientos extends Component {
    render() {
        const {Tratamientos} = es
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}
