import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav>
      <ul style={{ listStyle: 'none', gap: '1rem', display: 'flex' }}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">Sobre</Link>
        </li>

        <li>
          <Link to="/posts">Post</Link>
        </li>

        <li>
          <Link to="/posts/1">Post 1</Link>
        </li>

        <li>
          <Link to="/redirect">Redirect</Link>
        </li>

        <li>
          <Link to="/contact">Contato</Link>
        </li>

        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </nav>
  )
}
