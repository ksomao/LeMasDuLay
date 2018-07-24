import React from 'react'
import {Loading} from 'element-react'

const SectionGite = () => {
    return(

          <div className='Gite row'>
          <div className='GiteDescription col-xs-12  col-sm-6'>
          <p>Le Mas du Lay est une ancienne grange que nous avons aménagée. Elle est isolée du reste de la propriété et dispose d’une terrasse privative ainsi qu’un accès direct à la piscine bordée d’une vaste plage terrassée avec une vue à couper le souffle.</p>
          <p>D’une capacité de 4 personnes, l’espace est divisé en deux étages. Au premier, vous trouverez un grand espace de nuit pour deux personnes et une chambre de deux personnes. La salle de bain et les toilettes sont séparées. </p> 
          </div>
          <div className='GiteImg col-xs-12  col-sm-6'>
          <img src="./images/Gite.jpg" alt="Gite_image" width='510px' height= '599px' />
          </div>
          </div>
    )
}


export default SectionGite
