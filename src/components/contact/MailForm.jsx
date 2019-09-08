import React, { Component } from 'react'

class MailForm extends Component {
    state = {
        email: '',
        name: '',
        text: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.props.classStyle}>
                <label>Email</label>
                <input type="email" name='email' onChange={this.handleChange} value={this.state.email}/>
                <label>Name</label>
                <input type="text" name='name' onChange={this.handleChange} value={this.state.name}/>
                <label>Question</label>
                <textarea name="text" cols="30" rows="10" onChange={this.handleChange} value={this.state.text} />
                <input type="submit" value={'send'} className='submit-input'/>
            </form>
        )
    }
}

export default MailForm