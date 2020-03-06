import React, { Component } from 'react'

class Consulta extends Component {
    render() {
        return (
            <form className='form'>
                <h3>Pedir Consulta</h3>
                <div className='form-field'>
                    <label>Nombre</label>
                    <input />
                </div>   
                <div className='form-field'>
                    <label>Teléfono</label>
                    <input />
                </div>   
                <div className='form-field'>
                    <label>Correo electrónico</label>
                    <input />
                </div>   
                <div className='form-field'>
                    <label>Mensaje</label>
                    <textarea />
                </div>   
                <div className='form-field'>
                    <input type='submit' value='Enviar' />
                </div>
            </form>
        )
    }
}

export default Consulta