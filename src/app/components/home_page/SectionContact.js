import React from 'react'
import {Loading} from 'element-react'

const SectionContact = () => {
    return (

        <div className='Contact row mb-2 section'>
            <div className='ContactImg col-xs-12  col-md-6'>
                <img src="./images/Vue_piscine.jpg" alt="Gite_image" className={"img-fluid"}/>
                <div>
                    <p>Laure et Reinhard Zamora-Six</p>
                    <p>Hameau de Lay</p>
                    <p>07000 Pourchère</p>
                    <p>Fixe : +33 (0) 475299656</p>
                </div>

            </div>
            <div className='ContactDescription col-xs-12  col-md-6'>
                <div className='Contactform col-xs-12  col-lg-12 p-0'>
                    <p>Envie d’en savoir plus sur notre gîte ? N’hésitez pas à nous envoyer un message nous vous
                        réponderons dans les plus brefs délais.</p>
                </div>
                <div className="Form">
                    <form name="contactform" method="post" action="">
                        <div className='row mb-3'>
                            <div className="form-group col-12 col-lg-6">
                                <input type="text" name="last_name" placeholder="Nom" required
                                       className='form-control'/>
                            </div>
                            <div className="form-group col-12 col-lg-6">
                                <input type="text" name="first_name" placeholder="Prénom" required
                                       className='form-control'/>
                            </div>
                        </div>
                        <div className='col-12 p-0 mb-3'>
                            <input type="email" name="email" placeholder="Email" required
                                   className='form-control'/>
                        </div>
                        <div className='col-12 p-0'>
                            <textarea name="message" placeholder="Message" required className='form-control' rows={8}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default SectionContact
