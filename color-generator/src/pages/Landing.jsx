import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Values from 'values.js'

import SingleColor from '../components/SingleColor'
import Footer from '../components/Footer'
import '../sass/main.scss'

function LandingPage() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#61DAFB').all(10))
  const inputElement = useRef(null)
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="title">Color Generator</h2>
        <form onSubmit={handleSubmit} className="Form">
          <input
            type="text"
            ref={inputElement}
            className="Form__input"
            value={color}
            placeholder="#61DAFB"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="Form__button">
            submit
          </button>
        </form>
      </div>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
      <Footer />
    </>
  )
}

export default LandingPage
