import React from 'react'
import ButtonImg from "./ButtonImg"
import {Link} from "react-router-dom";

const SectionGite = () => {
    return (

        <div className='Gite row section'>
            <div className='GiteDescription col-xs-12 col-lg-4 offset-lg-2 mt-3 mb-2 text-center text-lg-left'>
                <p>Le Mas du Lay est une ancienne grange que nous avons aménagée. Elle est isolée du reste de la
                    propriété et dispose d’une terrasse privative ainsi qu’un accès direct à la piscine bordée d’une
                    vaste plage terrassée avec une vue à couper le souffle.</p>
                <p>D’une capacité de 4 personnes, l’espace est divisé en deux étages. Au premier, vous trouverez un
                    grand espace de nuit pour deux personnes et une chambre de deux personnes. La salle de bain et les
                    toilettes sont séparées. </p>
                <div className={"mt-4 row"}>
                    <Link to="/Galerie">
                        <ButtonImg text="Galerie" styles={"m-auto m-lg-2"}/>
                    </Link>

                </div>
            </div>
            <div className='GiteImg col-xs-12  col-lg-5 order-first order-lg-2'>
                <img src="./images/Gite.jpg" alt="Gite_image" className={"img-fluid mh-75"}/>
            </div>
        </div>
    )
}


export default SectionGite
