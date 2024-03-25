import { collection } from 'firebase/firestore'
import { db } from './config'

export const productsCollection = collection(db, 'products')
export const categoriesCollection = collection(db, 'categories')
export const ordersCollection = collection(db, 'orders')
