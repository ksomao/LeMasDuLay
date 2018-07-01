import React from 'react'
import {connect} from 'react-redux'

import Menu from '../components/homes/Menu'

import {loadBirds} from '../store/birds/actions'

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
                <button>dsdsd</button>
                <Menu/>
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
