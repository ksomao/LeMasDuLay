import React from 'react'
import {connect} from 'react-redux'

import ButtonImg from '../components/home_page/ButtonImg'
import Menu from '../components/home_page/Menu'

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
        return (
            <div>
                <Menu/>
                <SectionTitle text={"Nous"}/>
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
