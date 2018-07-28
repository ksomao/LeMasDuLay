import React from 'react'
import {connect} from 'react-redux'
import FormBooking from '../components/booking_page/FormBooking'
import SectionTitle from "../components/home_page/SectionTitle";

class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            data: []
        }
    }

render() {
        return (
            <div className='container'>
            <SectionTitle text={"Réservations"}/>
            <FormBooking/>
            </div>
        )
    }
}

export default Booking
