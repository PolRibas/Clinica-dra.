import React, { Component } from 'react'
import withNavbar from '../../helpers/Literals.jsx'
import CardTm from '../../components/team/CardTm.jsx';
import image from './images/drAvatar.png'

class Member extends Component {
    state = {
        literals: this.props.selectlenguage(),
        sanitary: [],
        medico: [],
        secretaria: [],
        member: {}
    }

    componentDidMount = () => {
        const memberId = this.props.props.match.params.member;
        this.setState({
            sanitary: this.state.literals.sanitaryTeam,
            medico: this.state.literals.medicalTeam,
            secretaria: this.state.literals.secretaria,
        })
        this.state.literals.medicalTeam.forEach((member) => {
            if(member.id === memberId){
                this.setState({
                    member
                })
            }
        })
        this.state.literals.sanitaryTeam.forEach((member) => {
            if(member.id === memberId){
                this.setState({
                    member
                })
            }
        })
        this.state.literals.secretaria.forEach((member) => {
            if(member.id === memberId){
                this.setState({
                    member
                })
            }
        })
    }

    changeMember = (memberId) => {
        this.state.literals.medicalTeam.forEach((member) => {
            if(member.id === memberId){
                this.setState({
                    member
                })
            }
        })
        this.state.literals.sanitaryTeam.forEach((member) => {
            if(member.id === memberId){
                this.setState({
                    member
                })
            }
        })
        this.state.literals.secretaria.forEach((member) => {
            if(member.id === memberId){
                this.setState({
                    member
                })
            }
        })
    }

    render() {
        const {member, literals, sanitary, medico, secretaria} = this.state
        window.scrollTo(0, 0);
        return (
            <div>
                <div className='member-detils'>
                    <img src={image} alt= {member.name}/>
                    <h2>{member.name}</h2>
                    <ul>
                        {member.especialidades ? member.especialidades.map((especialidad) => <li>{especialidad}</li> ): null}
                    </ul>
                    <p>{member.bigDescription}</p>
                </div>
                <h2 className='h2-clasificacion'>{literals.cuadro}</h2>
                <ul className='cards-box'>
                    {member.name ? 
                        medico.map((medico) => {
                            if(medico.id === member.id) return null;
                            return <li key={medico.id} onClick={ () => this.changeMember(medico.id)}>
                                <CardTm medico={medico} colegiado={true} />
                                </li>
                        })
                        : null}
                </ul>
                <h2 className='h2-clasificacion'>{literals.sanitaria}</h2>
                <ul className='cards-box'>
                    {sanitary.map((sani) => {
                        if(sani.id === member.id) return null;
                        return <li key={sani.id} onClick={ () => this.changeMember(sani.id)}>
                        <CardTm
                        medico={sani}
                        colegiado={false}
                        />
                            </li>
                    })}
                </ul>
                <h2 className='h2-clasificacion'>{literals.secre}</h2>
                <ul className='cards-box'>
                    {secretaria.map((sani) => {
                        if(sani.id === member.id) return null;
                        return <li key={sani.id} onClick={ () => this.changeMember(sani.id)}>
                        <CardTm
                        medico={sani}
                        colegiado={false}
                        />
                            </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default withNavbar(Member)