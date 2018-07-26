import React from 'react'
import {Loading} from 'element-react'

const SectionContact = () => {
    return(

          <div className='Contact row'>
          <div className='ContactImg col-xs-12  col-sm-6'>
          <img src="./images/Vue_piscine.jpg" alt="Gite_image" width='600px' height= '400px'/>
          </div>
          <div className='ContactDescription col-xs-12  col-sm-6'>
          <span>Laure et Reinhard Zamora-Six</span>
          <span>Hameau de Lay</span>
          <span>07000 Pourchère</span>
          <span>Fixe : +33 (0) 475299656</span>
          </div>
          <div className='Contactform col-xs-12  col-sm-6'>
          <div className='Form'>
          <p>Envie d’en savoir plus sur notre gîte ? N’hésitez pas à nous envoyer un message nous vous réponderons dans les plus brefs délais.</p>
          </div>
          <form name="contactform" method="post" action="">
          <div className='row mb-3'>
          <input type="text" name="last_name" placeholder="Nom" required className='col-xs-12 col-sm-6'/>
          <input type="text" name="first_name" placeholder="Prénom" required className='col-xs-12 col-sm-6'/>
          </div>
          <div className='row mb-3'>
          <input  type="email" name="email" placeholder="Email" required className='col-xs-12 col-sm-6'/>
          </div>
          <div className='row'>
          <textarea name="message" placeholder="MESSAGE" required className='col-xs-12'/>
          </div>
          </form>
          </div>
          </div>
    )
}


export default SectionContact
