// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBxBps7dhuOd4FFULCmBbXdVrnrldsNPnI',
  authDomain: 'el-mundo-de-tulia-79b31.firebaseapp.com',
  projectId: 'el-mundo-de-tulia-79b31',
  storageBucket: 'el-mundo-de-tulia-79b31.appspot.com',
  messagingSenderId: '337710368617',
  appId: '1:337710368617:web:384f5810c01ff9fed55ff8',
  measurementId: 'G-XXT3V2HM1D',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
