import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'twitter-auth-3dc33.firebaseapp.com',
  projectId: 'twitter-auth-3dc33',
  storageBucket: 'twitter-auth-3dc33.appspot.com',
  messagingSenderId: '1077123614883',
  appId: '1:1077123614883:web:bf8a259fd1dabc15c09716',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
