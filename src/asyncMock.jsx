export const products = [
  {
    id: '1',
    name: 'Amigurumi 1',
    price: 1000,
    category: 'Amigurumis',
    img: '/1.jpg',
    stock: 25,
    description: 'Descrpción de Amigurumi',
  },
  {
    id: '2',
    name: 'Amigurumi 2',
    price: 2000,
    category: 'Tejidos',
    img: '/2.jpg',
    stock: 25,
    description: 'Descrpción de Amigurumi',
  },
  {
    id: '3',
    name: 'Amigurumi 3',
    price: 3000,
    category: 'Manualidades',
    img: '/1.jpg',
    stock: 25,
    description: 'Descrpción de Amigurumi',
  },
]
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId))
    }, 500)
  })
}
