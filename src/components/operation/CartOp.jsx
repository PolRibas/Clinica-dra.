import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CartOp extends Component {
    state = {
        operation: this.props.operation
    }

    render() {
        const {operation} = this.state
        return (
            <Link to={`/esp/treatments/${operation.id}`}>
                <div className='operetion-container'>
                    <h2>{operation.name}</h2>
                    <p className='small-description'>{operation.smallDescription}</p>
                </div>
            </Link>
        )
    }
}

export default CartOp