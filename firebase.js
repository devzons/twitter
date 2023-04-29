import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFireStore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'twitter-auth-d682e.firebaseapp.com',
  projectId: 'twitter-auth-d682e',
  storageBucket: 'twitter-auth-d682e.appspot.com',
  messagingSenderId: '176336087551',
  appId: '1:176336087551:web:90a24dc19c96e62bd21fca',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFireStore(app)
const storage = getStorage(app)

export { db, storage }
