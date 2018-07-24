import React from 'react'
import { connect } from 'react-redux'

import ButtonImg from '../components/home_page/ButtonImg'
import Menu from '../components/home_page/Menu'
import Header from '../components/home_page/Header'
import SectionAbout from '../components/home_page/SectionAbout'
import SectionTitle from '../components/home_page/SectionTitle'
import SectionGite from '../components/home_page/SectionGite'
import SectionExtension from '../components/home_page/SectionExtension'

import { loadBirds } from '../store/birds/actions'



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing : false,
        }
    }

    componentDidMount() {
        this.props.dispatch(loadBirds())
    }

    render() {
        return(
          <div>
            <Menu/>
            <Header/>
            <SectionTitle/>
            <SectionAbout/>
            <SectionTitle/>
            <SectionGite/>
            <ButtonImg text="Galerie"/>
            <SectionExtension/>
            <ButtonImg text="Galerie"/>
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
