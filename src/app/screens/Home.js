import React from 'react'
import {connect} from 'react-redux'
import ButtonImg from '../components/home_page/ButtonImg'
import Menu from '../components/home_page/Menu'
import content from '../content'

import {loadBirds} from '../store/birds/actions'
import SectionTitle from "../components/home_page/SectionTitle";
import Activity from "../components/home_page/Activity";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            data: []
        }
    }

    componentDidMount() {
        this.props.dispatch(loadBirds())
        this.setState({data: JSON.parse(JSON.stringify(content))})
    }

    render() {
        if (!this.state.data.activities) {
            return <div/>
        }

        return (
            <div className={"container"}>
                <Menu/>
                <SectionTitle text={"Alentours"}/>

                <div className="activities mt-5 d-flex flex-column align-items-center ">
                    {this.state.data.activities.map((activity, index) => (
                        <Activity activity={activity} key={index}/>
                    ))}
                </div>
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
