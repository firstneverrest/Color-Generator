import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className="About">
      <h2>About</h2>
      <p>This is about page</p>
      <Link to="/">
        <button type="button" className="Form__button About__button margin-right margin-top">
          Landing Page
        </button>
      </Link>
      <Link to="/article">
        <button type="button" className="Form__button About__button">
          Article Page
        </button>
      </Link>
    </div>
  )
}

export default AboutPage
