import React from 'react'
import {Loading} from 'element-react'

const SectionTitle = ({text}) => {
    return (
        <div className={"section-title flex-column d-flex align-items-center mt-5 mb-5"}>
            <div className={"circle"}>
                <span>{text}</span>
            </div>
        </div>
    )
}
export default SectionTitle
