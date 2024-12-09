import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const auth = getAuth()

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user)
    })
    .catch((err) => {
      console.log(err)
    })
}
