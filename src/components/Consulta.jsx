import React, { Component } from 'react'

class Consulta extends Component {
    render() {
        return (
            <form>
                <div>
                    <label>Nombre</label>
                    <input />
                </div>   
                <div>
                    <label>Teléfono</label>
                    <input />
                </div>   
                <div>
                    <label>Correo electrónico</label>
                    <input />
                </div>   
                <div>
                    <label>Mensaje</label>
                    <textarea />
                </div>   
                <div>
                    <input type='submit' value='Enviar' />
                </div>
            </form>
        )
    }
}

export default Consulta