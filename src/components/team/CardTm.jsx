import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CardTm extends Component {
    render() {
        const {medico, colegiado} = this.props
        return (
            <Link to={`/esp/team/${medico.id}`}>
                <>
                    <h2>{medico.name}</h2>
                    <p className='small-description'>Small description</p>
                    <div className='details-medic'>
                        {colegiado ? <><p></p><p>Nº Col {medico.num} </p></> : null}
                    </div>
                </>
            </Link>
        )
    }
}

export default CardTm