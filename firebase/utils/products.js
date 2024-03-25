import { addDoc, doc, getDoc, getDocs, query, where, limit } from 'firebase/firestore'
import { productsCollection } from '../collections'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { storage } from '../config'
import categories from '../../src/assets/categories.json'

export const getAllProducts = async () => {
  return await getDocs(productsCollection).then((snap) => {
    return snap.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
  })
}

export const getAllProductsWithLimit = async (l) => {
  const q = query(productsCollection, limit(l))
  return await getDocs(q).then((snap) => {
    return snap.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
  })

}

export const getProductById = async (id) => {
  const ref = doc(productsCollection, id)
  return await getDoc(ref).then((doc) => {
    if (!doc.exists()) throw new Error('notfound')
    return { id: doc.id, ...doc.data() }
  })
}

export const getProductsByCategory = async (category) => {
  const isParentCategory = categories.find((cat) => cat.slug === category)

  if (!isParentCategory) {
    const q = query(
      productsCollection,
      where('categories', 'array-contains', category)
    )
    return await getDocs(q).then((snap) => {
      return snap.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
    })
  } else {
    const q = query(
      productsCollection,
      where(
        'categories',
        'array-contains-any',
        [category, isParentCategory.children.map((el) => el.slug)].flat()
      )
    )
    return await getDocs(q).then((snap) => {
      return snap.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
    })
  }
}

export const uploadProduct = async (product) => {
  return await addDoc(productsCollection, product)
}

export const uploadImage = async (file) => {
  const storageRef = ref(storage, `images/${file.name}`)

  await uploadBytes(storageRef, file)
  return await getDownloadURL(storageRef)
}
