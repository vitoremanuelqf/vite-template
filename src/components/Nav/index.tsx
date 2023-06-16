import { Link } from 'react-router-dom'
import { useAuth } from '~/hooks/useAuth'

export function Nav() {
  const { signInWithGoogle, signOut } = useAuth()

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

        <li>
          <button onClick={signInWithGoogle}>Login</button>
        </li>

        <li>
          <button onClick={signOut}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
