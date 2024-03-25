import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AddToCart } from '../components/Cart/AddToCart'
import { getProductById } from '../../firebase/utils/products'

export function Product() {
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')

  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response)
      })
      .catch(() => {
        setError('No se encontró el producto :(')
      })
  }, [itemId])

  return (
    <main className="flex flex-col md:flex-row md:[&>*]:flex-1 max-w-[1200px] px-2 py-2 h-full">
      <Render error={error} product={product} />
    </main>
  )
}

const Render = ({ product, error }) => {
  if (!product && !error) return null
  if (error)
    return (
      <section className="flex flex-col justify-center items-center flex-1">
        <h1 className="text-4xl font-extralight">Ocurrió un error</h1>
        <span>Es posible que el producto que estabas buscando no exista</span>
        <Link to="/" className="hover:underline">
          Volver a la home
        </Link>
      </section>
    )

  return (
    <>
      <section className="flex items-center">
        <img
          className="max-h-[100vh] w-full object-cover"
          src={product.image}
          alt={product.title}
        />
      </section>
      <section className="flex flex-col px-4">
        <h1 className="text-4xl font-extralight">{product.name}</h1>
        <p className="mb-12">${product.price}</p>
        <p>{product.description}</p>
        <div className="mt-auto">
          <AddToCart product={product} />
        </div>
      </section>
    </>
  )
}
