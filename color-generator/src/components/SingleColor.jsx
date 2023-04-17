import React, { useState, useEffect } from 'react'

import rgbToHex from './Convertor'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb) // convert rgb to hex by using component

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <>
      <article
        className={`SingleColor ${index > 10 && 'color-light'}`}
        style={{ background: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true)
          navigator.clipboard.writeText(hex)
        }}
      >
        <p className="SingleColor__weight">{weight}%</p>
        <p className="SingleColor__hex">{hex}</p>
        <p className="SingleColor__rgb">rgb({bcg})</p>
      </article>
      {alert && (
        <div className="CopyPopup">
          <IoIosCheckmarkCircle className="CopyPopup__checkmark" />
          <p className="CopyPopup__text">copied to clipboard</p>
        </div>
      )}
    </>
  )
}

export default SingleColor
