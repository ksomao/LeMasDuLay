import React from 'react'
import {Loading} from 'element-react'

const ButtonImg = ({text,imgPath}) => {
    return(

          <button className='ButtonImg'>{text} <img src={imgPath}/></button>

    )
}


export default ButtonImg