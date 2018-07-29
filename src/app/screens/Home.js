import React from 'react'
import {connect} from 'react-redux'
import ButtonImg from '../components/home_page/ButtonImg'
import Menu from '../components/home_page/Menu'
import Header from '../components/home_page/Header'
import SectionAbout from '../components/home_page/SectionAbout'
import SectionGite from '../components/home_page/SectionGite'
import SectionExtension from '../components/home_page/SectionExtension'
import SectionContact from '../components/home_page/SectionContact'
import content from '../content'
import {loadBirds} from '../store/birds/actions'
import SectionTitle from "../components/home_page/SectionTitle";
import Activity from "../components/home_page/Activity";
import Booking from "../components/home_page/Booking";
import HeaderMobile from "../components/home_page/HeaderMobile";


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

    getActivities() {
        if (!this.state.data.activities) {
            return <div/>
        }
        return (
            <div className={"Alentours"}>
                <SectionTitle text={"Alentours"} styles={"AlentoursTop"}/>
                <div className="activities mt-5 d-flex flex-column align-items-center ">
                    {this.state.data.activities.map((activity, index) => (
                        <Activity activity={activity} key={index}/>
                    ))}
                </div>
            </div>
        )
    }

    getBookings() {
        if (!this.state.data.bookings) {
            return <div/>
        }
        const booking1 = this.state.data.bookings[0]
        const booking2 = this.state.data.bookings[1]

        return (
            <div className={"Bookings row section"}>
                <Booking booking={booking1} styles={"offset-lg-1 mb-5 mb-lg-0"}/>
                <Booking booking={booking2}/>
            </div>
        )
    }

    render() {
        return (
            <div className={"container-fluid p-0"} style={{overflowX: 'hidden'}}>
                <Menu/>
                <Header/>
                <HeaderMobile/>
                <div className='container'>
                    <SectionTitle text='Nous' styles={"AboutTop"}/>
                    <SectionAbout/>
                    <SectionTitle text='Le Gîte' styles={"GiteTop"}/>
                    <SectionGite/>
                    <SectionTitle text='Extension' styles={"ExtensionTop"}/>
                    <SectionExtension/>
                    <SectionTitle text='Tarifs' styles={"TarifsTop"}/>
                    {this.getBookings()}
                    {this.getActivities()}
                    <SectionTitle text='Contact' styles={"ContactTop"}/>
                    <SectionContact/>
                    <div className="firstForm"/>
                    <div className="secondForm"/>
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
