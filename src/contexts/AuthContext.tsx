import { ReactNode, createContext } from 'react'

import * as firebase from 'firebase/auth'
import { app } from '~/services/firebase/firebaseConfig'

interface AuthContextDataProps {
  isAuthenticated: boolean

  signInWithGoogle: () => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const auth = firebase.getAuth(app)
  const provider = new firebase.GoogleAuthProvider()

  const isAuthenticated = false

  async function signOut() {
    firebase
      .signOut(auth)
      .then((response) => {
        // Sign-out successful.
        console.log(response)
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  }

  async function signIn({ email, password }: any) {
    await firebase
      .signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response)
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;
      })
  }

  async function signUp({ email, password }: any) {
    await firebase
      .createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response)
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;
      })
  }

  async function signInWithGoogle(): Promise<any> {
    await firebase
      .signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}
