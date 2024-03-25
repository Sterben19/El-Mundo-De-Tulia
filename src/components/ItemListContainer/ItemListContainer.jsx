/* eslint-disable react-hooks/exhaustive-deps */
import ItemList from '../ItemList/ItemList'
import Section from '../Common/Section'
import { ItemListSkeleton } from '../Skeletons/ItemListSkeleton'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../../firebase/utils/products'

export const ItemListContainer = ({
  greetings = 'Todos los productos',
  fn = getAllProducts,
}) => {
  const [items, setItems] = useState({
    loading: true,
    error: false,
    products: [],
  })

  useEffect(() => {
    fn()
      .then((res) => {
        setItems({ loading: false, error: false, products: res })
      })
      .catch(() => setItems({ products: [], loading: false, error: true }))
  }, [setItems])

  return (
    <Section className="flex flex-col my-1">
      <h1 className="text-3xl font-extralight text-center">{greetings}</h1>
      <Render {...items} />
    </Section>
  )
}

const Render = ({ loading, error, products }) => {
  if (loading) return <ItemListSkeleton amount={4} />
  if (error) return <p>Error al cargar los productos</p>
  return <ItemList products={products} />
}
