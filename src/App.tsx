import { useAuth } from './hooks/useAuth'

export default function App() {
  const { signInWithGoogle } = useAuth()

  return (
    <div>
      <h1>Olá Mundo!</h1>
      <button onClick={signInWithGoogle}>Entrar com Google</button>
    </div>
  )
}
