import * as firebase from 'firebase/storage'
import { app } from '~/services/firebase/firebaseConfig'

export async function handleUpload() {
  const storage = firebase.getStorage(app)

  const fileName = new Date().getTime()

  const reference = firebase.ref(storage, `/images/${fileName}.png`)
}
