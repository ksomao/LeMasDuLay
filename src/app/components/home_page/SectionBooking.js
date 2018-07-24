import React from 'react'
import {Loading} from 'element-react'

const SectionBooking = () => {
    return(

          <div className='Booking row'>
          <div className='BookingDescription col-xs-12  col-sm-6'>
          <h3>Le mas du Lay - 4 personnes</h3>
          <h4> Basse saison </h4>
          <p>Mars - Mai & Septembre - Octobre - 85€ par nuit
          </p>
          <h4> Haute saison </h4>
          <p>Juin - Août - 95€ par nuit
          </p>
          <p>Réservation de 3 nuits minimum
          </p>
  
          </div>
          <div className='BookingDescription col-xs-12  col-sm-6'>
          <h3>Grand mas du Lay - 6 personnes</h3>
          <h4> Basse saison </h4>
          <p>Mars - Mai & Septembre - Octobre - 110€ par nuit
          </p>
          <h4> Haute saison </h4>
          <p>Juin - Août - 120€ par nuit
          </p>
          <p>Réservation de 3 nuits minimum
          </p>
          </div>
          </div>
    )
}

export default SectionBooking
