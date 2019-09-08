import React, { Component } from 'react'
import withNavbar from '../../helpers/Literals.jsx'
import CardTm from '../../components/team/CardTm.jsx';

class About extends Component {
    state = {
        literals: this.props.selectlenguage()
    }

    render() {
        const {literals} = this.state
        return (
            <div className='about-cards-direction'>
                <div>
                    <h2 className='h2-clasificacion'>{literals.cuadro}</h2>
                    <ul className='cards-box'>
                        {literals.medicalTeam.map((medico) => {
                            return <li key={medico.id} >
                            <CardTm
                            medico={medico}
                            colegiado={true}
                            />
                                </li>
                        })}
                    </ul>
                </div>
                <div>
                    <h2 className='h2-clasificacion'>{literals.sanitaria}</h2>
                    <ul className='cards-box'>
                        {literals.sanitaryTeam.map((sanitary) => {
                            return <li key={sanitary.id} >
                            <CardTm
                            medico={sanitary}
                            colegiado={false}
                            />
                                </li>
                        })}
                    </ul>
                    <h2 className='h2-clasificacion'>{literals.secre}</h2>
                    <ul className='cards-box'>
                        {literals.secretaria.map((sanitary) => {
                            return <li key={sanitary.id} >
                            <CardTm
                            medico={sanitary}
                            colegiado={false}
                            />
                                </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withNavbar(About)