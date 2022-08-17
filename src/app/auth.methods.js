import { app } from './firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export const auth = getAuth(app)

export async function firebaseSignIn (email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function firebaseRegisterUser (email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function firebaseSignInWithGoogle () {
  const googleProvider = new GoogleAuthProvider()
  return await signInWithPopup(auth, googleProvider)
}

export async function firebaseSignOut () {
  return await signOut(auth)
}
