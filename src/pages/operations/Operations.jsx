import React, { Component } from 'react'
import withNavbar from '../../helpers/Literals.jsx'
import CartOp from '../../components/operation/CartOp.jsx';

class Operations extends Component {
    state = {
        literals: this.props.selectlenguage(),
        operation: [],
        showingOperation: []
    }

    componentDidMount = () => {
        this.setState({
            operation: this.state.literals.withCirugy,
            showingOperation: this.state.literals.withCirugy
        })
    }

    render() {
        const {literals,showingOperation} = this.state
        return (
            <div>
                <h2 className='h2-clasificacion'>{literals.titleCirugi}</h2>
                <ul className='cards-box'>
                    {showingOperation.map((operation) => {
                        return <li key={operation.id} >
                        <CartOp 
                        operationId={operation.id}
                        operation={operation}
                        />
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default withNavbar(Operations)