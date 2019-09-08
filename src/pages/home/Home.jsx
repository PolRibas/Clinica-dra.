import React, { Component } from 'react'
import withNavbar from '../../helpers/Literals.jsx'

class Home extends Component {
    state = {
        literals: this.props.selectlenguage()
    }

    render() {
        const {literals} = this.state
        return (
            <div>
                <h1>{literals.home}</h1>
            </div>
        )
    }
}

export default withNavbar(Home)