import React from 'react'
import ButtonImg from "./ButtonImg"

const FormBooking = () => {
  return (

    <div className = 'Form row' >

    <div className = 'FormDescription row' >

    <div className='Book'>
    <p>Pour toute demande de réservation, merci de remplir le formulaire ci-dessous. Nous vous réponderons dans les plus brefs délais.</p>
</div>

    <form name = "form"
    method = "post"
    action = "https://formspree.io/laure@masdulay.fr" >



    <div className = 'row' >
    <input type = "text"
    name = "last_name"
    placeholder = "Nom"
    required className = 'col-xs-12 col-sm-6' / >

    <input type = "text"
    name = "first_name"
    placeholder = "Prénom"
    required className = 'col-xs-12 col-sm-6' / >

    </div>

    <div className = 'row' >
    <input type = "phone"
    name = "phone"
    placeholder = "Portable"
    required className = 'col-xs-12 col-sm-6' / >

    <input type = "email"
    name = "email"
    placeholder = "Email"
    required className = 'col-xs-12 col-sm-6' / >
    </div>

    <div className = 'row' >
    <input type = "text"
    name = "adresse"
    placeholder = "Adresse"
    required className = 'col-xs-12 col-sm-6' / >

    <input type = "numer"
    name = "codepostal"
    placeholder = "Code Postal"
    required className = 'col-xs-12 col-sm-6' / >
    </div>

    <div className = 'row' >
    <input type = "Date"
    name = "date"
    placeholder = "Date d'arrivée"
    required className = 'col-xs-12 col-sm-6' / >
    <input type = "Number"
    name = "night"
    placeholder = "Nombre de nuit"
    required className = 'col-xs-12 col-sm-6' / >
    </div>

    <div className = 'row' >
    <input type = "Number"
    name = "adulte"
    placeholder = "Nombre d'adulte"
    required className = 'col-xs-12 col-sm-6' / >
    <input type = "Number"
    name = "enfant"
    placeholder = "Nombre d'enfants"
    required className = 'col-xs-12 col-sm-6' / >
    </div>
    <div className ='choice'>
    <div className = 'row' >
    <input type = "checkbox"
    id = 'Mas1' / >
    <label for = "Mas1" > Mas pour 4 personnes < /label>
    <input type = "checkbox" id = 'Mas2' / >
    <label for = "Mas1" > Mas pour 6 personnes < /label>
    </div>
    </div>

    <div className = 'row' >
    <textarea name = "Message" placeholder = "MESSAGE"
    required className = 'col-xs-12' > < /textarea>
    </div>
        <ButtonImg text={"Envoyer"} styles={"send-btn"} onClick= { e => e.preventDefault() }/>
    </form>
    </div>
    </div>

  )
}

export default FormBooking
