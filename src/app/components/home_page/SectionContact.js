import React from 'react'
import {Loading} from 'element-react'

const SectionContact = () => {
    return (

        <div className='Contact row mb-2 section'>
            <div className='ContactImg col-xs-12  col-md-6'>
                <img src="./images/Vue_piscine.jpg" alt="Gite_image" className={"img-fluid"}/>
            </div>
            <div className='ContactDescription col-xs-12  col-md-6'>
                <span>Laure et Reinhard Zamora-Six</span>
                <span>Hameau de Lay</span>
                <span>07000 Pourchère</span>
                <span>Fixe : +33 (0) 475299656</span>

                <div className="Form">
                    <form name="contactform" method="post" action="">
                        <div className='row mb-3'>
                            <input type="text" name="last_name" placeholder="Nom" required
                                   className='col-xs-12 col-lg-6 form-control mb-3 mb-lg-0'/>
                            <input type="text" name="first_name" placeholder="Prénom" required
                                   className='col-xs-12 col-lg-6 form-control'/>
                        </div>
                        <div className='row mb-3'>
                            <input type="email" name="email" placeholder="Email" required
                                   className='col-xs-12 col-lg-6 form-control'/>
                        </div>
                        <div className='row'>
                            <textarea name="message" placeholder="Message" required className='col-xs-12 form-control'/>
                        </div>
                    </form>
                </div>
            </div>
            <div className='Contactform col-xs-12  col-lg-6'>
                <p>Envie d’en savoir plus sur notre gîte ? N’hésitez pas à nous envoyer un message nous vous
                    réponderons dans les plus brefs délais.</p>
            </div>
        </div>
    )
}


export default SectionContact
