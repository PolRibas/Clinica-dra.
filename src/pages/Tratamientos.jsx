import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import es from '../helpers/json/es.json'

export default class Tratamientos extends Component {
    state = {
        plastica: false,
        estetica: false
    }

    componentWillMount = () => window.scrollTo(0, 0);

    render() {
        const {Tratamientos} = es
        const {plastica, estetica} = this.state
        return (
            <div className='tratamientos-page'>
                <Navbar />
                <div className='top-page'>
                    <p>Tratamientos</p>
                </div>
                <div className='content'>
                    <div>
                        <h3 onClick={() => this.setState({plastica: !plastica})}>{Tratamientos.Concirugía.title}</h3>
                        <ul className={plastica ? 'open' : 'colapset'}>
                            {Tratamientos.Concirugía.list.map(t => <li key={t[0]}>  
                                <p>{t[0]}</p>
                                <p><small>{t[1]}</small></p>
                            </li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 onClick={() => this.setState({estetica: !estetica})}>{Tratamientos.Sincirugía.title}</h3>
                        <ul className={estetica ? 'open' : 'colapset'}>
                            {Tratamientos.Sincirugía.list.map(t => <li key={t[0]}>
                                <p>{t[0]}</p>
                                <p><small>{t[1]}</small></p>
                            </li>)}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
