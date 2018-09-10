import React from 'react'
import {Loading} from 'element-react'

const HeaderMobile = () => {
    return (
        <div>
            <div className='HeaderMobile d-lg-none pt-5'>
                <h2 className={"text-center mt-5"}>Le Mas du Lay</h2>
            </div>
            <div className={"p-4 text-center d-lg-none HeaderMobileDescription"}>
                <p> Le Mas du Lay est un coup de cœur immédiat. Pour les vieilles pierres dorées des bâtiments, la vue
                    sur la
                    vallée et sa situation bien cachée
                    au flanc de la montagne et pour le calme des environs. Presque quatre hectares de terrain entourent
                    la propriété,
                    un terrain montagneux, boisé et terrassé.</p>
            </div>
        </div>
    )
}


export default HeaderMobile
