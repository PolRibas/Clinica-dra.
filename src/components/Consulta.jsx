import React, { Component } from 'react'

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

    validateForm = (event) => {
        event.preventDefault()
        const { name, phone, email, message } = this.state
        if (name && phone && email && message) {
        this.isValidEmail(email)
        } else {
            this.setState({
                messageTitle: '',
                message: 'All fields are required',
            })
        }
    };

    isValidEmail = (email) => {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        this.checkAvailability()
        } else {
            this.setState({
                messageTitle: '',
                message: "Invalid email",
            })
        };
    } ; 

    submitForm = async () => {
        const { name, phone, email, message } = this.state;
        const consulta = { name, phone, email, message};
        await consulta.newConsulta(consulta);
        this.setState({
        name: '',
        phone: '',
        email: '',
        message: ''
        });
    };

    render() {
        const {name, phone, email, message} = this.state;
        return (

            <form onSubmit={this.submitForm} className='form'>
                <h3>Pedir Consulta</h3>
                <div className='form-field'>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" onChange={this.inputOnChange} required/>
                </div>   
                <div className='form-field'>
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" onChange={this.inputOnChange} required/>
                </div>   
                <div className='form-field'>
                    <label htmlFor="email">Correo electrónico</label>
                    <input rtype="text" onChange={this.inputOnChange} required/>
                </div>   
                <div className='form-field'>
                    <label htmlFor="message">Mensaje</label>
                    <textarea type="text" onChange={this.inputOnChange} required/>
                </div>   
                <div className='form-field'>
                    <input type='submit' value='Enviar' />
                </div>
            </form>
        )
    }
}

export default Consulta