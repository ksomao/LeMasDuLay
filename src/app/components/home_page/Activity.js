import React from 'react'
import {Loading} from 'element-react'

const Activity = ({activity}) => {
    return (
        <div className={"activity w-75 d-flex flex-column justify-content-center text-center mb-4"}>
            <div className={"img-container mb-1"}>
                <img src={activity.icon} className={"responsive mb-4"} alt={""}/>
            </div>
            <h3 className={"mb-3"}>{activity.title}</h3>
            <p>{activity.text}</p>
        </div>
    )
}


export default Activity