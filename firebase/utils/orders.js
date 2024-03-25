import { addDoc, doc, getDoc } from 'firebase/firestore'
import { ordersCollection } from '../collections'

export const createOrder = async (order) => {
  return await addDoc(ordersCollection, order)
}

export const getOrderById = async (id) => {
  const ref = doc(ordersCollection, id)
  return await getDoc(ref).then((doc) => {
    if (!doc.exists()) return null
    return { id: doc.id, ...doc.data() }
  })
}
