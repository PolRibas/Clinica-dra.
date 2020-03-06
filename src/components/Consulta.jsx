import React, { Component } from 'react';
import consultas from '../services/consulta-service.js'

class Consulta extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        message: ''
    };

    inputOnChange = (e) => {
        const { name, value } = e.target
        this.setState({
        [name]: value
        })
    };

    submitForm = e => {
        e.preventDefault()
        const { name, phone, email, message } = this.state;
        const consulta = { name, phone, email, message};
        consultas.newConsulta(consulta)
        .then(r => console.log(r))
        this.setState({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.submitForm} className='form'>
                <h3>Pedir Consulta</h3>
                <div className='form-field'>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.inputOnChange} required/>
                </div>   
                <div className='form-field'>
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.inputOnChange} required/>
                </div>   
                <div className='form-field'>
                    <label htmlFor="email">Correo electrónico</label>
                    <input rtype="text" id="email" name="email" value={this.state.email} onChange={this.inputOnChange} required/>
                </div>   
                <div className='form-field'>
                    <label htmlFor="message">Mensaje</label>
                    <textarea type="text" id="message" name="message" value={this.state.message} onChange={this.inputOnChange} required/>
                </div>   
                <div className='form-field'>
                    <input type='submit' value='Enviar' />
                </div>
            </form>
        )
    }
};

export default Consulta