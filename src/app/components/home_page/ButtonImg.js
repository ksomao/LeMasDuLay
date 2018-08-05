import React from 'react'
import {Loading} from 'element-react'

const ButtonImg = ({text, imgPath, styles}) => {
    return (
        <button className={`ButtonImg btn ${styles}`}>{text} <img src={imgPath} alt={""}/></button>
    )
}


export default ButtonImg
