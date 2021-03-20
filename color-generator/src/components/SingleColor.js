import React, { useState, useEffect} from 'react'
import rgbToHex from './Convertor'

const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb)

    return (
        <article className={`SingleColor`} style={{background: `rgb(${bcg})`}}>
            <p>{weight}%</p>
            <p>{hex}</p>
        </article>
    )
}

export default SingleColor
