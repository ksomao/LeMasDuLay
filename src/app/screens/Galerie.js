import React from 'react'
import {connect} from 'react-redux'
import FormBooking from '../components/booking_page/FormBooking'

class Galerie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            data: []
        }
    }

render() {
        return (
            <div>Gallerie</div>
        )
    }
}

export default Galerie
