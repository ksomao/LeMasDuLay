import React from 'react'
import {connect} from 'react-redux'
import FormBooking from '../components/booking_page/FormBooking'
import Menu from "../components/homes/Menu";
import SectionTitle from "../components/home_page/SectionTitle";

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
            <div className="container">
                <SectionTitle text={"Le Gite"}/>
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
                <div className="row">
                    <a href="./images/Gite_05.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_05.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/Gite_07.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_07.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/Gite_10.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_10.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/Gite_14.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_14.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/Gite_11.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_11.jpg" className="img-fluid rounded"/>
                    </a>
                    <a href="./images/Gite_16.jpg" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="./images/Gite_16.jpg" className="img-fluid rounded"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Galerie
