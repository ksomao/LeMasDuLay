import React from 'react'
import {connect} from 'react-redux'
import FormBooking from '../components/booking_page/FormBooking'
import Menu from "../components/homes/Menu";
import SectionTitle from "../components/home_page/SectionTitle";

class GalerieExtension extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            data: []
        }
    }

    render() {
        return (
            <div className="container">
                <SectionTitle text={"Extension"}/>
                <div className="row">
                    <a href="./images/Gite_02.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_02.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/Gite_03.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_03.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/Gite_04.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_04.jpg" className="img-fluid rounded"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default GalerieExtension
