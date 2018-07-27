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
                    <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="https://unsplash.it/600.jpg?image=251" className="img-fluid rounded"/>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="https://unsplash.it/600.jpg?image=252" className="img-fluid rounded"/>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid rounded"/>
                    </a>
                </div>
                <div className="row">
                    <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="https://unsplash.it/600.jpg?image=254" className="img-fluid rounded"/>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="https://unsplash.it/600.jpg?image=255" className="img-fluid rounded"/>
                    </a>
                    <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox"
                       data-gallery="gallery" className="col-md-4 mb-4">
                        <img src="https://unsplash.it/600.jpg?image=256" className="img-fluid rounded"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Galerie
