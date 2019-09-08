import React, { Component } from 'react'
import literals from './literals'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const withNavbar = (Comp) => {
    return class withNavbar extends Component {
        state = {
            lenguage: this.props.match.params.leng
        }

        selectlenguage = () => {
            if(this.state.lenguage === 'eng'){
                return literals.eng
            }else if (this.state.lenguage === 'esp'){
                return literals.esp
            }else{
                return literals.eng
            }
        }

        render() {
            return (
                <div>
                    <Header props={this.props} selectlenguage={this.selectlenguage} />
                    <div className='page-body'>
                        <Comp selectlenguage={this.selectlenguage} props={this.props}/>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default withNavbar