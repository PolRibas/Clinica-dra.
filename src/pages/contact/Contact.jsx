import React, { Component } from 'react'
import withNavbar from '../../helpers/Literals.jsx'
import MailForm from '../../components/contact/MailForm.jsx';

class Contact extends Component {
    state = {
        literals: this.props.selectlenguage()
    }

    render() {
        const {literals} = this.state
        return (
            <div>
                <h1>{literals.contact}</h1>
                <div className='contact-form-box'>
                    <MailForm classStyle='contact-form' />
                </div>
            </div>
        )
    }
}

export default withNavbar(Contact)