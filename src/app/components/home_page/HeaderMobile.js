import React from 'react'
import {Loading} from 'element-react'

const HeaderMobile = () => {
    return (
        <div>
            <div className='HeaderMobile d-lg-none'>
                <div className='HeaderMobileDescription'/>
                <h2>Le Mas du Lay</h2>
            </div>
            <div className={"p-4 text-center d-lg-none"}>
                <p>est un coup de cœur immédiat. Pour les vieilles pierres dorées des bâtiments, pour la vue sur la
                    vallée, sa situation bien cachée
                    au flanc de la montagne et pour le calme des environs. Presque quatre hectares de terrain entourent
                    la propriété,
                    un terrain montagneux, boisée et terrassé.</p>
            </div>
        </div>
    )
}


export default HeaderMobile
