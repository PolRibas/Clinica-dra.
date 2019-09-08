import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


export default class Change extends Component {
    render() {
        return (
            <div>
                <Redirect to={`/${this.props.match.params.leng}/home`} />
            </div>
        )
    }
}
