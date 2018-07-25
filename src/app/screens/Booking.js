import React from 'react'
import {connect} from 'react-redux'
import FormBooking from '../components/booking_page/FormBooking'

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
            <FormBooking/>
            </div>
        )
    }
}

export default Booking
