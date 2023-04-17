import { Link } from 'react-router-dom'

function ArticlePage() {
  return (
    <div className="Article">
      <h2>Article</h2>
      <p>Article 1: What is the best menu in the world</p>
      <p>Article 2: How EV car affect your country</p>
      <Link to="/">
        <button type="button" className="Form__button About__button margin-right margin-top">
          Landing Page
        </button>
      </Link>
      <Link to="/about">
        <button type="button" className="Form__button About__button">
          About Page
        </button>
      </Link>
    </div>
  )
}

export default ArticlePage
