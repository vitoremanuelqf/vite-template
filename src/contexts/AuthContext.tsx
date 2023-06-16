import { ReactNode, createContext, useEffect } from 'react'

import * as firebase from 'firebase/auth'
import { app } from '~/services/firebase/firebaseConfig'

interface AuthContextDataProps {
  isAuthenticated: boolean

  signOut: () => void
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

  const user = auth.currentUser
  const isAuthenticated = !!user

  console.log('Será?', isAuthenticated, user)

  useEffect(() => {
    firebase.onAuthStateChanged(auth, (user) => {
      if (user) {
        return user.providerData.forEach((profile) => {
          console.log('  Name: ' + profile.displayName)
          console.log('  Email: ' + profile.email)
          console.log('  Photo URL: ' + profile.photoURL)
        })
      } else {
        return null
      }
    })
  }, [])

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

  async function updatePassword({ newPassword }: any) {
    if (!user) {
      return console.log('User not authenticated')
    }

    await firebase
      .updatePassword(user, newPassword)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  async function resetPassword({ email }: any) {
    await firebase
      .sendPasswordResetEmail(auth, email)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
