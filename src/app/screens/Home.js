import React from 'react'
import {connect} from 'react-redux'

import ButtonImg from '../components/home_page/ButtonImg'
import Menu from '../components/home_page/Menu'
import Header from '../components/home_page/Header'
import SectionAbout from '../components/home_page/SectionAbout'
import SectionGite from '../components/home_page/SectionGite'
import SectionExtension from '../components/home_page/SectionExtension'
import SectionBooking from '../components/home_page/SectionBooking'
import SectionContact from '../components/home_page/SectionContact'


import {loadBirds} from '../store/birds/actions'
import SectionTitle from "../components/home_page/SectionTitle";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
        }
    }

    componentDidMount() {
        this.props.dispatch(loadBirds())
    }

    render() {
        return(
          <div className='container'>
            <Menu/>
            <Header/>
            <SectionTitle text='Nous'/>
            <SectionAbout/>
            <SectionTitle text='Le Gîte'/>
            <SectionGite/>
            <ButtonImg text="Galerie"/>
            <SectionTitle text='Extension'/>
            <SectionExtension/>
            <ButtonImg text="Galerie"/>
            <SectionTitle text='Tarifs'/>
            <SectionBooking/>
            <SectionTitle text='Contact'/>
            <SectionContact/>



            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        birds: state.birds.list.data,
        isLoading: state.birds.list.loading
    }
}

export default connect(mapStateToProps)(Home)
