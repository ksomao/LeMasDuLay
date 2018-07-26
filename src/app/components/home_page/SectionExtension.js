import React from 'react'
import {Loading} from 'element-react'
import ButtonImg from "./ButtonImg";

const SectionExtension = () => {
    return (
        <div className='Extension row section'>
            <div className='GiteImg col-xs-12  col-lg-5 offset-lg-1 mb-2 d-flex justify-content-center'>
                <img src="./images/Extension.jpg" alt="Gite_image" className={"img-fluid"}/>
            </div>
            <div className='ExtensionDescription col-xs-12 col-lg-4 mt-3 text-center text-lg-left'>
                <p>Le Grand Mas du Lay est une extension du Mas du Lay et propose en plus une grande chambre pour deux
                    personnes située dans une dépendance en face du gîte.
                </p>
                <p>
                    Elle a sa propre salle de bain et toilette. Le
                    lit king size est séparable. Cette extension vous offre une capacité de 6 personnes au total.
                </p>
                <div className={"row"}>
                    <ButtonImg text="Galerie" styles={"m-auto m-lg-2"}/>
                </div>
            </div>
        </div>
    )
}


export default SectionExtension
