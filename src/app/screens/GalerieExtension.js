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
                    <a href="./images/extension4.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/extension4.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/extension3.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/extension3.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/extension1.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/extension1.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/vue1.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/vue1.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/Piscine.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Piscine.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/extension5.jpeg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/extension5.jpeg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/extension6.jpeg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/extension6.jpeg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/extension7.jpeg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/extension7.jpeg" className="img-fluid rounded"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default GalerieExtension
