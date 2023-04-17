import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="Footer">
      <Link to="/about">
        <button type="button" className="Form__button About__button">
          About Page
        </button>
      </Link>
      <p className="Footer__text">Copyright &copy; by Chitsanupong Tangvasinkul.</p>
    </div>
  )
}

export default Footer
