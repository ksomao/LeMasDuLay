import React from 'react'
const FormBooking = () => {
  return (

    <
    div className = 'Form' >

    <
    div className = 'FormDescription' >


    <
    form name = "form"
    method = "post"
    action = "https://formspree.io/delphineBraive@gmail.com" >

    <
    div className = 'row' >
    <
    input type = "text"
    name = "last_name"
    placeholder = "Nom"
    required className = 'col-xs-12 col-sm-6' / >
    <
    input type = "text"
    name = "first_name"
    placeholder = "Prénom"
    required className = 'col-xs-12 col-sm-6' / >
    <
    /div>

    <
    div className = 'row' >
    <
    input type = "phone"
    name = "phone"
    placeholder = "Portable"
    required className = 'col-xs-12 col-sm-6' / >
    <
    input type = "email"
    name = "email"
    placeholder = "Email"
    required className = 'col-xs-12 col-sm-6' / >
    <
    /div>

    <
    div className = 'row' >
    <
    input type = "text"
    name = "adresse"
    placeholder = "Adresse"
    required className = 'col-xs-12 col-sm-6' / >
    <
    input type = "numer"
    name = "codepostal"
    placeholder = "Code Postal"
    required className = 'col-xs-12 col-sm-6' / >
    <
    /div>

    <
    div className = 'row' >
    <
    input type = "Number"
    name = "date"
    placeholder = "Date d'arrivée"
    required className = 'col-xs-12 col-sm-6' / >
    <
    input type = "Number"
    name = "date"
    placeholder = "Date de départ"
    required className = 'col-xs-12 col-sm-6' / >
    <
    /div>

    <
    div className = 'row' >
    <
    input type = "Number"
    name = "date"
    placeholder = "Nombre d'adulte"
    required className = 'col-xs-12 col-sm-6' / >
    <
    input type = "Number"
    name = "date"
    placeholder = "Nombre d'enfants"
    required className = 'col-xs-12 col-sm-6' / >
    <
    /div>

    <
    div className = 'row' >
    <
    input type = "checkbox"
    id = 'Mas1' / >
    <
    label
    for = "Mas1" > Mas pour 4 personnes < /label> <
    input type = "checkbox"
    id = 'Mas2' / >
    <
    label
    for = "Mas1" > Mas pour 6 personnes < /label> <
    /div>

    <
    div className = 'row' >
    <
    textarea name = "comments"
    placeholder = "MESSAGE"
    required className = 'col-xs-12' > < /textarea> <
    /div>

    <
    div className = 'row' >

    <
    input type = "checkbox"
    id = 'conditions' / >
    <
    label
    for = "Mas1" > J ai lu et accepté les conditions < /label> <
    /div> <
    /form> <
    /div> <
    /div>

  )
}

export default FormBooking
