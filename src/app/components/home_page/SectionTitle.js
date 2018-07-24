import React from 'react'
import {Loading} from 'element-react'

const SectionTitle = ({text}) => {
    return (
        <div className={"section-title"}>
            <div className={"circle"}>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default SectionTitle
