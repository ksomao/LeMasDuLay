import React from 'react'
import ButtonImg from "./ButtonImg";

const Booking = ({booking,styles}) => {
    return (
        <div className={`col-xs-12  col-lg-5 text-center ${styles}`}>
            <div className="content Booking p-4">
                <h3>{booking.title}</h3>
                <h4> Basse saison </h4>
                <p>{booking.date1}</p>
                <p>{booking.price1}</p>
                <h4> Haute saison </h4>
                <p>{booking.date2}</p>
                <p>{booking.price2}</p>
                <p>{booking.minNight}</p>
                <ButtonImg text={"Réserver"} styles={"book-btn"}/>
            </div>
        </div>
    )
}

export default Booking




