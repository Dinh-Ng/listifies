// Import the functions you need from the SDKs you need
import { getAnalytics } from '@firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  apiKey: 'AIzaSyAP54TWjUUV_R6uLwbvDwQYVNgKBMHZ234',
  authDomain: 'listifies-dev-3ab59.firebaseapp.com',
  projectId: 'listifies-dev-3ab59',
  storageBucket: 'listifies-dev-3ab59.firebasestorage.app',
  messagingSenderId: '142741508751',
  appId: '1:142741508751:web:625fc98135cf7abb2c16fa',
  measurementId: 'G-F238JF5Q1N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

export const googleProvider = new GoogleAuthProvider()

export const analytics = getAnalytics(app)
