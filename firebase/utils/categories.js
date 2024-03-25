import { doc, getDoc, getDocs } from 'firebase/firestore'
import { categoriesCollection } from '../collections'

export const getAllCategories = async () => {
  return await getDocs(categoriesCollection).then((snap) => {
    return snap.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
  })
}

export const getCategoryById = async (id) => {
  const ref = doc(categoriesCollection, id)
  return getDoc(ref).then((doc) => {
    if (!doc.exists()) throw new Error('Not found')
    return { id: doc.id, ...doc.data() }
  })
}
